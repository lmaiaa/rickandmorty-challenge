# Desafio EngagED

## Sobre o Projeto

O projeto é um lista de personagem do animaão Rick and Morty, onde é possível a realização da busca dos personagens pelo nome.Foi utilizado uma API GraphQL já existente, disponiblizada [aqui](https://rickandmortyapi.com/graphql)

O projeto foi hospedado no Google Firebase e pode ser acessado por [aqui](https://rickandmorty-engaged.web.app/)

**Tecnologias**: 
- **VueJs** - na versão 3 (utilizando a [composition-api](https://composition-api.vuejs.org/) + typescript) (Framework JavaScript).
- **[Google Firebase](https://firebase.google.com/)** - para hospedagem do front-end no Firebase Hosting e do back-end no Firebase Fucntions.
- **[Quasar](https://quasar.dev/)** 
- **Github Actions** - Implementado ferramenta de CI para deploy automático no Firebase Hosting.

## Requisitos necessários

É necessário a instalação do NodeJs 12.X e GIT para inicialização do projeto.

- **Instalação do NodeJs:** [Acesse aqui](https://nodejs.org/en/download/) e realize o download do NodeJs 12.X
- **Instalação do GIT:** Realize o download [aqui](https://git-scm.com/downloads) e realize a instalção.

Realizado as configurações vamos para a próxima etapa.

## Incializando o projeto

Acesse o [repositório](https://github.com/lmaiaa/rickandmorty-challenge) do meu desafio

Execute o comando

```
git clone https://github.com/lmaiaa/rickandmorty-challenge
```

Acesse a pasta clonada e instale as dependências

```
cd rickandmorty-challenge
npm install

```

Após isso o projeto está pronto para ser inicializado.
Para inicializar do front-end execute o comando:

```
quasar dev
```

## Projeto inicializado

Ao inicializar o projeto:

- O front-end pode ser acessado em: **http://localhost:8080**

## Melhorias futuras

- Testes unitários;
- Teste E2E;
- Novos filtros
