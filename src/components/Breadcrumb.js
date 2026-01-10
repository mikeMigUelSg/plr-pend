/**
 * Breadcrumb - Componente de navegação breadcrumb
 */

export class Breadcrumb {
  constructor(element) {
    this.element = element || document.querySelector('.breadcrumb');
  }

  /**
   * Atualiza o breadcrumb com a pendência atual
   */
  update(pendencia) {
    if (!this.element) return;

    const titulo = pendencia ? pendencia.titulo : 'Pendências';
    const breadcrumbText = pendencia
      ? `Início > Pendências > ${titulo}`
      : 'Início > Pendências';

    this.element.textContent = breadcrumbText;
  }

  /**
   * Define o breadcrumb para o estado inicial
   */
  reset() {
    this.update(null);
  }
}
