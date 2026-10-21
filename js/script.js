'use strict';
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menu.hidden = false;
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.querySelector('span').textContent = '+'; }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; navigation.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); menu.querySelector('span').textContent = open ? '−' : '+'; });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menu.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
matchMedia('(min-width:701px)').addEventListener('change', closeMenu);
let toastTimer;
const status = document.querySelector('#copy-status');
document.querySelectorAll('.copy').forEach(button => button.addEventListener('click', async () => {
  let success = false;
  try { if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText('669804635'); success = true; } } catch { /* Try the local fallback below. */ }
  if (!success) {
    const field = document.createElement('textarea'); field.value = '669804635'; field.setAttribute('aria-label', 'Teléfono para copiar'); field.style.cssText = 'position:fixed;left:-9999px;top:0'; document.body.append(field); field.select();
    try { success = document.execCommand('copy'); } catch { success = false; }
    field.remove(); button.focus({ preventScroll: true });
  }
  status.textContent = success ? 'Teléfono copiado: 669 804 635' : 'No se pudo copiar. Selecciona el número: 669804635'; status.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => status.classList.remove('visible'), success ? 3500 : 10000);
}));
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.remove('waiting'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => { element.classList.add('waiting'); observer.observe(element); });
}
document.querySelector('#year').textContent = new Date().getFullYear();
