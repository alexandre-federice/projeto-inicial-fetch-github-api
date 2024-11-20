// Funções para buscar dados da API do GitHub
import { getUser } from "/src/scripts/services/user.js"

import { getRepositories } from "/src/scripts/services/repositories.js"

// Objeto que armazena e organiza dados do usuário
import { user } from "/src/scripts/objects/user.js"

// Objeto responsável por renderizar os dados no DOM.
import { screen } from "/src/scripts/objects/screen.js"


// Coloca um ouvinte no botão e chama a função getUserData quando o mesmo é clicado.
document.getElementById("btn-search").addEventListener("click", () => {
    const userName = document.getElementById("input-search").value
    if (validateEmptyInput(userName)) return
    getUserData(userName)
})

// Coloca um ouvinte no input, e quando o usuário clicar com a tecla Enter, chama a função getUserData.
document.getElementById("input-search").addEventListener("keyup", (e) => {
    const userName = e.target.value
    const key = e.wich || e.keyCode
    const isEnterKeyPressed = key === 13
    if (isEnterKeyPressed) {
        if (validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

// Função para validar se o campo for vazio. Se sim, irá retornar uma mensagem para o usuário de obrigatoriedade de preenchimento
function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert("Preencha o campo com o nome do usuário do GitHub")
        return true
    }
}

// Função para gerenciar as chamadas e interações, e renderizar os dados no DOM.
async function getUserData(userName) {

    const userResponse = await getUser(userName)

    if (userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)
}