/* components.js — nav, social bar e footer compartilhados */

const NAV_HTML = `
<nav>
  <a class="nav-brand" href="index.html">
    <span class="nav-badge">Vereador</span>
    <span class="nav-nome">Marcos Araújo</span>
  </a>
  <ul class="nav-links" id="navLinks">
    <li><a href="index.html"      data-page="index">Início</a></li>
    <li><a href="biografia.html"  data-page="biografia">Biografia</a></li>
    <li><a href="videos.html"     data-page="videos">Vídeos</a></li>
    <li><a href="galeria.html"    data-page="galeria">Galeria</a></li>
    <li><a href="leis.html"       data-page="leis">Leis & Decretos</a></li>
    <li><a href="contato.html"    data-page="contato">Contato</a></li>
  </ul>
  <div class="hamburger" onclick="toggleMenu()">
    <span></span><span></span><span></span>
  </div>
</nav>`;

const SOCIAL_HTML = `
<div class="social-bar">
  <span class="social-bar-label">Siga nas redes:</span>
  <a class="social-link s-instagram" href="#" target="_blank">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
    Instagram
  </a>
  <a class="social-link s-facebook" href="#" target="_blank">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
    Facebook
  </a>
  <a class="social-link s-youtube" href="#" target="_blank">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
    YouTube
  </a>
  <a class="social-link s-whatsapp" href="https://wa.me/5521000000000" target="_blank">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.989.574 3.842 1.567 5.403L2 22l4.745-1.545A9.962 9.962 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
    WhatsApp
  </a>
  <a class="social-link s-tiktok" href="#" target="_blank">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>
    TikTok
  </a>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-nome">Marcos <span>Araújo</span></div>
  <div class="footer-sub">Vereador · Câmara Municipal de Itaboraí — Rio de Janeiro</div>
  <div class="footer-links">
    <a href="index.html">Início</a>
    <a href="biografia.html">Biografia</a>
    <a href="videos.html">Vídeos</a>
    <a href="galeria.html">Galeria</a>
    <a href="leis.html">Leis & Decretos</a>
    <a href="contato.html">Contato</a>
  </div>
  <div class="footer-links">
    <a href="mailto:contato@marcosaraujo.com.br">✉ contato@marcosaraujo.com.br</a>
    <a href="tel:+5521000000000">📞 (21) 0000-0000</a>
    <a href="https://wa.me/5521000000000" target="_blank">💬 WhatsApp</a>
  </div>
  <div class="footer-copy">© 2026 · Vereador Marcos Araújo · Câmara Municipal de Itaboraí–RJ</div>
</footer>`;

function initPage(pageId) {
  // injeta nav + social + footer
  document.getElementById('nav-placeholder').innerHTML   = NAV_HTML;
  document.getElementById('social-placeholder').innerHTML = SOCIAL_HTML;
  document.getElementById('footer-placeholder').innerHTML = FOOTER_HTML;

  // marca link ativo
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.dataset.page === pageId) a.classList.add('ativo');
  });
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
