/**
 * ActionCard - Componente de card de pendência
 * Renderiza cards flexíveis com diferentes tipos de conteúdo
 */

import { ContentBlock } from './ContentBlock.js';

export class ActionCard {
  /**
   * Renderiza um card de pendência completo
   * @param {Object} pendencia - Dados da pendência
   * @returns {string} HTML do card
   */
  static render(pendencia) {
    if (!pendencia) {
      return '<p>Pendência não encontrada.</p>';
    }

    const header = this.renderHeader(pendencia);
    const content = this.renderContent(pendencia);

    return `
      <section class="action-card">
        ${header}
        <div class="card-body">
          ${content}
        </div>
      </section>
    `;
  }

  /**
   * Renderiza o cabeçalho do card
   */
  static renderHeader(pendencia) {
    const header = pendencia.header || {};
    const tipo = header.tipo || 'info';
    const icon = header.icon || 'fas fa-info-circle';
    const subtitulo = header.subtitulo || '';

    return `
      <div class="card-header ${tipo}">
        <div class="header-icon ${tipo}">
          <i class="${icon}"></i>
        </div>
        <div class="header-text">
          <h2>${pendencia.titulo || 'Sem título'}</h2>
          ${subtitulo ? `<p>${subtitulo}</p>` : ''}
        </div>
      </div>
    `;
  }

  /**
   * Renderiza o conteúdo do card usando blocos flexíveis
   */
  static renderContent(pendencia) {
    if (!pendencia.content || !Array.isArray(pendencia.content)) {
      return '<p>Sem conteúdo disponível.</p>';
    }

    return pendencia.content
      .map(block => ContentBlock.render(block))
      .join('');
  }
}
