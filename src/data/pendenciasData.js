/**
 * Dados das Pendências
 * Estrutura flexível - cada pendência pode ter campos diferentes
 */

export const pendenciasConfig = {
  // Configurações da navegação
  navigation: {
    title: 'Pendências',
    logo: 'assets/images/logo-eredes.png'
  }
};

/**
 * Lista de pendências
 * Campos opcionais: imagem, download, link em passos, etc.
 * Adiciona ou remove campos conforme necessário
 */
export const pendencias = [
  {
    id: 'ficha-eletrotecnica-fator-simultaneidade-incorreto',
    titulo: 'FE - Fator de Simultaneidade Incorreto',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica apresenta o "Fator de simultaneidade" mal preenchido no Quadro 5 – Instalação Elétrica, o que altera a "Potência a alimentar" e, por consequência, a potência total requisitada.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Classificar Cada Instalação',
            descricao: 'No <strong>Quadro 5</strong>, use o campo <strong>"Tipo de utilização individual"</strong> para identificar se cada linha corresponde a:<br><br>• <strong>Habitação (doméstica)</strong>, ou<br>• <strong>Outra utilização (não doméstica)</strong>, como Loja/Escritório/Armazém/Restaurante/Serviços comuns, etc.'
          },
          {
            numero: 2,
            titulo: 'Aplicar o Fator Correto',
            descricao: '<strong>A) Instalações não domésticas</strong><br>Quando se tratam de instalações não domésticas, o fator de simultaneidade assume o valor <strong>1</strong>.<br><br><strong>B) Edifícios coletivos, empreendimentos e vivendas unifamiliares (instalações domésticas)</strong><br>Para instalações domésticas, os fatores estão tabelados em função de <strong>n</strong> (número de instalações não comerciais presentes na ficha eletrotécnica):<br><br>• n 2–4 → 1<br>• n 5–9 → 0,75<br>• n 10–14 → 0,56<br>• n 15–19 → 0,48<br>• n 20–24 → 0,43<br>• n 25–29 → 0,40<br>• n 30–34 → 0,38<br>• n 35–39 → 0,37<br>• n 40–49 → 0,36<br>• n ≥ 50 → 0,34<br><br><strong>C) Condomínios fechados</strong><br>Nos condomínios fechados, os fatores são determinados por tipologia de instalações, conforme definidos pela RESP, e o cálculo é obtido através do preenchimento da Ficha RESP (Anexo 1).'
          },
          {
            numero: 3,
            titulo: 'Justificar Se Usar Fator Diferente',
            descricao: 'É possível indicar outros valores para o fator de simultaneidade desde que estejam <strong>justificados em memória descritiva</strong>, incluindo o cálculo desses valores.'
          },
          {
            numero: 4,
            titulo: 'Verificar a Potência a Alimentar',
            descricao: 'Após corrigir o fator de simultaneidade, verifique que a <strong>"Potência a alimentar"</strong> foi recalculada corretamente, pois depende diretamente deste fator.'
          },
          {
            numero: 5,
            titulo: 'Reenviar a Ficha Corrigida',
            descricao: 'Submeta a Ficha Eletrotécnica corrigida com o fator de simultaneidade correto (e memória descritiva justificativa, se aplicável) para darmos seguimento ao pedido.'
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p5_fator_simultaneidade.png',
        alt: 'FE - Fator de Simultaneidade Incorreto'
      }]
  },
  {
    id: 'pe-nao-acessivel',
    titulo: 'PE Não Acessível da Via Pública',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'O Ponto de Entrega (PE) não se encontra acessível a partir da via pública, de forma a possibilitar intervenções futuras. A portinhola deve estar em local confinante com a via pública, com acesso fácil e permanente para a E-REDES.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Verificar a Localização Atual',
            descricao: 'A portinhola deve ficar num local confinante com a <strong>via pública</strong>, com acesso <strong>fácil e permanente</strong> ao operador de rede da E-REDES.<br><br>O PE é a fronteira entre a rede pública da E-REDES e a sua instalação elétrica, sendo constituído por uma portinhola acessível pela via pública.<br><br><div style=\'margin-top: 16px;\'><img src=\'assets/images/pe_acesso_via_publica.png\' alt=\'PE acessível via pública\' style=\'max-width: 100%; border-radius: 8px; border: 1px solid #ddd;\'></div>'
          },
          {
            numero: 2,
            titulo: 'Consultar Documentação Técnica',
            descricao: 'Consulte o documento técnico <strong>DIT-C14-100</strong> para obter toda a informação necessária sobre as regras de instalação do Ponto de Entrega.',
            link: {
              texto: 'Download DIT-C14-100',
              url: 'assets/files/DIT-C14-100 Ed9 1.pdf'
            }
          },
          {
            numero: 3,
            titulo: 'Relocação do PE',
            descricao: 'Caso o PE não esteja acessível pela via pública, será necessário <strong>relocar a portinhola</strong> para um local adequado que cumpra os requisitos regulamentares:<br><br>• Local no <strong>muro ou fachada exterior</strong><br>• Acessível <strong>diretamente da via pública</strong><br>• Acesso permanente para intervenções da E-REDES<br><br>A montagem da portinhola é <strong>responsabilidade do cliente</strong>.'
          },
          {
            numero: 4,
            titulo: 'Submeter as evidências',
            descricao: 'Submeta as evidencias (Fotografias do ponto de entrega e da rede envolvente) através do Balcão Digital na área "Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos" para darmos seguimento ao pedido de ligação à rede.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'download',
        url: 'assets/files/DIT-C14-100 Ed9 1.pdf',
        text: 'Download DIT-C14-100 - Documento Técnico'
      }
    ]
  },
  {
    id: 'ficha-eletrotecnica-p4-instalacao',
    titulo: 'Ficha Eletrotécnica - Campo "Instalação" (Quadro 4)',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Instalação", no Quadro 4 – Caracterização do imóvel, não devidamente preenchido. Este campo é obrigatório e só pode assumir os valores "Nova" ou "Existente", devendo ser coerente com a realidade elétrica do local e com o preenchimento do Quadro 5 – Instalação Elétrica.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Determinar o Valor do Campo "Instalação"',
            descricao: 'Antes de preencher, confirme a situação elétrica do local:<br><br><strong>Instalação = "Nova"</strong><br>Utilize quando a instalação ainda não está em exploração e não existe ligação elétrica concluída (sem NIP/OL ativo).<br><br><strong>Instalação = "Existente"</strong><br>Utilize quando já existe ou existiu uma ligação elétrica concluída para o local (instalação em exploração), mesmo que o edifício tenha sido demolido e reconstruído, desde que o Objeto de Ligação (NIP/OL) se mantenha.'
          },
          {
            numero: 2,
            titulo: 'Preencher o Quadro 4 – Caracterização do Imóvel',
            descricao: 'Selecione a tipologia do imóvel (Unifamiliar, Coletivo, Condomínio fechado ou Outros).<br><br>No campo "Instalação", escolha exatamente um dos valores válidos:<br>• <strong>Nova</strong><br>• <strong>Existente</strong><br><br> Não utilize outros termos nem deixe o campo em branco.'
          },
          {
            numero: 3,
            titulo: 'Verificar a Coerência com o Quadro 5',
            descricao: 'O campo "Instalação" (Quadro 4) está diretamente relacionado com o Quadro 5:<br><br><strong>Se "Instalação = Nova"</strong><br>• No Quadro 5, campos associados a instalações existentes (NIP & CPE) devem ficar em branco, se ainda não atribuídos<br>• Preencher corretamente: Total de ramais, Tipo de utilização e Potências previstas<br><br><strong>Se "Instalação = Existente"</strong><br>• No Quadro 5, os dados de identificação elétrica existentes devem estar preenchidos e coerentes<br>• O número de instalações, ramais e tipo de utilização tem de corresponder à tipologia indicada no Quadro 4'
          },
          {
            numero: 4,
            titulo: 'Envio da Ficha Corrigida',
            descricao: 'Após a correção, submeter a Ficha Eletrotécnica atualizada através do Balcão Digital da E-REDES, no mesmo pedido, para levantamento da pendência.',
            link: {
              texto: 'Aceder ao Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p4_instalacao.png',
        alt: 'Ficha Eletrotécnica - Campo "Instalação" (Quadro 4)'
      }]
  },
  {
    id: 'localizacao-ponto-entrega',
    titulo: 'Localização do Ponto de Entrega (PE) Não Definida',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'O seu pedido está em pendência porque ainda não foi indicada (e/ou comprovada) a localização do Ponto de Entrega (PE). O PE é a fronteira entre a rede pública da E-REDES e a sua instalação elétrica e é, tipicamente, constituído por uma portinhola, acessível pela via pública.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Escolher o Local do PE',
            descricao: 'Escolha um local confinante com a via pública, com acesso fácil e permanente para a E-REDES. A portinhola deve ficar no exterior (muro/fachada), acessível a partir da rua.<br><br>Para o ajudar na escolha do local correto, consulte o guia com exemplos de configuração e alturas regulamentares.',
            link: {
              texto: 'Download do Guia de Localização',
              url: 'assets/files/DIT-C14-100 Ed9 1.pdf'
            }
          },
          {
            numero: 2,
            titulo: 'Responsabilidades',
            descricao: 'A montagem da portinhola é responsabilidade do cliente. Tudo o que fica a jusante da portinhola (tubos/condutores até à caixa de contagem e até ao quadro da instalação) também é responsabilidade do cliente.'
          },
          {
            numero: 3,
            titulo: 'Submeter as evidências',
            descricao: 'Submeta as evidencias (Fotografias do ponto de entrega e da rede envolvente) através do Balcão Digital na área "Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos" para darmos seguimento ao pedido de ligação à rede.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'download',
        url: 'assets/files/DIT-C14-100 Ed9 1.pdf',
        text: 'Download do Guia de Localização do PE'
      }
    ]
  },
  {
    id: 'pe-altura-incorreta',
    titulo: 'PE Não Está à Altura Regulamentar',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'O Ponto de Entrega (PE) não se encontra à altura regulamentar definida. As portinholas e caixas de contagem devem respeitar distâncias específicas ao solo para garantir a segurança e facilitar as intervenções técnicas.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Verificar Alturas Regulamentares',
            descricao: 'As distâncias ao solo preconizadas para a instalação são:<br><br><strong>PORTINHOLA:</strong><br>• Distância do solo à <strong>parte inferior</strong>: entre <strong>0,50 m e 0,80 m (b1)</strong><br>• Distância do solo à <strong>parte superior</strong>: <strong>1,55 m (máximo) (b2)</strong><br><br><div style=\'margin-top: 16px;\'><img src=\'assets/images/pe_medidas_regulamentares.png\' alt=\'Alturas regulamentares\' style=\'max-width: 100%; border-radius: 8px; border: 1px solid #ddd;\'></div><br><br><em>Nota: Em situações excecionais devidamente justificadas por documento legal/regulamentar, poderá aceitar-se uma distância mínima ao solo diferente, mas nunca inferior a 0,25 m para a portinhola e 0,50 m para a caixa de contagem.</em>'
          },
          {
            numero: 2,
            titulo: 'Consultar Documentação Técnica',
            descricao: 'Consulte o documento técnico <strong>DIT-C14-100</strong> (secções 6.1 e 6.3) para obter toda a informação necessária sobre as regras de instalação.',
            link: {
              texto: 'Download DIT-C14-100',
              url: 'assets/files/DIT-C14-100 Ed9 1.pdf'
            }
          },
          {
            numero: 3,
            titulo: 'Adequação do PE',
            descricao: 'Será necessário ajustar a altura da portinhola e/ou caixa de contagem para cumprir os requisitos regulamentares.<br><br><strong>Responsabilidades:</strong><br>• A <strong>montagem da portinhola</strong> é responsabilidade do cliente<br>• Os trabalhos devem ser executados por <strong>técnico habilitado</strong><br><br>Certifique-se de que ambos os equipamentos ficam nas alturas corretas conforme indicado no passo 1.'
          },
          {
            numero: 4,
            titulo: 'Submeter as evidências',
            descricao: 'Submeta as evidencias (Fotografias do ponto de entrega e da rede envolvente) através do Balcão Digital na área "Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos" para darmos seguimento ao pedido de ligação à rede.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'download',
        url: 'assets/files/DIT-C14-100 Ed9 1.pdf',
        text: 'Download DIT-C14-100 - Documento Técnico'
      }
    ]
  },
  {
    id: 'ficha-eletrotecnica',
    titulo: 'Ficha Eletrotécnica em Falta',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'Para dar seguimento ao seu pedido de ligação à rede, detetámos a falta da Ficha Eletrotécnica. Este documento é obrigatório para validar as condições técnicas da instalação.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Obter o Modelo',
            descricao: 'Aceda ao site oficial da DGEG para descarregar o modelo atualizado.',
            link: {
              texto: 'Ir para dgeg.gov.pt',
              url: 'https://www.dgeg.gov.pt'
            }
          },
          {
            numero: 2,
            titulo: 'Responsabilidade Técnica',
            descricao: 'O documento deve ser preenchido e assinado exclusivamente por um <strong>técnico habilitado</strong> para o efeito.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento',
            descricao: 'Submeta a Ficha Eletrotécnica digitalizada através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido de ligação à rede.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'imageWithDownload',
        image: {
          src: 'assets/images/img_fe.png',
          alt: 'Ficha Eletrotécnica em Falta'
        },
        download: {
          url: 'assets/files/i016706.xlsx',
          text: 'Download da Ficha Eletrotécnica'
        }
      }]
  },
  {
    id: 'ficha-eletrotecnica-excel',
    titulo: 'Ficha Eletrotécnica em Excel',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida, em formato Excel, não está devidamente preenchida. Deverá submeter a ficha eletrotécnica em formato Excel devidamente preenchida para darmos seguimento ao pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Obter o Modelo em Excel',
            descricao: 'Aceda ao site oficial da DGEG para descarregar o modelo atualizado em formato Excel (.xlsx).',
            link: {
              texto: 'Ir para dgeg.gov.pt',
              url: 'https://www.dgeg.gov.pt'
            }
          },
          {
            numero: 2,
            titulo: 'Preencher o Ficheiro Excel',
            descricao: 'Preencha <strong>todos os campos obrigatórios</strong> do ficheiro Excel de forma completa e correta. O documento deve ser preenchido e assinado exclusivamente por um <strong>técnico habilitado</strong> para o efeito.'
          },
          {
            numero: 3,
            titulo: 'Verificar o Preenchimento',
            descricao: 'Antes de submeter, verifique cuidadosamente que:<br>• Todos os campos obrigatórios estão preenchidos<br>• A informação está correta e completa<br>• O ficheiro está no formato Excel (.xlsx)<br>• O documento está devidamente assinado'
          },
          {
            numero: 4,
            titulo: 'Submeter o Ficheiro Excel',
            descricao: 'Submeta a Ficha Eletrotécnica em formato Excel devidamente preenchida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido de ligação à rede.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'imageWithDownload',
        image: {
          src: 'assets/images/img_fe.png',
          alt: 'Ficha Eletrotécnica em Excel'
        },
        download: {
          url: 'assets/files/i016706.xlsx',
          text: 'Download da Ficha Eletrotécnica (Excel)'
        }
      }]
  },
  {
    id: 'ficha-eletrotecnica-modelo-dgeg',
    titulo: 'Ficha Eletrotécnica - Modelo DGEG',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida não está no modelo definido pela Direção Geral de Energia e Geologia (DGEG), ou não está devidamente preenchida. Deverá submeter a ficha eletrotécnica no modelo oficial da DGEG devidamente preenchida para darmos seguimento ao pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Obter o Modelo Oficial da DGEG',
            descricao: 'Aceda ao site oficial da DGEG para descarregar o modelo atualizado e oficial da Ficha Eletrotécnica.',
            link: {
              texto: 'Ir para dgeg.gov.pt',
              url: 'https://www.dgeg.gov.pt'
            }
          },
          {
            numero: 2,
            titulo: 'Responsabilidade Técnica',
            descricao: 'O documento deve ser preenchido e assinado exclusivamente por um <strong>técnico habilitado</strong> para o efeito, conforme as normas da DGEG.'
          },
          {
            numero: 3,
            titulo: 'Preencher o Modelo Correto',
            descricao: 'Utilize apenas o modelo oficial fornecido pela DGEG. Não utilize modelos alternativos, versões antigas ou documentos modificados. Preencha <strong>todos os campos obrigatórios</strong> de forma completa e correta.'
          },
          {
            numero: 4,
            titulo: 'Submeter o Documento',
            descricao: 'Submeta a Ficha Eletrotécnica no modelo oficial da DGEG, devidamente preenchida e assinada, através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido de ligação à rede.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'imageWithDownload',
        image: {
          src: 'assets/images/img_fe.png',
          alt: 'Ficha Eletrotécnica - Modelo DGEG'
        },
        download: {
          url: 'assets/files/i016706.xlsx',
          text: 'Download da Ficha Eletrotécnica'
        }
      }]
  },
  {
    id: 'ficha-eletrotecnica-ilegivel',
    titulo: 'Ficha Eletrotécnica Ilegível',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida não está devidamente legível. É necessário que o documento seja claramente legível para validação. Deverá submeter a ficha eletrotécnica com qualidade suficiente para leitura e darmos seguimento ao pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Verificar a Qualidade do Documento',
            descricao: 'Antes de submeter, abra o ficheiro e verifique se:<br>• O texto está legível e nítido<br>• Não há sombras, manchas ou áreas desfocadas<br>• Todas as páginas estão completas<br>• A assinatura e os dados estão visíveis'
          },
          {
            numero: 2,
            titulo: 'Digitalização Adequada',
            descricao: 'Se estiver a digitalizar o documento:<br>• Utilize um scanner ou aplicação de digitalização de qualidade<br>• Configure para uma resolução mínima de 300 DPI<br>• Certifique-se de que o documento está bem iluminado e sem sombras<br>• Evite fotografias de má qualidade ou com reflexos'
          },
          {
            numero: 3,
            titulo: 'Formato Recomendado',
            descricao: 'Prefira enviar o documento em formato PDF original, caso tenha sido gerado digitalmente. Se for uma digitalização, garanta que o ficheiro PDF está em alta qualidade e todos os campos são claramente legíveis.'
          },
          {
            numero: 4,
            titulo: 'Submeter o Documento Legível',
            descricao: 'Submeta a Ficha Eletrotécnica com qualidade de imagem/digitalização adequada, garantindo que todos os campos, texto e assinatura estão claramente legíveis, através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'imageWithDownload',
        image: {
          src: 'assets/images/img_fe.png',
          alt: 'Ficha Eletrotécnica Ilegível'
        },
        download: {
          url: 'assets/files/i016706.xlsx',
          text: 'Download da Ficha Eletrotécnica'
        }
      }]
  },
  {
    id: 'termo-responsabilidade',
    titulo: 'Termo de Responsabilidade',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'Para dar seguimento ao pedido é necessário submeter o termo de responsabilidade de execução. O termo de responsabilidade de execução poderá ser obtido em dgeg.gov.pt e deve ser preenchido por um técnico habilitado para o efeito. Deverá submeter o termo de responsabilidade, para darmos seguimento ao pedido de ligação à rede.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Obter o Modelo',
            descricao: 'Aceda ao site oficial da DGEG para descarregar o modelo atualizado.',
            link: {
              texto: 'Ir para dgeg.gov.pt',
              url: 'https://www.dgeg.gov.pt'
            }
          },
          {
            numero: 2,
            titulo: 'Responsabilidade Técnica',
            descricao: 'O documento deve ser preenchido e assinado exclusivamente por um <strong>técnico habilitado</strong> para o efeito.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento',
            descricao: 'Submeta o Termo de Responsabilidade digitalizado através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido de ligação à rede.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'imageWithDownload',
        image: {
          src: 'assets/images/termo_responsabilidade.png',
          alt: 'Termo de Responsabilidade'
        },
        download: {
          url: 'assets/files/i015575.docx',
          text: 'Download do Termo de Responsabilidade'
        }
      }
    ]
  },
  {
    id: 'ficha-eletrotecnica-campo-nome',
    titulo: 'Ficha Eletrotécnica - Campo "Nome" Incompleto',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Nome", no ponto "1 - Requerente/Entidade Exploradora", não devidamente preenchido. Este campo é obrigatório para a validação do pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "1 - Requerente/Entidade Exploradora" da Ficha Eletrotécnica e localize o campo <strong>"Nome"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "Nome" com o nome completo do requerente ou entidade exploradora, conforme consta nos documentos oficiais.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/img_fe_name.png',
        alt: 'Ficha Eletrotécnica - Campo "Nome" Incompleto'
      }]
  },
  {
    id: 'ficha-eletrotecnica-campo-nif',
    titulo: 'Ficha Eletrotécnica - Campo "NIF/NIPC" Incompleto',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "NIF/NIPC", no ponto "1 - Requerente/Entidade Exploradora", não devidamente preenchido. Este campo é obrigatório para a validação do pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "1 - Requerente/Entidade Exploradora" da Ficha Eletrotécnica e localize o campo <strong>"NIF/NIPC"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "NIF/NIPC" com o número de identificação fiscal do requerente ou entidade exploradora, composto por 9 dígitos.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_nif_nipc.png',
        alt: 'Ficha Eletrotécnica - Campo "NIF/NIPC" Incompleto'
      }]
  },
  {
    id: 'ficha-eletrotecnica-campo-morada',
    titulo: 'Ficha Eletrotécnica - Campo "Morada" Incompleto',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Morada", no ponto "1 - Requerente/Entidade Exploradora", não devidamente preenchido. Este campo é obrigatório para a validação do pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "1 - Requerente/Entidade Exploradora" da Ficha Eletrotécnica e localize o campo <strong>"Morada"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "Morada" com a morada completa do requerente ou entidade exploradora, incluindo rua, número, andar e localidade.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_morada.png',
        alt: 'Ficha Eletrotécnica - Campo "Morada" Incompleto'
      }]
  },
  {
    id: 'ficha-eletrotecnica-campo-cpostal',
    titulo: 'Ficha Eletrotécnica - Campo "C. Postal" Incompleto',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "C. Postal", no ponto "1 - Requerente/Entidade Exploradora", não devidamente preenchido. Este campo é obrigatório para a validação do pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "1 - Requerente/Entidade Exploradora" da Ficha Eletrotécnica e localize o campo <strong>"C. Postal"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "C. Postal" com o código postal no formato correto: XXXX-XXX (exemplo: 1000-001).'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_c_postal.png',
        alt: 'Ficha Eletrotécnica - Campo "C. Postal" Incompleto'
      }]
  },
  {
    id: 'ficha-eletrotecnica-ponto1-todos',
    titulo: 'Ficha Eletrotécnica - Ponto 1 Incompleto',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta todos os campos no ponto "1 - Requerente/Entidade Exploradora" não devidamente preenchidos. Todos os campos desta secção são obrigatórios para a validação do pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Rever a Secção Completa',
            descricao: 'Aceda ao ponto "1 - Requerente/Entidade Exploradora" e verifique todos os campos.'
          },
          {
            numero: 2,
            titulo: 'Preencher Todos os Campos',
            descricao: 'Preencha <strong>todos os campos obrigatórios</strong> com informações completas e corretas do requerente ou entidade exploradora.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p1_todos.png',
        alt: 'Ficha Eletrotécnica - Ponto 1 Incompleto'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p2-nome',
    titulo: 'Ficha Eletrotécnica - Campo "Nome" do Técnico',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Nome", no ponto "2 - Técnico Responsável", não devidamente preenchido. Este campo é obrigatório para a validação do pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "2 - Técnico Responsável" da Ficha Eletrotécnica e localize o campo <strong>"Nome"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "Nome" com o nome completo do técnico responsável habilitado pela DGEG.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p2_name.png',
        alt: 'Ficha Eletrotécnica - Campo "Nome" do Técnico'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p2-nif',
    titulo: 'Ficha Eletrotécnica - Campo "NIF" do Técnico',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "NIF", no ponto "2 - Técnico Responsável", não devidamente preenchido. Este campo é obrigatório para a validação do pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "2 - Técnico Responsável" da Ficha Eletrotécnica e localize o campo <strong>"NIF"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "NIF" com o número de identificação fiscal do técnico responsável, composto por 9 dígitos.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p2_NIF.png',
        alt: 'Ficha Eletrotécnica - Campo "NIF" do Técnico'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p2-email',
    titulo: 'Ficha Eletrotécnica - Campo "E-mail" do Técnico',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "E-mail", no ponto "2 - Técnico Responsável", não devidamente preenchido. Este campo é obrigatório para a validação do pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "2 - Técnico Responsável" da Ficha Eletrotécnica e localize o campo <strong>"E-mail"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "E-mail" com um endereço de email válido do técnico responsável para futuros contactos.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p2_mail.png',
        alt: 'Ficha Eletrotécnica - Campo "E-mail" do Técnico'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p2-dgeg',
    titulo: 'Ficha Eletrotécnica - Campo "Nº DGEG" do Técnico',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Nº DGEG", no ponto "2 - Técnico Responsável", não devidamente preenchido. Este campo é obrigatório para a validação do pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "2 - Técnico Responsável" da Ficha Eletrotécnica e localize o campo <strong>"Nº DGEG"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "Nº DGEG" com o número de certificação do técnico responsável emitido pela Direção-Geral de Energia e Geologia.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p2_ndgeg.png',
        alt: 'Ficha Eletrotécnica - Campo "Nº DGEG" do Técnico'
      }]
  },
  {
    id: 'intervencoes-tecnicas',
    titulo: 'Intervenção Técnica Pendente',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Aguarda agendamento',
      tipo: 'info',
      icon: 'fas fa-tools'
    },
    content: [
      {
        type: 'text',
        text: 'Foi identificada a necessidade de uma intervenção técnica no seu local de instalação. Esta intervenção é necessária para garantir a conformidade técnica e segurança da ligação à rede elétrica.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Validação Técnica',
            descricao: 'A nossa equipa técnica irá realizar uma avaliação no local para verificar as condições necessárias para a intervenção.'
          },
          {
            numero: 2,
            titulo: 'Agendamento',
            descricao: 'Será contactado para agendar a intervenção técnica num horário conveniente. É importante garantir o acesso ao local.'
          },
          {
            numero: 3,
            titulo: 'Execução',
            descricao: 'Os nossos técnicos realizarão os trabalhos necessários. A duração depende da complexidade da intervenção.'
          },
          {
            numero: 4,
            titulo: 'Conclusão',
            descricao: 'Após a conclusão dos trabalhos, receberá um relatório técnico com todos os detalhes da intervenção realizada.'
          }
        ]
      }
    ]
  },
  {
    id: 'ficha-eletrotecnica-p5-fator-simultaneidade',
    titulo: 'Ficha Eletrotécnica - Campo "Fator de Simultaneidade"',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Fator de Simultaneidade", no ponto "5 - Instalação Elétrica", não devidamente preenchido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "5 - Instalação Elétrica" da Ficha Eletrotécnica e localize o campo <strong>"Fator de Simultaneidade"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Determinar o Fator',
            descricao: 'O Fator de Simultaneidade representa a probabilidade de utilização simultânea dos equipamentos. Este valor deve ser determinado por um <strong>técnico habilitado</strong> de acordo com as normas técnicas aplicáveis.'
          },
          {
            numero: 3,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "Fator de Simultaneidade" com o valor adequado (geralmente um valor entre 0 e 1, ou em percentagem).'
          },
          {
            numero: 4,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p5_fator_simultaneidade.png',
        alt: 'Ficha Eletrotécnica - Campo "Fator de Simultaneidade"'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p3-entrada-principal',
    titulo: 'Ficha Eletrotécnica - Campo "Entrada principal (Lugar/Rua)"',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Entrada principal (Lugar/Rua)", no ponto "3 - Localização do imóvel", não devidamente preenchido. Este campo deverá coincidir com o campo que consta na Licença de Construção, Caderneta Predial ou documento equivalente.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "3 - Localização do imóvel" da Ficha Eletrotécnica e localize o campo <strong>"Entrada principal (Lugar/Rua)"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Consultar Documentação Oficial',
            descricao: 'Consulte a <strong>Licença de Construção</strong>, <strong>Caderneta Predial</strong> ou documento equivalente para confirmar a morada correta do imóvel.'
          },
          {
            numero: 3,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "Entrada principal (Lugar/Rua)" de forma a <strong>coincidir exatamente</strong> com a informação que consta nos documentos oficiais.'
          },
          {
            numero: 4,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p3_entrada_principal.png',
        alt: 'Ficha Eletrotécnica - Campo "Entrada principal (Lugar/Rua)"'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p3-coordenadas-gps',
    titulo: 'Ficha Eletrotécnica - Campo "Coordenadas GPS"',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Coordenadas GPS", no ponto "3 - Localização do imóvel", não devidamente preenchido, por forma a identificar inequivocamente o ponto de entrega.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "3 - Localização do imóvel" da Ficha Eletrotécnica e localize o campo <strong>"Coordenadas GPS"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Obter as Coordenadas',
            descricao: 'Utilize uma ferramenta como o <strong>Google Maps</strong> para obter as coordenadas GPS exatas do ponto de entrega do imóvel. Clique com o botão direito no local exato e selecione as coordenadas para copiar.',
            link: {
              texto: 'Abrir Google Maps',
              url: 'https://www.google.pt/maps'
            }
          },
          {
            numero: 3,
            titulo: 'Preencher no Formato Correto',
            descricao: 'Preencha o campo "Coordenadas GPS" no formato correto (exemplo: 38.7223, -9.1393) de forma a identificar inequivocamente o ponto de entrega.'
          },
          {
            numero: 4,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que as coordenadas estão corretas, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p3_coordenadas_gps.png',
        alt: 'Ficha Eletrotécnica - Campo "Coordenadas GPS"'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p3-todos',
    titulo: 'Ficha Eletrotécnica - Ponto 3 Incompleto',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta todos os campos no ponto "3 - Localização do imóvel" não devidamente preenchidos. Todos os campos desta secção são obrigatórios para a validação do pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Rever a Secção Completa',
            descricao: 'Aceda ao ponto "3 - Localização do imóvel" e verifique todos os campos: Entrada principal (Lugar/Rua), Coordenadas GPS e demais informações de localização.'
          },
          {
            numero: 2,
            titulo: 'Consultar Documentação',
            descricao: 'Consulte a <strong>Licença de Construção</strong>, <strong>Caderneta Predial</strong> ou documento equivalente para garantir que os dados inseridos coincidem com a documentação oficial.'
          },
          {
            numero: 3,
            titulo: 'Preencher Todos os Campos',
            descricao: 'Preencha <strong>todos os campos obrigatórios</strong> com informações completas e corretas sobre a localização do imóvel, incluindo coordenadas GPS precisas.'
          },
          {
            numero: 4,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p3_todos.png',
        alt: 'Ficha Eletrotécnica - Ponto 3 Incompleto'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p4-descricao-imovel',
    titulo: 'Ficha Eletrotécnica - Campo "Descrição do imóvel"',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Descrição do imóvel", no ponto "4 - Caracterização do imóvel", não devidamente preenchido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "4 - Caracterização do imóvel" da Ficha Eletrotécnica e localize o campo <strong>"Descrição do imóvel"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "Descrição do imóvel" com uma descrição clara do tipo de imóvel (moradia, apartamento, estabelecimento comercial, etc.) e suas características principais.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p4_descricao_imovel.png',
        alt: 'Ficha Eletrotécnica - Campo "Descrição do imóvel"'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p4-classificacao',
    titulo: 'Ficha Eletrotécnica - Campo "Classificação das instalações"',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Classificação das instalações", no ponto "4 - Caracterização do imóvel", não devidamente preenchido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "4 - Caracterização do imóvel" da Ficha Eletrotécnica e localize o campo <strong>"Classificação das instalações"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "Classificação das instalações" selecionando a opção adequada conforme a tipologia da instalação elétrica (habitacional, comercial, industrial, serviços, etc.).'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p4_classificacao.png',
        alt: 'Ficha Eletrotécnica - Campo "Classificação das instalações"'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p4-todos',
    titulo: 'Ficha Eletrotécnica - Ponto 4 Incompleto',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta todos os campos no ponto "4 - Caracterização do imóvel" não devidamente preenchidos. Todos os campos desta secção são obrigatórios para a validação do pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Rever a Secção Completa',
            descricao: 'Aceda ao ponto "4 - Caracterização do imóvel" e verifique todos os campos.'
          },
          {
            numero: 2,
            titulo: 'Preencher Todos os Campos',
            descricao: 'Preencha <strong>todos os campos obrigatórios</strong> com informações completas e corretas sobre as características do imóvel e da instalação elétrica.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p4_todos.png',
        alt: 'Ficha Eletrotécnica - Ponto 4 Incompleto'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p5-entrada-imovel',
    titulo: 'Ficha Eletrotécnica - Campo "Entrada do Imóvel"',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Entrada do Imóvel", no ponto "5 - Instalação Elétrica", não devidamente preenchido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "5 - Instalação Elétrica" da Ficha Eletrotécnica e localize o campo <strong>"Entrada do Imóvel"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "Entrada do Imóvel" com a identificação da entrada correspondente à instalação elétrica.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p5_entrada_imovel.png',
        alt: 'Ficha Eletrotécnica - Campo "Entrada do Imóvel"'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p5-nip',
    titulo: 'Ficha Eletrotécnica - Campo "NIP"',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "NIP", no ponto "5 - Instalação Elétrica", não devidamente preenchido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "5 - Instalação Elétrica" da Ficha Eletrotécnica e localize o campo <strong>"NIP"</strong> (Número de Identificação do Prédio).'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "NIP" com o número de identificação do prédio. Este número pode ser consultado na Caderneta Predial ou na documentação oficial do imóvel.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p5_nip.png',
        alt: 'Ficha Eletrotécnica - Campo "NIP"'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p5-cpe',
    titulo: 'Ficha Eletrotécnica - Campo "CPE"',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "CPE", no ponto "5 - Instalação Elétrica", não devidamente preenchido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "5 - Instalação Elétrica" da Ficha Eletrotécnica e localize o campo <strong>"CPE"</strong> (Código do Ponto de Entrega).'
          },
          {
            numero: 2,
            titulo: 'Obter o CPE',
            descricao: 'O CPE é um código alfanumérico atribuído pela E-REDES. Caso não tenha este código, contacte a E-REDES para obtê-lo ou aguarde pela atribuição no decorrer do processo.'
          },
          {
            numero: 3,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "CPE" com o código fornecido pela E-REDES. Se ainda não tiver sido atribuído, deixe o campo em branco e indique essa situação.'
          },
          {
            numero: 4,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p5_cpe.png',
        alt: 'Ficha Eletrotécnica - Campo "CPE"'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p5-andar',
    titulo: 'Ficha Eletrotécnica - Campo "Andar"',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Andar", no ponto "5 - Instalação Elétrica", não devidamente preenchido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "5 - Instalação Elétrica" da Ficha Eletrotécnica e localize o campo <strong>"Andar"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "Andar" com a identificação do andar onde se localiza a instalação elétrica (exemplo: R/C, 1º, 2º, Cave, etc.).'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p5_andar.png',
        alt: 'Ficha Eletrotécnica - Campo "Andar"'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p5-tipo-utilizacao',
    titulo: 'Ficha Eletrotécnica - Campo "Tipo de utilização individual"',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Tipo de utilização individual", no ponto "5 - Instalação Elétrica", não devidamente preenchido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "5 - Instalação Elétrica" da Ficha Eletrotécnica e localize o campo <strong>"Tipo de utilização individual"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "Tipo de utilização individual" selecionando a opção adequada: Habitação, Comércio, Serviços, Indústria, ou outra categoria aplicável.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p5_tipo_utilizacao.png',
        alt: 'Ficha Eletrotécnica - Campo "Tipo de utilização individual"'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p5-fracao',
    titulo: 'Ficha Eletrotécnica - Campo "Fração"',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Fração", no ponto "5 - Instalação Elétrica", não devidamente preenchido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "5 - Instalação Elétrica" da Ficha Eletrotécnica e localize o campo <strong>"Fração"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "Fração" com a identificação da fração conforme consta na documentação oficial do imóvel (exemplo: A, B, C, Esq, Dto, etc.).'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p5_fracao.png',
        alt: 'Ficha Eletrotécnica - Campo "Fração"'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p5-entrada',
    titulo: 'Ficha Eletrotécnica - Campo "Entrada"',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Entrada", no ponto "5 - Instalação Elétrica", não devidamente preenchido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "5 - Instalação Elétrica" da Ficha Eletrotécnica e localize o campo <strong>"Entrada"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "Entrada" com a identificação da entrada do prédio ou edifício onde se localiza a instalação.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p5_entrada.png',
        alt: 'Ficha Eletrotécnica - Campo "Entrada"'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p5-total-instalado',
    titulo: 'Ficha Eletrotécnica - Campo "Total instalado (kVA)"',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Total instalado (kVA)", no ponto "5 - Instalação Elétrica", não devidamente preenchido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "5 - Instalação Elétrica" da Ficha Eletrotécnica e localize o campo <strong>"Total instalado (kVA)"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Calcular a Potência Total',
            descricao: 'Calcule a soma total da potência instalada de todos os equipamentos e circuitos da instalação elétrica, expressa em kVA (quilovolt-ampere).'
          },
          {
            numero: 3,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "Total instalado (kVA)" com o valor calculado. Este cálculo deve ser realizado por um <strong>técnico habilitado</strong>.'
          },
          {
            numero: 4,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p5_total_instalado.png',
        alt: 'Ficha Eletrotécnica - Campo "Total instalado (kVA)"'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p5-todos',
    titulo: 'Ficha Eletrotécnica - Ponto 5 Incompleto',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta todos os campos no ponto "5 - Instalação Elétrica" não devidamente preenchidos. Todos os campos desta secção são obrigatórios para a validação do pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Rever a Secção Completa',
            descricao: 'Aceda ao ponto "5 - Instalação Elétrica" e verifique todos os campos.'
          },
          {
            numero: 2,
            titulo: 'Consultar Técnico Habilitado',
            descricao: 'Alguns campos técnicos (como Total instalado e Fator de Simultaneidade) requerem cálculos específicos que devem ser realizados por um <strong>técnico habilitado</strong>.'
          },
          {
            numero: 3,
            titulo: 'Preencher Todos os Campos',
            descricao: 'Preencha <strong>todos os campos obrigatórios</strong> com informações completas e corretas sobre a instalação elétrica.'
          },
          {
            numero: 4,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p5_todos.png',
        alt: 'Ficha Eletrotécnica - Ponto 5 Incompleto'
      }]
  },
  {
    id: 'ficha-eletrotecnica-p5-todos-detalhe',
    titulo: 'Ficha Eletrotécnica - Ponto 5 Incompleto (Constituição do Prédio)',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta os campos no ponto "5 - Instalação Elétrica" não devidamente preenchidos, de forma a contemplar toda a constituição do prédio e não apenas das frações em que se pretende intervir.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Compreender o Requisito',
            descricao: 'O ponto "5 - Instalação Elétrica" deve incluir informação sobre <strong>toda a constituição do prédio</strong>, não apenas sobre a(s) fração(ões) onde se pretende realizar a intervenção.'
          },
          {
            numero: 2,
            titulo: 'Identificar Todas as Frações',
            descricao: 'Identifique e liste todas as frações do prédio, incluindo:<br>• Todas as habitações<br>• Lojas/estabelecimentos comerciais<br>• Áreas comuns<br>• Garagens<br>• Outras frações existentes'
          },
          {
            numero: 3,
            titulo: 'Preencher Informação Completa',
            descricao: 'Preencha os campos do ponto "5 - Instalação Elétrica" com a informação detalhada de <strong>todas as frações do prédio</strong>, mesmo que a intervenção seja apenas numa delas. Esta informação global é essencial para o dimensionamento correto da instalação.'
          },
          {
            numero: 4,
            titulo: 'Consultar Técnico Habilitado',
            descricao: 'Um <strong>técnico habilitado</strong> deve validar e confirmar que toda a informação sobre a constituição do prédio está completa e correta.'
          },
          {
            numero: 5,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos estão devidamente preenchidos contemplando toda a constituição do prédio, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p5_todos_detalhe.png',
        alt: 'Ficha Eletrotécnica - Ponto 5 Incompleto (Constituição do Prédio)'
      }]
  },
  {
    id: 'ficha-eletrotecnica-data-assinatura',
    titulo: 'Validade da Assinatura',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A data da assinatura da Ficha Eletrotécnica deve ser inferior a 1 mês a contar da data de abertura do pedido de ligação à rede. A ficha submetida apresenta uma data de assinatura que não cumpre este requisito temporal obrigatório.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Verificar a Data de Assinatura',
            descricao: 'Consulte a Ficha Eletrotécnica e identifique a <strong>data de assinatura</strong> constante no documento.'
          },
          {
            numero: 2,
            titulo: 'Consultar a Data de Abertura do PLR',
            descricao: 'Para confirmar a <strong>data de abertura do pedido de ligação à rede</strong>, aceda ao <strong>Balcão Digital da E-REDES</strong> onde pode consultar o histórico e estado do seu pedido:<br>• Aceda a <a href=\'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>balcaodigital.e-redes.pt</a><br>• Faça login com as suas credenciais <br>• Consulte o histórico dos seus pedidos para verificar a data de abertura<br><br>Alternativamente, pode verificar o <strong>email de notificação</strong> que recebeu da E-REDES após a submissão do pedido, onde consta a data de abertura.<br>'
          },
          {
            numero: 3,
            titulo: 'Validar o Prazo',
            descricao: 'Confirme que a <strong>data de assinatura da Ficha Eletrotécnica</strong> é inferior a 1 mês (30 dias) a contar da <strong>data de abertura do PLR</strong>. Se o prazo não for cumprido, será necessário obter uma nova assinatura.'
          },
          {
            numero: 4,
            titulo: 'Obter Nova Assinatura',
            descricao: 'Caso a assinatura esteja fora do prazo, solicite ao <strong>técnico responsável habilitado</strong> que assine novamente a Ficha Eletrotécnica com uma data atual, que respeite o prazo de validade de 1 mês.'
          },
          {
            numero: 5,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após obter a nova assinatura dentro do prazo regulamentar, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_data_assinatura.png',
        alt: 'Validade da Assinatura'
      }]
  },

  {
    id: 'ficha-eletrotecnica-p5-tipo-instalacao',
    titulo: 'Ficha Eletrotécnica - Campo "Tipo da Instalação"',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Tipo da Instalação", no ponto "5 - Instalação Elétrica", não devidamente preenchido. Este campo é obrigatório para a validação do pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à secção "5 - Instalação Elétrica" da Ficha Eletrotécnica e localize o campo <strong>"Tipo da Instalação"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Preencher Corretamente',
            descricao: 'Preencha o campo "Tipo da Instalação" selecionando a opção adequada conforme as características da instalação elétrica.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p5_tipo_instalacao.png',
        alt: 'Ficha Eletrotécnica - Campo "Tipo da Instalação"'
      }]
  },
  {
    id: 'ficha-eletrotecnica-tipo-c-potencia',
    titulo: 'Ficha Eletrotécnica - Campo "Potência Total Instalada (kVA)"',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Potência Total Instalada (kVA)" após "Tipo C: Instalações alimentadas em BT", não devidamente preenchido. Este campo é obrigatório para a validação do pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à Ficha Eletrotécnica e localize a secção <strong>"Tipo C: Instalações alimentadas em BT"</strong>. Identifique o campo <strong>"Potência Total Instalada (kVA)"</strong>.'
          },
          {
            numero: 2,
            titulo: 'Calcular a Potência Total',
            descricao: 'Calcule a soma total da potência instalada de todos os equipamentos e circuitos da instalação elétrica em Baixa Tensão (BT), expressa em kVA (quilovolt-ampere). Este cálculo deve ser realizado por um <strong>técnico habilitado</strong>.'
          },
          {
            numero: 3,
            titulo: 'Preencher o Campo',
            descricao: 'Preencha o campo "Potência Total Instalada (kVA)" com o valor calculado, garantindo que a informação está correta e completa.'
          },
          {
            numero: 4,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que todos os campos obrigatórios estão devidamente preenchidos, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_tipo_c.png',
        alt: 'Ficha Eletrotécnica - Campo "Potência Total Instalada (kVA)"'
      }]
  },
  {
    id: 'ficha-eletrotecnica-data-assinatura-falta',
    titulo: 'Ficha Eletrotécnica - Data e Assinatura do Técnico',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica submetida apresenta o campo "Data e assinatura do técnico responsável" não devidamente preenchido. A data de assinatura da Ficha Eletrotécnica não pode ser superior a 1 mês à data de envio deste documento.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo',
            descricao: 'Aceda à Ficha Eletrotécnica e localize o campo <strong>"Data e assinatura do técnico responsável"</strong>, normalmente localizado no final do documento.'
          },
          {
            numero: 2,
            titulo: 'Verificar a Data',
            descricao: 'Confirme que a <strong>data de assinatura</strong> não é superior a 1 mês (30 dias) em relação à data de envio do documento. Se o prazo estiver ultrapassado, será necessário obter uma nova assinatura.'
          },
          {
            numero: 3,
            titulo: 'Obter Assinatura do Técnico Habilitado',
            descricao: 'A Ficha Eletrotécnica deve ser assinada por um <strong>técnico responsável habilitado</strong> pela DGEG, com a data atual que respeite o prazo de validade de 1 mês.'
          },
          {
            numero: 4,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Após verificar que o campo de data e assinatura está devidamente preenchido e que a data está dentro do prazo válido, submeta a Ficha Eletrotécnica corrigida através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_data_assinatura_falta.png',
        alt: 'Ficha Eletrotécnica - Data e Assinatura do Técnico'
      }]
  },
  {
    id: 'ficha-eletrotecnica-ramais-instalacoes',
    titulo: 'FE - Sem Todos os Ramais e Instalações',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica não reflete a constituição total do prédio (todas as instalações e respetivos ramais). Para prédios coletivos/alterações, a ficha tem de indicar o prédio completo e não apenas uma ou algumas frações.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Confirmar Associação a Matriz',
            descricao: 'Confirme se o <strong>Objeto de Ligação (NIP)</strong> está associado a uma matriz.<br><br>Quando o NIP estiver associado a matriz, a ficha tem de conter a constituição do total do prédio e não apenas a parte onde se pretende intervir.'
          },
          {
            numero: 2,
            titulo: 'Listar Todas as Instalações no Quadro 5',
            descricao: 'No <strong>Quadro 5 (Instalação Elétrica)</strong>, incluir <strong>todas as instalações</strong> do edifício:<br><br>• Habitações (todas as frações)<br>• Lojas e estabelecimentos comerciais<br>• Serviços comuns<br>• Garagens<br>• Outras instalações existentes<br><br>A constituição completa do prédio é essencial para garantir a coerência e o correto dimensionamento.'
          },
          {
            numero: 3,
            titulo: 'Garantir que Todos os Ramais Estão Refletidos',
            descricao: 'Preencha o campo <strong>"Total Ramais"</strong> com a quantidade de ramais diferentes previstos para alimentar a instalação elétrica.<br><br>Na coluna <strong>"Ramal nº"</strong>, indique o número do ramal correspondente à ligação à rede (pode existir um único ramal ou vários, consoante o imóvel).'
          },
          {
            numero: 4,
            titulo: 'Coerência com Quadro 4',
            descricao: 'A informação do <strong>Quadro 5</strong> deve estar coerente com o <strong>Quadro 4</strong>, ao nível do número de ramais.<br>'
          },
          {
            numero: 5,
            titulo: 'Reenviar a Ficha Eletrotécnica Corrigida',
            descricao: 'Submeta a <strong>Ficha Eletrotécnica corrigida</strong>, incluindo a constituição total do prédio (todas as instalações e ramais), no pedido para levantamento da pendência.'
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p5_todos.png',
        alt: 'FE - Sem Todos os Ramais e Instalações'
      }]
  },
  {
    id: 'ficha-eletrotecnica-assinatura-falta',
    titulo: 'Ficha Eletrotécnica - Assinatura em Falta',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'A Ficha Eletrotécnica deverá estar devidamente preenchida e com a assinatura do técnico responsável. Este documento é obrigatório para validação do pedido.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Localizar o Campo de Assinatura',
            descricao: 'Aceda à Ficha Eletrotécnica e localize o campo destinado à <strong>assinatura do técnico responsável</strong>, normalmente localizado no final do documento.'
          },
          {
            numero: 2,
            titulo: 'Obter Assinatura do Técnico Habilitado',
            descricao: 'A Ficha Eletrotécnica deve ser assinada por um <strong>técnico responsável habilitado</strong> pela DGEG. O técnico deve assinar o documento de forma legível e clara.'
          },
          {
            numero: 3,
            titulo: 'Verificar o Preenchimento Completo',
            descricao: 'Antes de submeter, confirme que:<br>• A assinatura está visível e legível<br>• A data de assinatura está preenchida<br>• O documento está completamente preenchido<br>• Todos os campos obrigatórios estão corretos'
          },
          {
            numero: 4,
            titulo: 'Submeter o Documento Corrigido',
            descricao: 'Submeta a Ficha Eletrotécnica com a assinatura do técnico responsável devidamente aposta através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_data_assinatura_falta.png',
        alt: 'Ficha Eletrotécnica - Assinatura em Falta'
      }]
  },
  {
    id: 'ficha-eletrotecnica-coordenadas-morada',
    titulo: 'FE - Coordenadas e Morada Não Correspondem',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'Falta Ficha Eletrotécnica com a informação correta, uma vez que na atual as coordenadas geográficas não correspondem às coordenadas da morada indicada. Relembramos que as coordenadas devem corresponder à localização do ponto de entrega (portinhola).'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Identificar o Ponto de Entrega Correto',
            descricao: 'Confirme no local (ou com o técnico/eletricista) onde ficará/está a <strong>portinhola</strong> (onde a E-REDES fará a entrega de energia).<br><br>A portinhola é o Ponto de Entrega (PE) e é a localização exata que deve constar na Ficha Eletrotécnica.'
          },
          {
            numero: 2,
            titulo: 'Obter as Coordenadas GPS do Ponto de Entrega',
            descricao: 'Use um método fiável (ex.: mapa no telemóvel no local) para recolher <strong>latitude e longitude exatamente na portinhola</strong>.'
          },
          {
            numero: 3,
            titulo: 'Corrigir o Quadro 3 da Ficha Eletrotécnica',
            descricao: 'No <strong>Quadro 3 – Localização do imóvel</strong>, preencha corretamente os seguintes campos para que correspondam à localização da portinhola:<br><br>• <strong>Freguesia</strong><br>• <strong>Concelho</strong><br>• <strong>Distrito</strong><br>• <strong>Entrada principal (Lugar/Rua)</strong><br>• <strong>Outra entrada do imóvel</strong> (se aplicável)<br>• <strong>Coordenadas GPS</strong><br><br>Todos estes campos devem referir-se ao <strong>mesmo ponto físico</strong> onde está ou ficará a portinhola.'
          },
          {
            numero: 4,
            titulo: 'Verificar a Coerência',
            descricao: 'Antes de submeter, verifique que:<br>• As coordenadas GPS correspondem à localização da portinhola<br>• A Freguesia, Concelho e Distrito estão corretos<br>• A Entrada principal (Lugar/Rua) corresponde ao local da portinhola<br>• Todas as informações são consistentes entre si'
          },
          {
            numero: 5,
            titulo: 'Reenviar a Ficha Corrigida',
            descricao: 'Submeta a Ficha Eletrotécnica corrigida com as coordenadas e morada corretas do ponto de entrega para darmos seguimento ao pedido.'
          }
        ]
      },
      {
        type: 'text',
        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica. <a href=\'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf\' target=\'_blank\' style=\'color: #333; font-weight: 600; text-decoration: none;\'>Download Guia de Preenchimento</a>'
      },
      {
        type: 'image',
        src: 'assets/images/fe_p3_todos.png',
        alt: 'FE - Coordenadas e Morada Não Correspondem'
      }]
  },
  {
    id: 'declaracao-autorizacao-terceiros',
    titulo: 'Declaração de Autorização de Terceiros',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Ação necessária do cliente',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'Para dar seguimento ao seu pedido de ligação à rede, é necessária a <strong>Declaração de Autorização de Terceiros</strong>. Este documento é obrigatório sempre que o requerente do pedido é diferente do titular do CPE (Contrato de Prestação de Energia) da instalação existente.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Descarregar o Modelo',
            descricao: 'Faça o download do formulário de Declaração de Autorização de Terceiros disponível abaixo.'
          },
          {
            numero: 2,
            titulo: 'Preenchimento',
            descricao: 'O documento deve ser preenchido e assinado pelo <strong>titular do CPE da instalação existente</strong>, autorizando o requerente a realizar o pedido.'
          },
          {
            numero: 3,
            titulo: 'Submeter o Documento',
            descricao: 'Submeta a Declaração de Autorização de Terceiros devidamente preenchida e assinada através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido de ligação à rede.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'imageWithDownload',
        image: {
          src: 'assets/images/aut_ter.png',
          alt: 'Declaração de Autorização de Terceiros'
        },
        download: {
          url: 'assets/files/aut_ter.pdf',
          text: 'Download da Declaração de Autorização de Terceiros'
        }
      },
      {
        type: 'info',
        title: 'Quando é necessária?',
        text: 'Esta declaração é obrigatória quando existe uma instalação elétrica com CPE em nome de uma pessoa/entidade, mas o pedido de ligação ou modificação está a ser feito por outra pessoa/entidade diferente.'
      }
    ]
  },
  {
    id: 'aguarda-aprovacao-dgeg',
    titulo: 'Aguarda aprovação/licenciamento da DGEG',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Aguarda aprovação de entidade externa',
      tipo: 'info',
      icon: 'fas fa-clock'
    },
    content: [
      {
        type: 'text',
        text: 'Para proceder à execução da obra é necessária a aprovação/licença por parte da <strong>DGEG (Direção Geral de Energia e Geologia)</strong>.'
      },
      {
        type: 'text',
        text: 'O processo foi remetido para esta entidade. Após a aprovação/emissão de licença de estabelecimento por parte da DGEG poderemos dar seguimento ao pedido de ligação à rede.'
      },
      {
        type: 'text',
        text: '<strong>Será informado assim que esta aprovação/licença for obtida.</strong>'
      },
      {
        type: 'info',
        title: 'Sobre a DGEG',
        text: 'A DGEG é responsável pelo licenciamento de instalações de produção de energia elétrica e instalações elétricas de tensão superior a 60 kV.'
      }
    ]
  },
  {
    id: 'aguarda-licenca-municipio',
    titulo: 'Aguarda licença pelo município',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Aguarda aprovação de entidade externa',
      tipo: 'info',
      icon: 'fas fa-clock'
    },
    content: [
      {
        type: 'text',
        text: 'Para proceder à execução da obra é necessária a licença por parte do <strong>município</strong>.'
      },
      {
        type: 'text',
        text: 'O processo foi remetido para esta entidade. Após a receção da licença por parte do município poderemos dar seguimento ao pedido de ligação à rede.'
      },
      {
        type: 'text',
        text: '<strong>Será informado assim que esta licença for obtida.</strong>'
      },
      {
        type: 'info',
        title: 'Licenciamento Municipal',
        text: 'A licença de construção municipal é necessária para atestar a legalidade da construção e aprovação dos projetos de execução.'
      }
    ]
  },
  {
    id: 'aguarda-parecer-municipio-subsolo',
    titulo: 'Ag. parecer mun. intervenção no subsolo',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Aguarda aprovação de entidade externa',
      tipo: 'info',
      icon: 'fas fa-clock'
    },
    content: [
      {
        type: 'text',
        text: 'Para proceder à execução da obra é necessário o <strong>parecer do município para a intervenção no subsolo</strong>.'
      },
      {
        type: 'text',
        text: 'O processo foi remetido para esta entidade. Após o parecer por parte do município poderemos dar seguimento ao pedido de ligação à rede.'
      },
      {
        type: 'text',
        text: '<strong>Será informado assim que este parecer for obtido.</strong>'
      },
      {
        type: 'info',
        title: 'Prazo de Resposta',
        text: 'O município tem 20 dias úteis para emitir o parecer. Os pareceres mantêm validade por 2 anos desde a emissão.'
      }
    ]
  },
  {
    id: 'licenca-infraestruturas-portugal',
    titulo: 'Licença da Infraestruturas de Portugal',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Aguarda aprovação de entidade externa',
      tipo: 'info',
      icon: 'fas fa-clock'
    },
    content: [
      {
        type: 'text',
        text: 'Para proceder à execução da obra é necessária a licença da <strong>Infraestruturas de Portugal</strong>.'
      },
      {
        type: 'text',
        text: 'O processo foi remetido para esta entidade. Após a receção da licença por parte da Infraestruturas de Portugal poderemos dar seguimento ao pedido de ligação à rede.'
      },
      {
        type: 'text',
        text: '<strong>Será informado assim que esta licença for obtida.</strong>'
      },
      {
        type: 'info',
        title: 'Sobre a IP',
        text: 'A Infraestruturas de Portugal gere o licenciamento para instalação de infraestruturas na rede rodoviária e ferroviária. O prazo médio de resposta é de 15 dias úteis.'
      }
    ]
  },
  {
    id: 'aguarda-parecer-icnf',
    titulo: 'Aguarda parecer/licenciamento do ICNF',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Aguarda aprovação de entidade externa',
      tipo: 'info',
      icon: 'fas fa-clock'
    },
    content: [
      {
        type: 'text',
        text: 'Para proceder à execução da obra é necessário o parecer/licença por parte do <strong>ICNF (Instituto da Conservação da Natureza e Florestas)</strong>.'
      },
      {
        type: 'text',
        text: 'O processo foi remetido para esta entidade. Após o parecer/licença por parte do ICNF poderemos dar seguimento ao pedido de ligação à rede.'
      },
      {
        type: 'text',
        text: '<strong>Será informado assim que este parecer/licença for obtido.</strong>'
      },
      {
        type: 'info',
        title: 'Sobre o ICNF',
        text: 'O ICNF emite pareceres obrigatórios para obras que possam impactar áreas naturais e florestais protegidas, no âmbito do licenciamento ambiental.'
      }
    ]
  },
  {
    id: 'aguarda-parecer-ippar',
    titulo: 'Aguarda parecer do IPPAR',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Aguarda aprovação de entidade externa',
      tipo: 'info',
      icon: 'fas fa-clock'
    },
    content: [
      {
        type: 'text',
        text: 'Para proceder à execução da obra é necessário o parecer por parte do <strong>IPPAR (Instituto Português do Património Arquitetónico)</strong>.'
      },
      {
        type: 'text',
        text: 'O processo foi remetido para esta entidade. Após o parecer por parte do IPPAR poderemos dar seguimento ao pedido de ligação à rede.'
      },
      {
        type: 'text',
        text: '<strong>Será informado assim que este parecer for obtido.</strong>'
      },
      {
        type: 'info',
        title: 'Nota Histórica',
        text: 'O IPPAR foi substituído pela DGPC (Direção-Geral do Património Cultural) em 2007. Pareceres são necessários para intervenções em zonas de proteção de bens classificados como património.'
      }
    ]
  },
  {
    id: 'aguarda-parecer-entidades-policiais',
    titulo: 'Aguarda parecer das entidades policiais',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Aguarda aprovação de entidade externa',
      tipo: 'info',
      icon: 'fas fa-clock'
    },
    content: [
      {
        type: 'text',
        text: 'Para proceder à execução da obra é necessário o parecer por parte das <strong>entidades policiais</strong>.'
      },
      {
        type: 'text',
        text: 'O processo foi remetido para esta entidade. Após o parecer por parte das entidades policiais poderemos dar seguimento ao pedido de ligação à rede.'
      },
      {
        type: 'text',
        text: '<strong>Será informado assim que este parecer for obtido.</strong>'
      }
    ]
  },
  {
    id: 'ramal-fora-dominio-publico',
    titulo: 'Estab. de ramal fora do domínio público',
    navIcon: 'fas fa-hourglass-half',
    header: {
      subtitulo: 'Necessária autorização de proprietários',
      tipo: 'warning',
      icon: 'fas fa-exclamation-triangle'
    },
    content: [
      {
        type: 'text',
        text: 'O ramal a executar encontra-se <strong>fora de domínio público</strong>.'
      },
      {
        type: 'text',
        text: 'O ramal elétrico é de natureza privada e a sua instalação é responsabilidade do requerente. Quando o ramal atravessa terrenos privados, é necessária autorização dos proprietários.'
      },
      {
        type: 'steps',
        title: 'Como proceder:',
        items: [
          {
            numero: 1,
            titulo: 'Identificar os Proprietários',
            descricao: 'Identifique o(s) proprietário(s) dos terrenos por onde passará o ramal elétrico.'
          },
          {
            numero: 2,
            titulo: 'Obter Declaração de Cedência',
            descricao: 'Deverá interceder perante o(s) proprietário(s), para obter uma <strong>declaração assinada</strong> pelo(s) mesmo(s), permitindo a cedência do espaço necessário para o estabelecimento do ramal.'
          },
          {
            numero: 3,
            titulo: 'Submeter Documentação',
            descricao: 'Submeta a declaração/comprovativo de cedência de servidão para a utilização do terreno através do Balcão Digital na área <em>"Contacte-nos / Ligações à Rede e Aumentos de Potência / Quero adicionar informação e/ou enviar documentos"</em> para darmos seguimento ao pedido de ligação à rede.',
            link: {
              texto: 'Submeter documentos no Balcão Digital',
              url: 'https://www.e-redes.pt/pt-pt/ajuda/contacte-nos'
            }
          }
        ]
      },
      {
        type: 'info',
        title: 'Documentação',
        text: 'A E-Redes disponibiliza formulário específico para Declaração de Cedência quando aplicável.'
      }
    ]
  },
];
