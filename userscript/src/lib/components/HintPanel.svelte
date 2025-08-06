<script lang="ts">
  import { onMount, tick } from 'svelte';
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
  let continent = '';
  let submitError = '';
  let validationError = '';
  let duplicate = false;
  let status = 'Not Added';
  let isValid = false;

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

  const metaTypeMap: Record<string, string[]> = {
    'double-yellow': ['double yellow', 'yellow lines'],
    'road lines': ['road lines', 'yellow lines']
  };
  META_TYPE_OPTIONS.forEach((t) => {
    if (!metaTypeMap[t]) metaTypeMap[t] = [t];
    else metaTypeMap[t].push(t);
  });

  // Wait for the panel and Learnable Meta content to be fully rendered
  // before attempting any auto-detection.
  onMount(async () => {
    await tick();

    requestAnimationFrame(() => {
      setTimeout(async () => {
        await waitForMetaContent();
        console.debug('[Autofill] Starting...');
        detectCountry();
        detectMetaType();
        detectImage();
      }, 0);
    });
  });

  function waitForMetaContent(): Promise<void> {
    return new Promise((resolve) => {
      const hasContent = () =>
        document.querySelector('strong.svelte-a3mhc8') ||
        document.querySelector('.geometa-note.svelte-a3mhc8') ||
        document.querySelector('[class*="result-layout_root"] img.responsive-image');

      if (hasContent()) {
        resolve();
        return;
      }

      const observer = new MutationObserver(() => {
        if (hasContent()) {
          observer.disconnect();
          resolve();
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });
    });
  }

  $: continent = countryContinents[country] || '';
  $:
    validationError =
      !country || !continent || !meta_type || !description
        ? 'All fields are required'
        : '';
  $: isValid = !validationError && !duplicate;

  function detectCountry() {
    const headerEl = document.querySelector<HTMLHeadingElement>('strong.svelte-a3mhc8');
    const descriptionEl = document.querySelector<HTMLElement>('.geometa-note.svelte-a3mhc8');

    const headerText = headerEl?.textContent?.trim().toLowerCase() ?? '';
    const descriptionText = descriptionEl?.textContent?.trim().toLowerCase() ?? '';
    const fullText = `${headerText} ${descriptionText}`;

    console.debug('headerText:', headerText);
    console.debug('descriptionText:', descriptionText);
    console.debug('fullText:', fullText);

    const countryDropdown = document.querySelector<HTMLSelectElement>('#geometa-country');
    console.debug('countryDropdown exists:', !!countryDropdown);
    console.debug(
      'countryDropdown options:',
      countryDropdown ? Array.from(countryDropdown.options).map((o) => o.value) : []
    );

    if (!countryDropdown) return;

    const match = countryNames.find((c) => fullText.includes(c.toLowerCase()));
    if (match) {
      console.debug('matched keyword:', match);
      countryDropdown.value = match;
      countryDropdown.dispatchEvent(new Event('change', { bubbles: true }));
      return;
    }

    const img = Array.from(document.querySelectorAll('img[alt]')).find((i) => {
      const alt = i.getAttribute('alt')?.trim().toLowerCase() ?? '';
      return countryNames.some((c) => alt.includes(c.toLowerCase()));
    });
    if (img) {
      const alt = img.getAttribute('alt')?.trim().toLowerCase() ?? '';
      const kw = countryNames.find((c) => alt.includes(c.toLowerCase()));
      if (kw) {
        console.debug('matched keyword:', kw);
        countryDropdown.value = kw;
        countryDropdown.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  }

  function detectMetaType() {
    const headerEl = document.querySelector<HTMLHeadingElement>('strong.svelte-a3mhc8');
    const descriptionEl = document.querySelector<HTMLElement>('.geometa-note.svelte-a3mhc8');

    const headerText = headerEl?.textContent?.trim().toLowerCase() ?? '';
    const descriptionText = descriptionEl?.textContent?.trim().toLowerCase() ?? '';
    const fullText = `${headerText} ${descriptionText}`;

    console.debug('headerText:', headerText);
    console.debug('descriptionText:', descriptionText);
    console.debug('fullText:', fullText);

    const metaDropdown = document.querySelector<HTMLSelectElement>('#geometa-meta-type');
    console.debug('metaDropdown exists:', !!metaDropdown);
    console.debug(
      'metaDropdown options:',
      metaDropdown ? Array.from(metaDropdown.options).map((o) => o.value) : []
    );

    if (!metaDropdown) return;

    const match = Object.entries(metaTypeMap).find(([, keywords]) =>
      keywords.some((k) => fullText.includes(k))
    );
    if (match) {
      const [type, keywords] = match;
      const kw = keywords.find((k) => fullText.includes(k));
      console.debug('matched keyword:', kw, '-> type:', type);
      metaDropdown.value = type;
      metaDropdown.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  function detectImage() {
    const img = document.querySelector('[class*="result-layout_root"] img.responsive-image');
    const src = img?.getAttribute('src') || '';
    if (src && src !== image_url) {
      image_url = src;
      checkDuplicate();
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

  async function checkDuplicate() {
    try {
      if (!image_url) {
        duplicate = false;
        status = 'Not Added';
        return;
      }
      const res = await gmRequest({
        method: 'GET',
        url: `${SUPABASE_URL}/rest/v1/hints?select=id&image_url=eq.${encodeURIComponent(
          image_url
        )}`,
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      });
      const data = JSON.parse(res.responseText);
      duplicate = Array.isArray(data) && data.length > 0;
      status = duplicate ? 'Already in Supabase' : 'Not Added';
    } catch (e) {
      duplicate = false;
      status = 'Not Added';
    }
  }

  async function submit() {
    if (!isValid) return;
    submitError = '';
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
        submitError = '';
        detectImage();
      } else {
        submitError = `Failed to submit: ${res.status} ${res.responseText}`;
      }
    } catch (e) {
      submitError = `Failed to submit: ${e instanceof Error ? e.message : e}`;
    }
  }
</script>

<div class="hint-panel">
  <header>
    <strong>Hint</strong>
    <button class="close" on:click={() => document.getElementById('geometa-hints')?.remove()}
      >×</button>
  </header>
  <div>
    <label>
      Country
      <select
        id="geometa-country"
        bind:value={country}
        on:keydown|stopPropagation
        on:change|stopPropagation>
        <option value=""></option>
        {#each countryNames as c}
          <option value={c}>{c}</option>
        {/each}
      </select>
    </label>
  </div>
  <div>
    <label>
      Meta type
      <select
        id="geometa-meta-type"
        bind:value={meta_type}
        on:keydown|stopPropagation
        on:change|stopPropagation>
        <option value=""></option>
        {#each META_TYPE_OPTIONS as t}
          <option value={t}>{t}</option>
        {/each}
      </select>
    </label>
  </div>
  <div>
    <label
      >Description <textarea rows="2" bind:value={description} on:keydown|stopPropagation></textarea
      ></label>
  </div>
  {#if validationError}
    <div class="error">{validationError}</div>
  {/if}
  {#if submitError}
    <div class="error">{submitError}</div>
  {/if}
  <div class="actions">
    <button on:click={submit} disabled={!isValid}>Submit</button>
    <span class="status" style="color: {duplicate ? '#f88' : '#8f8'}">{status}</span>
  </div>
</div>

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
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    max-width: 300px;
  }
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
  .hint-panel .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .hint-panel .status {
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
</style>
