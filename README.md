# VR Wallet
<p align="center">
<img src="./src/assets/banner.png">
O VR Wallet é uma aplicação de teste para a vaga de <b>ESPECIALISTA SISTEMAS TI I – Dev Front End</b> para o Super App da VR.
</p>

### Descrição: 

Com o VR Wallet você consegue cadastrar cartões, listá-los e selecionar para uso.

### Configuração

Para rodar o projeto em sua máquina, será necessário rodar o comando **npx expo install** para instalar as dependências.  
>_lembre-se de estar com uma versão de node de no minimo 18_ 

Após a instalação, altere no arquivo **package.json**, na linha 10, o host de *localhost* para o ip da sua máquina.  

Faça a mesma coisa em *src/global/api.ts* para conectar sua aplicação ao backend.  

Agora só é necessário rodar o seguinte comando para executar o backend:
```sh
yarn server
```
E rodar o seguinte comando para rodar a aplicação:
```sh
yarn start
```

### Detalhes Técnicos

- A aplicação foi desenvolvida em React Native, utilizamos muito das ferramentas fornecidas pelo Expo, como o template de navegação com TypeScript.

- A navegação entre _Listar_ e _Cadastrar_ é realizada de forma Stack, ambas utilizando a biblioteca [Expo Router](https://docs.expo.dev/router/introduction/).

- Utilizamos a biblioteca [json-server](https://github.com/typicode/json-server) para simular o backend e fazer as requisições de criação e listagem de cartões.

- Para testes utilizei o [jest](https://jestjs.io/pt-BR/), focando principalmente em testes em funções que são vitais para a lógica da aplicação.