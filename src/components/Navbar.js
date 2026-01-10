/**
 * Navbar - Componente de navegação lateral
 * Renderiza o menu de navegação com base nos dados das pendências
 */

export class Navbar {
  constructor(config, pendencias, onNavigate) {
    this.config = config;
    this.pendencias = pendencias;
    this.onNavigate = onNavigate;
    this.activeId = null;
  }

  /**
   * Renderiza a navbar completa
   */
  render() {
    const navbarElement = document.querySelector('.sidebar');
    if (!navbarElement) {
      console.error('Elemento .sidebar não encontrado');
      return;
    }

    navbarElement.innerHTML = `
      ${this.renderLogo()}
      ${this.renderNavSection()}
    `;

    this.attachEventListeners();
  }

  /**
   * Renderiza a área do logo
   */
  renderLogo() {
    return `
      <div class="logo-area">
        <img src="${this.config.logo}" alt="E-REDES" class="logo-image">
      </div>
    `;
  }

  /**
   * Renderiza a seção de navegação
   */
  renderNavSection() {
    const navItems = this.pendencias
      .map(pendencia => this.renderNavItem(pendencia))
      .join('');

    return `
      <div class="nav-section">
        <div class="nav-label">${this.config.title} (${this.pendencias.length})</div>
        ${navItems}
      </div>
    `;
  }

  /**
   * Renderiza um item individual de navegação
   */
  renderNavItem(pendencia) {
    const icon = pendencia.navIcon || 'fas fa-edit';
    const isActive = this.activeId === pendencia.id ? 'active' : '';

    return `
      <a href="#${pendencia.id}"
         class="nav-item ${isActive}"
         data-pendencia="${pendencia.id}">
        <i class="${icon}"></i> ${pendencia.titulo}
      </a>
    `;
  }

  /**
   * Anexa event listeners aos itens de navegação
   */
  attachEventListeners() {
    const navItems = document.querySelectorAll('.nav-item[data-pendencia]');

    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const pendenciaId = item.dataset.pendencia;
        this.setActive(pendenciaId);

        if (this.onNavigate) {
          this.onNavigate(pendenciaId);
        }
      });
    });
  }

  /**
   * Define o item ativo na navegação
   */
  setActive(pendenciaId) {
    this.activeId = pendenciaId;

    const navItems = document.querySelectorAll('.nav-item[data-pendencia]');
    navItems.forEach(item => {
      if (item.dataset.pendencia === pendenciaId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  /**
   * Retorna o ID da pendência ativa
   */
  getActive() {
    return this.activeId;
  }
}
