// Renderiza as informações na tela, obtidas pela API do GitHub.
const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                            <div class="data"
                                                <h1>${user.name ?? "Não possui nome cadastrado 😢"}</h1>
                                                <p>${user.bio ?? "Não possui bio cadastrada 😢"}</p>
                                                <p>👥 Seguidores: ${user.followers}</p>
                                                <p>➡️ Seguindo: ${user.following}</p>
                                            </div>
                                      </div>`

        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens += `<li class="repositores section">
                                                                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                                                        <div class="itens">
                                                                            <p>🌟 Stars: ${repo.stargazers_count}</p>
                                                                            <p>🍴 Forks: ${repo.forks_count}</p>
                                                                            <p>👀 Watchers: ${repo.watchers_count}</p>
                                                                            <p>📂 Linguagem: ${repo.language ?? "N/A"}</p>
                                                                        </div> 
                                                                </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                           </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    },
    renderEvents(events) {
        let eventItens = "";
        events.slice(0, 10).forEach(event => {
            if (event.type === "PushEvent") {
                eventItens += `<li>📦 Repositório: ${event.repo.name} - Mensagem: ${event.payload.commits[0].message}</li>`;
            } else if (event.type === "CreateEvent") {
                eventItens += `<li>📦 Repositório: ${even.repo.name} - Sem mensagem de commit`;
            }
        });

        this.userProfile.innerHTML += `<div class="events section">
                                            <h2>Últimos Eventos</h2>
                                            <ul>${eventItens}</ul>
                                       </div>`;
    }
}

export { screen }