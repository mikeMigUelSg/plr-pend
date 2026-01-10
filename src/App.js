/**
 * App - Aplicação Principal
 * Orquestra todos os componentes e serviços do dashboard
 */

import { pendenciasConfig, pendencias } from './data/pendenciasData.js';
import { Navbar } from './components/Navbar.js';
import { ActionCard } from './components/ActionCard.js';
import { Breadcrumb } from './components/Breadcrumb.js';
import { Router } from './services/Router.js';

export class App {
  constructor() {
    // Elementos DOM
    this.container = document.getElementById('action-cards-container');
    this.breadcrumbElement = document.querySelector('.breadcrumb');

    // Componentes
    this.navbar = null;
    this.breadcrumb = null;
    this.router = null;

    // Estado
    this.currentPendencia = null;

    this.init();
  }

  /**
   * Inicializa a aplicação
   */
  init() {
    if (!this.container) {
      console.error('Container #action-cards-container não encontrado');
      return;
    }

    // Inicializa componentes
    this.breadcrumb = new Breadcrumb(this.breadcrumbElement);

    this.navbar = new Navbar(
      pendenciasConfig.navigation,
      pendencias,
      (pendenciaId) => this.handleNavigation(pendenciaId)
    );

    this.router = new Router(
      pendencias,
      (pendencia) => this.handleRouteChange(pendencia)
    );

    // Renderiza a navegação
    this.navbar.render();
  }

  /**
   * Manipula mudanças de navegação vindas da navbar
   */
  handleNavigation(pendenciaId) {
    this.router.navigateTo(pendenciaId);
  }

  /**
   * Manipula mudanças de rota vindas do router
   */
  handleRouteChange(pendencia) {
    this.currentPendencia = pendencia;

    // Atualiza a navbar
    this.navbar.setActive(pendencia.id);

    // Renderiza o card da pendência
    this.renderCard(pendencia);

    // Atualiza o breadcrumb
    this.breadcrumb.update(pendencia);
  }

  /**
   * Renderiza o card da pendência atual
   */
  renderCard(pendencia) {
    if (!this.container) return;

    const cardHTML = ActionCard.render(pendencia);
    this.container.innerHTML = cardHTML;
  }

  /**
   * Retorna a pendência atual
   */
  getCurrentPendencia() {
    return this.currentPendencia;
  }
}
