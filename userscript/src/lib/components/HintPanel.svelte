<script lang="ts">
  import { onMount } from 'svelte';
  import { GM_xmlhttpRequest } from '$';
  const SUPABASE_URL = 'https://kacuunztbvznzhfsyfgp.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthY3V1bnp0YnZ6bnpoZnN5ZmdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxODY0NjEsImV4cCI6MjA2OTc2MjQ2MX0.VsC1HLOG413lXABUn4Sfv9c_arN06IxH9EXIdn-fzj4';

  let country = '';
  let continent = '';
  let meta_type = '';
  let description = '';
  let error = '';

  const metaTypes = ['bollard', 'car', 'sign', 'language', 'generation', 'antenna', 'coverage'];

  onMount(() => {
    detectCountry();
    detectMetaType();
    fetchContinent(country);
  });

  function detectCountry() {
    const flag = document.querySelector('[class*="result-layout_flag"] img, img.flag');
    const alt = flag?.getAttribute('alt')?.trim();
    if (alt) {
      country = alt;
    }
  }

  function detectMetaType() {
    const note = document.querySelector('.geometa-note')?.textContent?.toLowerCase() || '';
    const found = metaTypes.find((t) => note.includes(t));
    if (found) {
      meta_type = found;
    }
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

  async function fetchContinent(c: string) {
    if (!c) {
      continent = '';
      return;
    }
    try {
      const res = await gmRequest({
        method: 'GET',
        url: `${SUPABASE_URL}/rest/v1/country_meta?select=continent&country=eq.${encodeURIComponent(c)}`,
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      });
      if (res.status >= 200 && res.status < 300) {
        const data = JSON.parse(res.responseText);
        continent = data?.[0]?.continent || '';
        if (!continent) {
          error = 'Continent not found';
        } else {
          error = '';
        }
      } else {
        continent = '';
        error = 'Failed to fetch continent';
      }
    } catch (e) {
      continent = '';
      error = 'Failed to fetch continent';
    }
  }

  async function submit() {
    if (!continent) {
      error = 'Continent required';
      return;
    }
    try {
      const res = await gmRequest({
        method: 'POST',
        url: `${SUPABASE_URL}/rest/v1/hints`,
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({ country, continent, meta_type, description })
      });
      if (res.status >= 200 && res.status < 300) {
        country = '';
        continent = '';
        meta_type = '';
        description = '';
        error = '';
      } else {
        error = 'Failed to submit';
      }
    } catch (e) {
      error = 'Failed to submit';
    }
  }
</script>

<style>
  .hint-panel {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    background: #fff;
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
  }
  .hint-panel .error {
    color: #b00;
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
  }
</style>

<div class="hint-panel">
  <header>
    <strong>Hint</strong>
    <button class="close" on:click={() => (document.getElementById('geometa-hints')?.remove())}>×</button>
  </header>
  <div>
    <label>Country <input bind:value={country} on:change={() => fetchContinent(country)} /></label>
  </div>
  <div>
    <label>Continent <input readonly bind:value={continent} /></label>
  </div>
  <div>
    <label>Meta type <input bind:value={meta_type} /></label>
  </div>
  <div>
    <label>Description <textarea rows="2" bind:value={description}></textarea></label>
  </div>
  {#if error}
    <div class="error">{error}</div>
  {/if}
  <button on:click={submit} disabled={!continent}>Submit</button>
</div>
