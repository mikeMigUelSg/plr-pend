# Dashboard de Pendências E-REDES

Sistema modular para visualização e gestão de pendências técnicas do Balcão Digital E-REDES.

## Estrutura do Projeto

```
dashPendencias/
├── assets/
│   ├── css/
│   │   ├── variables.css    # Variáveis CSS (cores, dimensões)
│   │   ├── reset.css         # Reset de estilos
│   │   ├── style.css         # Estilos globais
│   │   └── components.css    # Estilos dos componentes
│   ├── js/
│   │   └── app.js            # Aplicação principal
│   └── images/
│       ├── logo-eredes.png
│       └── ficha-eletrotecnica-exemplo.svg
├── components/
│   ├── navbar.html           # Componente de navegação
│   └── action-card.html      # Template do action card
├── data/
│   └── pendencias.json       # Dados das pendências
├── pages/
│   └── (páginas futuras)
└── index.html                # Página principal
```

## Como Funciona

### 1. Sistema Modular

O projeto utiliza uma arquitetura modular com:

- **Separação de Responsabilidades**: CSS, JavaScript e dados em diretórios separados
- **Componentes Reutilizáveis**: Componentes UI independentes
- **Gestão de Dados**: Dados em formato JSON, facilmente editáveis

### 2. Action Cards Dinâmicos

Os action cards são renderizados dinamicamente a partir do arquivo `data/pendencias.json`. Cada pendência contém:

- Identificação única (`id`)
- Título e subtítulo
- Tipo de alerta (warning, info, success)
- Ícone
- Descrição
- Imagem ilustrativa (opcional)
- Passos de resolução

### 3. Navegação

A navegação lateral permite alternar entre diferentes tipos de pendências. Ao clicar num item:
1. O item fica marcado como ativo
2. O action card correspondente é carregado
3. O breadcrumb é atualizado

## Como Adicionar uma Nova Pendência

### Passo 1: Adicionar dados em `data/pendencias.json`

```json
{
  "id": "nova-pendencia",
  "titulo": "Título da Pendência",
  "subtitulo": "Subtítulo descritivo",
  "tipo": "warning",
  "icon": "fas fa-icon-name",
  "descricao": "Descrição detalhada da pendência...",
  "imagem": "assets/images/imagem-exemplo.svg",
  "passos": [
    {
      "numero": 1,
      "titulo": "Primeiro Passo",
      "descricao": "Descrição do passo...",
      "link": {
        "texto": "Link opcional",
        "url": "https://exemplo.com"
      }
    }
  ]
}
```

### Passo 2: Adicionar item na navegação (`index.html`)

```html
<a href="#nova-pendencia" class="nav-item" data-pendencia="nova-pendencia">
    <i class="fas fa-icon-name"></i> Nome da Pendência
</a>
```

### Passo 3: (Opcional) Adicionar imagem ilustrativa

Coloque a imagem em `assets/images/` e referencie no JSON.

## Tipos de Pendências Disponíveis

### 1. Ficha Eletrotécnica
- **Tipo**: warning (amarelo)
- **Objetivo**: Solicitar ficha eletrotécnica em falta
- **Imagem**: Ilustração da ficha eletrotécnica
- **Passos**: 3 passos para resolução

### 2. Intervenções Técnicas
- **Tipo**: info (azul)
- **Objetivo**: Informar sobre intervenção técnica pendente
- **Imagem**: Nenhuma
- **Passos**: 4 passos do processo

## Personalização

### Cores e Estilos

Edite `assets/css/variables.css` para alterar:
- Cores da marca
- Tamanhos de fonte
- Espaçamentos
- Sombras

### Tipos de Alerta

Os action cards suportam três tipos visuais:

- `warning` - Amarelo (alertas e ações necessárias)
- `info` - Azul (informações e atualizações)
- `success` - Verde (confirmações e sucessos)

## Dependências Externas

- **Font Awesome 6.4.0** - Ícones
- **Public Sans** - Tipografia Google Fonts

## Tecnologias

- HTML5
- CSS3 (com variáveis CSS)
- JavaScript (ES6+)
- JSON para gestão de dados

## Browser Support

- Chrome/Edge (últimas versões)
- Firefox (últimas versões)
- Safari (últimas versões)

---

**E-REDES** - Balcão Digital
# plr-pend
