#!/usr/bin/env python3
import json

# Ler o JSON
with open('/Users/miguelferreira/Desktop/plr/dashPendencias/data/pendencias.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pendencias = data['pendencias']

# Criar o conteúdo JavaScript
js_content = '''/**
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
'''

# Processar cada pendência
for i, p in enumerate(pendencias):
    js_content += '  {\n'
    js_content += f'    id: {json.dumps(p["id"])},\n'
    js_content += f'    titulo: {json.dumps(p["titulo"])},\n'
    js_content += f'    navIcon: "fas fa-edit",\n'
    js_content += f'    subtitulo: {json.dumps(p["subtitulo"])},\n'
    js_content += f'    tipo: {json.dumps(p["tipo"])},\n'
    js_content += f'    icon: {json.dumps(p["icon"])},\n'
    js_content += f'    descricao: {json.dumps(p["descricao"])},\n'

    # Adicionar imagem se existir
    if 'imagem' in p and p['imagem'] is not None:
        js_content += f'    imagem: {json.dumps(p["imagem"])},\n'

    # Adicionar download se existir
    if 'download' in p and p['download'] is not None:
        js_content += '    download: {\n'
        js_content += f'      url: {json.dumps(p["download"]["url"])},\n'
        js_content += f'      texto: {json.dumps(p["download"]["texto"])}\n'
        js_content += '    },\n'

    # Adicionar passos
    js_content += '    passos: [\n'
    for j, passo in enumerate(p['passos']):
        js_content += '      {\n'
        js_content += f'        numero: {passo["numero"]},\n'
        js_content += f'        titulo: {json.dumps(passo["titulo"])},\n'
        js_content += f'        descricao: {json.dumps(passo["descricao"])}'

        # Adicionar link se existir
        if 'link' in passo:
            js_content += ',\n'
            js_content += '        link: {\n'
            js_content += f'          texto: {json.dumps(passo["link"]["texto"])},\n'
            js_content += f'          url: {json.dumps(passo["link"]["url"])}\n'
            js_content += '        }\n'
        else:
            js_content += '\n'

        js_content += '      }'
        if j < len(p['passos']) - 1:
            js_content += ','
        js_content += '\n'

    js_content += '    ]\n'
    js_content += '  }'

    if i < len(pendencias) - 1:
        js_content += ','
    js_content += '\n'

js_content += '];\n'

# Gravar o arquivo JavaScript
with open('/Users/miguelferreira/Desktop/plr/dashPendencias/src/data/pendenciasData.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f'Conversão concluída: {len(pendencias)} pendências convertidas')
