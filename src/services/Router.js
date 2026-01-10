/**
 * Router - Serviço de roteamento e navegação
 * Gere a navegação entre pendências e sincroniza com a URL
 */

export class Router {
  constructor(pendencias, onRouteChange) {
    this.pendencias = pendencias;
    this.onRouteChange = onRouteChange;
    this.currentRoute = null;

    this.init();
  }

  /**
   * Inicializa o router
   */
  init() {
    // Escuta mudanças no hash da URL
    window.addEventListener('hashchange', () => this.handleHashChange());

    // Processa a rota inicial
    this.handleHashChange();
  }

  /**
   * Processa mudanças no hash da URL
   */
  handleHashChange() {
    const hash = window.location.hash.slice(1); // Remove o #

    if (hash) {
      this.navigateTo(hash);
    } else {
      this.navigateToFirst();
    }
  }

  /**
   * Navega para uma pendência específica
   */
  navigateTo(pendenciaId) {
    const pendencia = this.pendencias.find(p => p.id === pendenciaId);

    if (pendencia) {
      this.currentRoute = pendenciaId;
      window.location.hash = `#${pendenciaId}`;

      if (this.onRouteChange) {
        this.onRouteChange(pendencia);
      }
    } else {
      console.warn(`Pendência não encontrada: ${pendenciaId}`);
      this.navigateToFirst();
    }
  }

  /**
   * Navega para a primeira pendência
   */
  navigateToFirst() {
    if (this.pendencias.length > 0) {
      const firstPendencia = this.pendencias[0];
      this.navigateTo(firstPendencia.id);
    }
  }

  /**
   * Retorna a rota atual
   */
  getCurrentRoute() {
    return this.currentRoute;
  }

  /**
   * Retorna a pendência atual
   */
  getCurrentPendencia() {
    return this.pendencias.find(p => p.id === this.currentRoute);
  }
}
