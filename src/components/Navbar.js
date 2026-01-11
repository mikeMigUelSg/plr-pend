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
    this.isOpen = false;
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

    // Renderiza o conteúdo da sidebar
    navbarElement.innerHTML = `
      ${this.renderLogo()}
      ${this.renderNavSection()}
    `;

    // Renderiza o botão de toggle fora da sidebar
    this.renderToggleButton();

    this.attachEventListeners();
  }

  /**
   * Renderiza o botão de toggle para mobile (fora da sidebar)
   */
  renderToggleButton() {
    // Remove botão existente se houver
    const existingBtn = document.querySelector('.navbar-toggle');
    if (existingBtn) {
      existingBtn.remove();
    }

    // Cria o botão
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'navbar-toggle';
    toggleBtn.setAttribute('aria-label', 'Toggle menu');
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';

    // Adiciona ao body
    document.body.appendChild(toggleBtn);
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
        <a href="plr2/index.html" class="preview-button" style="display: block; padding: 8px 12px; margin: 0 16px 12px; background: #f5f5f5; border-radius: 4px; text-decoration: none; color: #333; font-size: 0.85rem; font-weight: 600; text-align: center; transition: all 0.2s ease; border: 1px solid #e0e0e0;">
          <i class="fas fa-eye" style="margin-right: 6px;"></i>Previsualizar
        </a>
        <div class="nav-label">${this.config.title} (${this.pendencias.length}/217)</div>
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
    // Event listener para itens de navegação
    const navItems = document.querySelectorAll('.nav-item[data-pendencia]');

    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const pendenciaId = item.dataset.pendencia;
        this.setActive(pendenciaId);

        // Fecha o menu em mobile ao clicar em um item
        this.close();

        if (this.onNavigate) {
          this.onNavigate(pendenciaId);
        }
      });
    });

    // Event listener para o botão de toggle
    const toggleBtn = document.querySelector('.navbar-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.toggle();
      });
    }

    // Event listener para fechar ao clicar fora da navbar em mobile
    document.addEventListener('click', (e) => {
      const sidebar = document.querySelector('.sidebar');
      const toggleBtn = document.querySelector('.navbar-toggle');

      if (this.isOpen &&
          sidebar &&
          !sidebar.contains(e.target) &&
          e.target !== toggleBtn) {
        this.close();
      }
    });
  }

  /**
   * Alterna a visibilidade da navbar
   */
  toggle() {
    this.isOpen = !this.isOpen;
    const sidebar = document.querySelector('.sidebar');

    if (sidebar) {
      sidebar.classList.toggle('open', this.isOpen);
    }
  }

  /**
   * Fecha a navbar
   */
  close() {
    this.isOpen = false;
    const sidebar = document.querySelector('.sidebar');

    if (sidebar) {
      sidebar.classList.remove('open');
    }
  }

  /**
   * Abre a navbar
   */
  open() {
    this.isOpen = true;
    const sidebar = document.querySelector('.sidebar');

    if (sidebar) {
      sidebar.classList.add('open');
    }
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
