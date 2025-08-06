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

  const META_TYPE_OPTIONS = [
    'antenna',
    'arrow',
    'bollard',
    'brickwork',
    'building',
    'car',
    'curb',
    'double-yellow',
    'utility box',
    'flag',
    'guardrail',
    'license',
    'grass',
    'mirror',
    'mountain',
    'pavement',
    'pole',
    'road lines',
    'rock',
    'roof',
    'roundabout',
    'satellite dish',
    'shrubbery',
    'sidewalk',
    'signs',
    'street light',
    'terrain',
    'language',
    'trunk',
    'vegetation',
    'wall',
    'window'
  ];

  const KEYWORD_MAP: Record<string, string[]> = {
    'double-yellow': ['double yellow', 'yellow lines'],
    'road lines': ['road lines', 'yellow lines']
  };
  META_TYPE_OPTIONS.forEach((t) => {
    if (!KEYWORD_MAP[t]) KEYWORD_MAP[t] = [t];
    else KEYWORD_MAP[t].push(t);
  });

  onMount(() => {
    detectDescription();
    detectCountry();
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

  function detectMetaType() {
    const elements = document.querySelectorAll(
      'strong.svelte-a3mhc8, .geometa-note.svelte-a3mhc8'
    );
    let text = '';
    elements.forEach((el) => {
      text += ' ' + (el.textContent?.toLowerCase() || '');
    });
    for (const [type, keywords] of Object.entries(KEYWORD_MAP)) {
      if (keywords.some((k) => text.includes(k))) {
        meta_type = type;
        break;
      }
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
  .hint-panel textarea,
  .hint-panel select {
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
    <label>
      Meta type
      <select bind:value={meta_type} on:keydown|stopPropagation on:change|stopPropagation>
        <option value=""></option>
        {#each META_TYPE_OPTIONS as t}
          <option value={t}>{t}</option>
        {/each}
      </select>
    </label>
  </div>
  <div>
    <label>Description <textarea rows="2" bind:value={description} on:keydown|stopPropagation></textarea></label>
  </div>
  {#if error}
    <div class="error">{error}</div>
  {/if}
  <button on:click={submit}>Submit</button>
</div>
