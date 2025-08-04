import { mount } from 'svelte';
import HintPanel from './components/HintPanel.svelte';

export function mountHintPanel(container: Element) {
  const existing = document.getElementById('geometa-hints');
  if (existing) {
    existing.remove();
  }
  const element = document.createElement('div');
  element.id = 'geometa-hints';
  container.appendChild(element);
  mount(HintPanel, { target: element });
}
