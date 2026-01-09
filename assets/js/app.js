// App principal - Dashboard de Pendências E-REDES
class DashboardPendencias {
    constructor() {
        this.pendenciasData = null;
        this.pendenciaAtual = null;
        this.init();
    }

    async init() {
        await this.carregarDados();
        this.configurarNavegacao();
        this.carregarPendenciaInicial();
    }

    async carregarDados() {
        try {
            const response = await fetch('data/pendencias.json');
            this.pendenciasData = await response.json();
        } catch (error) {
            console.error('Erro ao carregar dados das pendências:', error);
        }
    }

    configurarNavegacao() {
        const navItems = document.querySelectorAll('.nav-item[data-pendencia]');

        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                // Remove classe active de todos os itens
                navItems.forEach(i => i.classList.remove('active'));

                // Adiciona classe active ao item clicado
                item.classList.add('active');

                // Carrega a pendência correspondente
                const pendenciaId = item.dataset.pendencia;
                this.carregarPendencia(pendenciaId);
            });
        });
    }

    carregarPendenciaInicial() {
        // Carrega a primeira pendência por padrão
        const primeiroNavItem = document.querySelector('.nav-item[data-pendencia]');
        if (primeiroNavItem) {
            primeiroNavItem.classList.add('active');
            const pendenciaId = primeiroNavItem.dataset.pendencia;
            this.carregarPendencia(pendenciaId);
        }
    }

    carregarPendencia(pendenciaId) {
        const pendencia = this.pendenciasData.pendencias.find(p => p.id === pendenciaId);

        if (pendencia) {
            this.pendenciaAtual = pendencia;
            this.renderizarActionCard(pendencia);
            this.atualizarBreadcrumb(pendencia);
        }
    }

    renderizarActionCard(pendencia) {
        const container = document.getElementById('action-cards-container');

        const cardHTML = `
            <section class="action-card">
                <div class="card-header ${pendencia.tipo}">
                    <div class="header-icon ${pendencia.tipo}">
                        <i class="${pendencia.icon}"></i>
                    </div>
                    <div class="header-text">
                        <h2>${pendencia.titulo}</h2>
                        <p>${pendencia.subtitulo}</p>
                    </div>
                </div>

                <div class="card-body">
                    <p class="description-text">
                        ${pendencia.descricao}
                    </p>

                    <div class="steps-list">
                        <h3 style="font-size: 0.85rem; text-transform: uppercase; color: #888; margin-bottom: 20px; font-weight: 700;">
                            Como proceder:
                        </h3>

                        ${pendencia.passos.map(passo => `
                            <div class="step-item">
                                <div class="step-number">${passo.numero}</div>
                                <div class="step-content">
                                    <h4>${passo.titulo}</h4>
                                    <p>${passo.descricao}</p>
                                    ${passo.link ? `
                                        <a href="${passo.link.url}" target="_blank" class="external-link">
                                            ${passo.link.texto} <i class="fas fa-external-link-alt" style="margin-left: 5px; font-size: 0.8em;"></i>
                                        </a>
                                    ` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    ${pendencia.imagem ? `
                        <div class="image-download-section">
                            <div class="image-wrapper">
                                <img src="${pendencia.imagem}" alt="${pendencia.titulo}" class="illustration-image">
                                ${pendencia.download ? `
                                    <a href="${pendencia.download.url}" class="download-button">
                                        <i class="fas fa-download"></i>
                                        ${pendencia.download.texto}
                                    </a>
                                ` : ''}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </section>
        `;

        container.innerHTML = cardHTML;
    }

    atualizarBreadcrumb(pendencia) {
        const breadcrumb = document.querySelector('.breadcrumb');
        if (breadcrumb) {
            breadcrumb.textContent = `Início > Pendências > ${pendencia.titulo}`;
        }
    }
}

// Inicializar o dashboard quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new DashboardPendencias();
});
