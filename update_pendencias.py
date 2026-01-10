import re

file_path = 'src/data/pendenciasData.js'
with open(file_path, 'r', encoding='utf-8') as f:
    data = f.read()

# Find all IDs with their positions
id_matches = list(re.finditer(r"id:\s*['"](.*?)['"]", data))

formatted_insert_text = ",\n      {\n        type: 'text',\n        text: 'Pode consultar o documento "Ficha Eletrotécnica - Como Preencher" que explica detalhadamente como preencher a ficha eletrotécnica.'\n      },\n      {\n        type: 'download',\n        url: 'assets/files/Ficha_eletrotecnica_-_como_preencher_vf.pdf',\n        text: 'Download Guia de Preenchimento'\n      }"

# Iterate in reverse order
count = 0
for i in range(len(id_matches) - 1, -1, -1):
    match = id_matches[i]
    id_val = match.group(1)
    
    if id_val.startswith('ficha-eletrotecnica'):
        start_pos = match.end()
        
        # Limit search to the start of the next ID (if exists)
        limit_pos = len(data)
        if i < len(id_matches) - 1:
            limit_pos = id_matches[i+1].start()
            
        # Find content: [
        content_match = re.search(r"content:\s*[", data[start_pos:limit_pos])
        
        if content_match:
            abs_content_start = start_pos + content_match.end()
            
            # Find closing bracket using counter
            depth = 1
            j = abs_content_start
            found = False
            while j < limit_pos:
                if data[j] == '[':
                    depth += 1
                elif data[j] == ']':
                    depth -= 1
                    if depth == 0:
                        found = True
                        break
                j += 1
            
            if found:
                # j is index of closing ]
                # Check idempotency
                current_block = data[abs_content_start:j]
                if "Ficha_eletrotecnica_-_como_preencher_vf.pdf" not in current_block:
                    # Insert
                    data = data[:j] + formatted_insert_text + data[j:]
                    count += 1
                    # Since we work backwards, we don't need to update other indices of matches!
        else:
            print(f"Warning: No content block found for {id_val}")

print(f"Updated {count} items.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(data)
