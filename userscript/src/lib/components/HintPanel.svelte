<script lang="ts">
  import { onMount } from 'svelte';
  import { GM_xmlhttpRequest } from '$';
  import {
    countryNames,
    countryContinents
  } from '../../../../apps/api/src/lib/userscript/constants';

  const SUPABASE_URL = 'https://kacuunztbvznzhfsyfgp.supabase.co';
  const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthY3V1bnp0YnZ6bnpoZnN5ZmdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxODY0NjEsImV4cCI6MjA2OTc2MjQ2MX0.VsC1HLOG413lXABUn4Sfv9c_arN06IxH9EXIdn-fzj4';

  let country = '';
  let meta_type = '';
  let description = '';
  let image_url = '';
  let error = '';
  let continent = '';

  const fallbackMetaTypes = ['bollard', 'car', 'sign', 'language', 'generation', 'antenna', 'coverage'];
  let metaTypes: string[] = [];

  onMount(async () => {
    detectDescription();
    detectCountry();
    await loadMetaTypes();
    detectMetaType();
    detectImage();
  });

  $: continent = countryContinents[country] || '';

  function detectDescription() {
    description = document.querySelector('.geometa-note')?.textContent?.trim() || '';
  }

  function detectCountry() {
    const flag = document.querySelector('[class*="result-layout_flag"] img, img.flag');
    const alt = flag?.getAttribute('alt')?.trim();
    if (alt) {
      country = alt;
      return;
    }
    const note = description.toLowerCase();
    const found = countryNames.find((c) => note.includes(c.toLowerCase()));
    if (found) {
      country = found;
    }
  }

  async function loadMetaTypes() {
    try {
      const res = await gmRequest({
        method: 'GET',
        url: `${SUPABASE_URL}/rest/v1/meta_types?select=name`,
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      });
      if (res.status >= 200 && res.status < 300) {
        metaTypes = JSON.parse(res.responseText).map((t: any) => t.name.toLowerCase());
      }
    } catch (e) {
      // ignore fetch errors and rely on fallbackMetaTypes
    }
  }

  function detectMetaType() {
    const note = description.toLowerCase();
    const types = metaTypes.length ? metaTypes : fallbackMetaTypes;
    const found = types.find((t) => note.includes(t));
    if (found) {
      meta_type = found;
    }
  }

  function detectImage() {
    const img = document.querySelector('[class*="result-layout_root"] img.responsive-image');
    image_url = img?.getAttribute('src') || '';
  }

  function gmRequest(options: any): Promise<any> {
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        ...options,
        onload: resolve,
        onerror: reject
      });
    });
  }

  async function submit() {
    try {
      detectImage();
      const checkRes = await gmRequest({
        method: 'GET',
        url: `${SUPABASE_URL}/rest/v1/hints?select=id&image_url=eq.${encodeURIComponent(image_url)}`,
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      });
      const existing = JSON.parse(checkRes.responseText);
      if (existing.length > 0) {
        error = 'Hint already exists for this image URL';
        return;
      }
      const res = await gmRequest({
        method: 'POST',
        url: `${SUPABASE_URL}/rest/v1/hints`,
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({ country, continent, meta_type, description, image_url })
      });
      if (res.status >= 200 && res.status < 300) {
        country = '';
        meta_type = '';
        description = '';
        image_url = '';
        continent = '';
        error = '';
      } else {
        error = `Failed to submit: ${res.status} ${res.responseText}`;
      }
    } catch (e) {
      error = `Failed to submit: ${e instanceof Error ? e.message : e}`;
    }
  }
</script>

<style>
  .hint-panel {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    background: #444;
    color: #fff;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    z-index: 9999;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    max-width: 300px;
  }
  .hint-panel input,
  .hint-panel textarea {
    width: 100%;
    margin-bottom: 0.25rem;
    color: #000;
    background: #fff;
  }
  .hint-panel .error {
    color: #f88;
    font-size: 0.8rem;
    margin-bottom: 0.25rem;
  }
  .hint-panel header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;
  }
  .hint-panel button.close {
    background: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
  }
</style>

<div class="hint-panel">
  <header>
    <strong>Hint</strong>
    <button class="close" on:click={() => (document.getElementById('geometa-hints')?.remove())}>×</button>
  </header>
  <div>
    <label>Country <input bind:value={country} on:keydown|stopPropagation /></label>
  </div>
  <div>
    <label>Meta type <input bind:value={meta_type} on:keydown|stopPropagation /></label>
  </div>
  <div>
    <label>Description <textarea rows="2" bind:value={description} on:keydown|stopPropagation></textarea></label>
  </div>
  {#if error}
    <div class="error">{error}</div>
  {/if}
  <button on:click={submit}>Submit</button>
</div>
