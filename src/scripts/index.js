import { getUser } from "/src/scripts/services/user.js"
import { getRepositories } from "/src/scripts/services/repositories.js"

import { user } from "/src/scripts/objects/user.js"
import { screen } from "/src/scripts/objects/screen.js"


// Coloca um ouvinte no botão e chama a função getUserProfile quando o mesmo é clicado.
document.getElementById("btn-search").addEventListener("click", () => {
    const userName = document.getElementById("input-search").value
    getUserData(userName)
})

// Coloca um ouvinte no input, e quando o usuário clicar com a tecla Enter, chama a função getUserProfile.
document.getElementById("input-search").addEventListener("keyup", (e) => {
    const userName = e.target.value
    const key = e.wich || e.keyCode
    const isEnterKeyPressed = key === 13
    if (isEnterKeyPressed) {
        getUserData(userName)
    }
})

// Função para pegar as informações do usuário na API e criar um trecho de HTML no DOM.
async function getUserData(userName) {

    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)
}