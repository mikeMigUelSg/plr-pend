/**
 * main.js - Ponto de entrada da aplicação
 * Inicializa o dashboard quando o DOM estiver pronto
 */

import { App } from './App.js';

// Aguarda o DOM estar pronto
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa a aplicação
  window.app = new App();

  // Log de inicialização (pode ser removido em produção)
  console.log('Dashboard de Pendências E-REDES inicializado');
});
