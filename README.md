# Imperial Cars: Locação de Carros Importados

Sistema web de locação de carros importados, desenvolvido como **Checkpoint 6** da disciplina de Web Development (FIAP, Engenharia de Software, turma 1ESPJ).

> **Aluno:** Nicholas Belo | **RM:** 571063
> **Professor:** Wellington Cidade Silva

## Sobre o projeto

Aplicação front-end com duas páginas: uma **Home** institucional e uma página **Carros** com a frota disponível para locação. O projeto foi feito em até 2 horas, seguindo um fluxo profissional de Git (branches, commits semânticos e Pull Requests).

## Tecnologias

| Tecnologia | Uso |
|---|---|
| [React](https://react.dev/) | Construção da interface com componentes |
| [Vite](https://vitejs.dev/) | Ambiente de desenvolvimento e build |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização |
| [React Router DOM](https://reactrouter.com/) | Rotas e navegação entre páginas |

## Como rodar

```bash
git clone https://github.com/NOME-DA-ORG/cpVI-frontend.git
cd cpVI-frontend
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Estrutura de pastas

```
cpVI-frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Card.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Carros.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── integrante.txt
└── README.md
```

## Componentes e páginas

- **Navbar:** menu de navegação com destaque na rota ativa
- **Footer:** rodapé com direitos e contato
- **Card:** exibe marca, modelo, ano e diária de um carro
- **Home:** hero com chamada para a frota e seção de diferenciais
- **Carros:** listagem da frota usando o componente `Card`
- **App.jsx:** define as rotas (`/`, `/carros` e `404`)

## Fluxo de trabalho (Git)

- Branches principais: `main` (produção) e `dev` (integração)
- Cada tarefa em uma branch própria (`feat/...`, `chore/...`) e **Pull Request para `dev`**
- Mínimo de **3 commits por tarefa**, no padrão de commits semânticos:

| Prefixo | Uso |
|---|---|
| `feat` | nova funcionalidade |
| `fix` | correção de bug |
| `chore` | configuração e manutenção |
| `docs` | documentação |

## Tarefas

| # | Tarefa | Branch |
|---|---|---|
| 1 | Componentes (Navbar, Footer, Card) | `feat/estruturando-components` |
| 2 | Páginas (Home, Carros) | `feat/pages` |
| 3 | Rotas no `App.jsx` | `feat/rotas` |
| 4 | Entrega e documentação | `chore/integrante` |

## Licença

Projeto acadêmico, sem fins comerciais.