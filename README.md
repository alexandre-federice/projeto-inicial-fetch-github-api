# 🌐 GitHub User Search App

🇺🇸 **English Version**

This project is a web application that uses the GitHub API to fetch and display user information. With a simple and responsive interface, users can search for a GitHub username to view details like profile picture, name, bio, and a list of public repositories.

---

## 🚀 Features

- **Search GitHub Users:** Enter a username to fetch and display their profile information.
- **Display Repositories:** List the public repositories of the fetched user.
- **Error Handling:** 
  - Alerts for empty input fields.
  - Friendly message if the user is not found.

---

## 🛠️ Technologies Used

- **HTML5** and **CSS3:** Structure and styling of the interface.
- **JavaScript (ES6+):** Logic and integration with the GitHub API.
- **GitHub API:** To fetch user and repository data.

---

## 📂 Project Structure

```
├── src
│   ├── css
│   │   ├── reset.css            # Global style reset
│   │   └── styles.css           # Application styles
│   ├── scripts
│   │   ├── index.js             # Main entry point
│   │   ├── variables.js         # Global constants
│   │   ├── services
│   │   │   ├── user.js          # Fetch user data
│   │   │   └── repositories.js  # Fetch repository data
│   │   ├── objects
│   │       ├── user.js          # Object to store user data
│   │       └── screen.js        # Object to render data on the DOM
│   └── ...
└── index.html                   # Application structure
```

---

## 📖 How to Use

### 1. Prerequisites
- Install [Node.js](https://nodejs.org/) or use an extension like **Live Server** in VS Code.

### 2. Clone the Repository
```bash
git clone https://github.com/your-username/repository-name.git
cd repository-name
```

### 3. Open the Project
- Open `index.html` in your browser or use **Live Server** to view the application locally.

---

## 🌟 Implemented Features

### Search Users
1. Enter a GitHub username in the input field.
2. Click the **Search** button or press **Enter**.
3. View user details, including:
   - Profile picture.
   - Name and bio (if available).
   - A list of public repositories (limited to 10).

### Error Handling
- **Empty Input:** Displays an alert requesting input.
- **User Not Found:** Displays a "User not found" message on the screen.

---

## 🚧 Future Improvements

- Add pagination for repositories.
- Display additional information like followers or most used programming languages.
- Implement unit tests for better reliability.
- Add animations for a better user experience.

---

## 📄 License

This project is under the [MIT License](LICENSE). You are free to use, modify, and distribute it, provided you give credit to the original author.

---

## 🧑‍💻 Author

Made with 🖤 by **Alexandre Federice**
- [GitHub](https://github.com/alexandre-federice)
- [LinkedIn](https://www.linkedin.com/in/pedro-alexandre-federice-soares/)
```

---
---

🇧🇷 **Versão em Português**

Este projeto é uma aplicação web que utiliza a API do GitHub para buscar e exibir informações de usuários. Com uma interface simples e responsiva, o usuário pode pesquisar pelo nome de um usuário do GitHub e visualizar detalhes como a foto de perfil, nome, bio e uma lista de repositórios públicos.

---

## 🚀 Funcionalidades

- **Buscar Usuários do GitHub:** Insira o nome de um usuário para visualizar seus detalhes.
- **Exibir Repositórios:** Lista os repositórios públicos do usuário encontrado.
- **Tratamento de Erros:** 
  - Alertas para campos de entrada vazios.
  - Mensagem amigável caso o usuário não seja encontrado.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** e **CSS3:** Estrutura e estilização da interface.
- **JavaScript (ES6+):** Lógica e integração com a API do GitHub.
- **API do GitHub:** Para buscar dados de usuários e repositórios.

---

## 📂 Estrutura do Projeto

```
├── src
│   ├── css
│   │   ├── reset.css            # Reset para estilo global
│   │   └── styles.css           # Estilo da aplicação
│   ├── scripts
│   │   ├── index.js             # Ponto de entrada principal
│   │   ├── variables.js         # Constantes globais
│   │   ├── services
│   │   │   ├── user.js          # Buscar dados do usuário
│   │   │   └── repositories.js  # Buscar dados dos repositórios
│   │   ├── objects
│   │       ├── user.js          # Objeto para armazenar dados do usuário
│   │       └── screen.js        # Objeto para renderizar dados no DOM
│   └── ...
└── index.html                   # Estrutura da aplicação
```

---

## 📖 Como Usar

### 1. Pré-requisitos
- Instale o [Node.js](https://nodejs.org/) ou use uma extensão como **Live Server** no VS Code.

### 2. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 3. Abrir o Projeto
- Abra o arquivo `index.html` no seu navegador ou use **Live Server** para visualizar a aplicação localmente.

---

## 🌟 Funcionalidades Implementadas

### Buscar Usuários
1. Digite o nome do usuário do GitHub no campo de texto.
2. Clique no botão **Buscar** ou pressione **Enter**.
3. Veja as informações do usuário, incluindo:
   - Foto de perfil.
   - Nome e bio (se disponíveis).
   - Lista de repositórios públicos (limitados a 10).

### Tratamento de Erros
- **Campo Vazio:** Mostra um alerta solicitando o preenchimento.
- **Usuário Não Encontrado:** Exibe a mensagem "Usuário não encontrado" na tela.

---

## 🚧 Melhorias Futuras

- Adicionar paginação para repositórios.
- Mostrar informações adicionais, como número de seguidores ou linguagens mais usadas.
- Implementar testes unitários para validar funcionalidades.
- Adicionar animações para melhorar a experiência do usuário.

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE). Você é livre para utilizá-lo, modificá-lo e distribuí-lo, desde que mantenha a atribuição ao autor original.

---

## 🧑‍💻 Autor

Feito com 🖤 por **Alexandre Federice**
- [GitHub](https://github.com/alexandre-federice)
- [LinkedIn](https://www.linkedin.com/in/pedro-alexandre-federice-soares/)

---