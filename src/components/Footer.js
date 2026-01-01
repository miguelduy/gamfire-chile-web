export function loadFooter() {
  const year = new Date().getFullYear();
  const footerHtml = `
    <footer class="main-footer">
      <div class="container footer-grid">
        <div class="footer-col">
          <h3>Gamfire Chile</h3>
          <p>Equipamiento profesional para bomberos y servicios de emergencia.</p>
        </div>
        <div class="footer-col">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="/index.html">Inicio</a></li>
            <li><a href="/catalogo.html">Catálogo</a></li>
            <li><a href="/contacto.html">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Síguenos</h3>
          <a href="https://instagram.com/gamfire.chile" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
      <div class="footer-bottom text-center">
        <p>&copy; ${year} DTI DuyvesTI. Todos los derechos reservados.</p>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHtml);
}
