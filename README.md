# GitHub User Search App

Este projeto é uma aplicação web que utiliza a API do GitHub para buscar informações de usuários e exibir seus repositórios. Com uma interface simples e responsiva, o usuário pode pesquisar pelo nome de um usuário do GitHub e visualizar detalhes como a foto de perfil, nome, bio e uma lista de repositórios públicos.

---

## 🚀 Funcionalidades

- **Busca de usuários do GitHub:** Insira o nome de um usuário e visualize seus detalhes.
- **Exibição de repositórios:** Lista os repositórios públicos do usuário encontrado.
- **Tratamento de erros:** 
  - Alerta para campo de entrada vazio.
  - Mensagem amigável quando o usuário não é encontrado.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** e **CSS3**: Estrutura e estilização da interface.
- **JavaScript (ES6+)**: Lógica e integração com a API do GitHub.
- **API do GitHub**: Para buscar dados de usuários e repositórios.

---

## 📂 Estrutura do Projeto

```
├── src
│   ├── css
│   │   ├── reset.css           # Reset para estilo global
│   │   └── styles.css          # Estilo da interface
│   ├── scripts
│   │   ├── index.js            # Arquivo principal
│   │   ├── variables.js        # Constantes globais
│   │   ├── services
│   │   │   ├── user.js         # Função para buscar dados do usuário
│   │   │   └── repositories.js # Função para buscar repositórios
│   │   ├── objects
│   │       ├── user.js         # Objeto para armazenar dados do usuário
│   │       └── screen.js       # Objeto para renderizar dados no DOM
│   └── ...
└── index.html                  # Estrutura da aplicação
```

---

## 📖 Como Usar

### 1. Pré-requisitos
- Tenha o [Node.js](https://nodejs.org/) instalado para rodar um servidor local, ou utilize uma extensão como **Live Server** no VS Code.

### 2. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 3. Abrir o Projeto
- Abra o arquivo `index.html` em seu navegador ou use uma extensão como **Live Server** para visualizar a aplicação localmente.

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
- **Campo vazio:** Mostra um alerta solicitando o preenchimento.
- **Usuário não encontrado:** Exibe a mensagem "Usuário não encontrado" no DOM.

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
```