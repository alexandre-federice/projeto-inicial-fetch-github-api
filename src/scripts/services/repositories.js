import { baseUrl, repositoriesQuantity } from "../variables.js"

// Função assíncrona para chamar o EndPoint da API do GitHub dos repositórios do usuário.
async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`);
    return await response.json()
}

export { getRepositories }