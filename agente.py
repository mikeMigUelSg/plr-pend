import google.generativeai as genai
import pandas as pd
import time
import json
import os

# 1. CONFIGURAÇÃO
API_KEY = "AIzaSyC3bkeWoEK9y4XOWvZxIzLZXnsuytxnbyU"
genai.configure(api_key=API_KEY)



# 2. PROMPT DE SISTEMA (A "Alma" dos Agentes)
SYSTEM_INSTRUCTIONS = """
És um sistema de multi-agentes especializado na rede elétrica portuguesa (E-REDES).
A tua tarefa é transformar uma "Pendência" de rede num guia de resolução para o cliente final.

REGRAS DE PESQUISA (DEEP RESEARCH):
- Apenas fontes oficiais: e-redes.pt ou fontes indicadas pela e redes.

REGRAS DE CÓDIGO (FRONTEND):
- Deves gerar um objeto JavaScript compatível com a classe ContentBlock.
- LIBERDADE DE CRIAÇÃO: Se os blocos atuais (text, steps, image, alert) não forem suficientes 
  para explicar algo complexo, podes INVENTAR novos tipos (ex: 'table', 'technical_specs', 'comparison').
- Se inventares um bloco novo, deves manter uma estrutura de dados coerente.


"""


model = genai.GenerativeModel(
    model_name='gemini-2.5-pro',
    tools=[{ "google_search_retrieval": {} }],
    system_instruction=SYSTEM_INSTRUCTIONS # <--- O SEGREDO ESTÁ AQUI
)

def processar_pendencia(row):
    motivo = row['Motivo jump']
    contexto_excel = row['Motivo']
    instrucao_base = row['O que o cliente deve fazer']
    
    print(f"[*] A processar em profundidade: {motivo}...")

    prompt = f"""
    PENDÊNCIA: {motivo}
    CONTEXTO: {contexto_excel}
    INSTRUÇÃO INICIAL: {instrucao_base}

    TAREFAS:
    1. Faz uma pesquisa profunda de fontes E-REDES sobre este motivo específico. Ignora casos irrelevantes.
    2. Define a estrutura: Motivo -> Como a resolver.
    3. Cria o objeto JS para o front-end.
    4. Se for necessária uma imagem, usa o nome de ficheiro sugerido no Excel: {row.get('Nome_Ficheiro', 'imagem_pendencia')}.png.
    """

    try:
        response = model.generate_content(
            contents=prompt,
            generation_config={"temperature": 0.2}
        )
        return response.text
    except Exception as e:
        return f"// Erro ao processar {motivo}: {str(e)}"

# 3. EXECUÇÃO PRINCIPAL
def main():
    # Carregar o CSV/Excel
    df = pd.read_excel('motivos.xlsx')

    # NOTA: Como o CSV não guarda cores, aqui simulamos o filtro das "linhas brancas"
    # Podes ajustar este filtro conforme a tua lógica (ex: excluir as que já têm código)
    pendencias_a_processar = df.head(5) # Vamos testar com as primeiras 5

    output_js = "/** Ficheiro gerado automaticamente pelo Agente Gemini **/\n\n"
    output_js += "export const pendenciasConfig = [\n"

    for index, row in pendencias_a_processar.iterrows():
        js_code = processar_pendencia(row)
        output_js += js_code + ",\n"
        # Delay para evitar limites de quota da API
        time.sleep(2)

    output_js += "];"

    # Guardar o resultado
    with open('pendencias_result.js', 'w', encoding='utf-8') as f:
        f.write(output_js)
    
    print("\n[✓] Processamento concluído. Ficheiro 'pendencias_result.js' criado.")

if __name__ == "__main__":
    main()