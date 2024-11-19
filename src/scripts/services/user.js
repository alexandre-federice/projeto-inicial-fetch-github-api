import { baseUrl } from "/src/scripts/variables.js"

// Função assíncrona para chamar o EndPoint da API do GitHub de nome do usuário.
async function user(userName) {
    const response = await fetch(`${baseUrl}/${userName}`);
    return await response.json()
}

export { user }