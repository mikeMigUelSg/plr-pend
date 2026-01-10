/**
 * ContentBlock - Renderizador de blocos de conteúdo flexíveis
 * Suporta diferentes tipos de blocos que podem ser combinados livremente
 */

export class ContentBlock {
  /**
   * Renderiza um bloco de conteúdo baseado no seu tipo
   * @param {Object} block - Configuração do bloco
   * @returns {string} HTML do bloco
   */
  static render(block) {
    if (!block || !block.type) {
      console.warn('Bloco inválido:', block);
      return '';
    }

    const renderers = {
      text: this.renderText,
      steps: this.renderSteps,
      image: this.renderImage,
      gallery: this.renderGallery,
      download: this.renderDownload,
      alert: this.renderAlert,
      imageWithDownload: this.renderImageWithDownload
    };

    const renderer = renderers[block.type];
    if (!renderer) {
      console.warn(`Tipo de bloco desconhecido: ${block.type}`);
      return '';
    }

    return renderer.call(this, block);
  }

  /**
   * Bloco de texto simples
   */
  static renderText(block) {
    return `
      <p class="description-text">
        ${block.text || ''}
      </p>
    `;
  }

  /**
   * Bloco de passos numerados
   */
  static renderSteps(block) {
    if (!block.items || !Array.isArray(block.items)) {
      return '';
    }

    const stepsHTML = block.items.map(passo => `
      <div class="step-item">
        <div class="step-number">${passo.numero || ''}</div>
        <div class="step-content">
          <h4>${passo.titulo || ''}</h4>
          <p>${passo.descricao || ''}</p>
          ${passo.link ? `
            <a href="${passo.link.url}" target="_blank" class="external-link">
              ${passo.link.texto} <i class="fas fa-external-link-alt" style="margin-left: 5px; font-size: 0.8em;"></i>
            </a>
          ` : ''}
        </div>
      </div>
    `).join('');

    return `
      <div class="steps-list">
        <h3 style="font-size: 0.85rem; text-transform: uppercase; color: #888; margin-bottom: 20px; font-weight: 700;">
          ${block.title || 'Como proceder:'}
        </h3>
        ${stepsHTML}
      </div>
    `;
  }

  /**
   * Bloco de imagem única
   */
  static renderImage(block) {
    if (!block.src) return '';

    return `
      <div class="image-section">
        <img src="${block.src}" alt="${block.alt || ''}" class="illustration-image">
      </div>
    `;
  }

  /**
   * Bloco de galeria de imagens
   */
  static renderGallery(block) {
    if (!block.images || !Array.isArray(block.images)) {
      return '';
    }

    const imagesHTML = block.images.map(img => `
      <div class="gallery-item">
        <img src="${img.src}" alt="${img.alt || ''}" class="gallery-image">
        ${img.caption ? `<p class="image-caption">${img.caption}</p>` : ''}
      </div>
    `).join('');

    return `
      <div class="image-gallery">
        ${imagesHTML}
      </div>
    `;
  }

  /**
   * Bloco de download
   */
  static renderDownload(block) {
    if (!block.url) return '';

    return `
      <div class="download-section">
        <a href="${block.url}" class="download-button">
          <i class="fas fa-download"></i>
          ${block.text || 'Download'}
        </a>
      </div>
    `;
  }

  /**
   * Bloco de imagem com botão de download
   */
  static renderImageWithDownload(block) {
    if (!block.image && !block.download) return '';

    return `
      <div class="image-download-section">
        <div class="image-wrapper">
          ${block.image ? `
            <img src="${block.image.src}" alt="${block.image.alt || ''}" class="illustration-image">
          ` : ''}
          ${block.download ? `
            <a href="${block.download.url}" class="download-button">
              <i class="fas fa-download"></i>
              ${block.download.text || 'Download'}
            </a>
          ` : ''}
        </div>
      </div>
    `;
  }

  /**
   * Bloco de alerta/aviso
   */
  static renderAlert(block) {
    const variant = block.variant || 'info';
    const icons = {
      info: 'fas fa-info-circle',
      warning: 'fas fa-exclamation-triangle',
      success: 'fas fa-check-circle',
      error: 'fas fa-times-circle'
    };

    return `
      <div class="alert alert-${variant}">
        <i class="${icons[variant] || icons.info}"></i>
        <span>${block.message || ''}</span>
      </div>
    `;
  }
}
