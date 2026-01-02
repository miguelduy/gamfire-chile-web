export function loadHeader() {
  const headerHtml = `
    <header class="main-header">
      <div class="container header-content">
        <a href="index.html" class="logo">
          <span class="logo-text">GAMFIRE</span> <span class="logo-highlight">CHILE</span>
        </a>
        <button class="mobile-toggle" aria-label="Menu">☰</button>
        <nav class="main-nav">
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="nosotros.html">Nosotros</a></li>
            <li><a href="catalogo.html">Catálogo</a></li>
            <li><a href="contacto.html">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
  document.body.insertAdjacentHTML('afterbegin', headerHtml);

  // Mobile Menu Logic
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
}
