# React Studies

Um repositório com projetos de estudo em React

## Visão geral

React é uma biblioteca Javascript para construir interfaces de usuário.

Algumas propriedades:

- **Declarativo**: o React facilita a criação de UIs interativas. Projete exibições simples para cada estado em seu aplicativo e o React atualizará e renderizará com eficiência apenas os componentes certos quando seus dados mudarem.
- **Baseado em componente**: crie componentes encapsulados que gerenciam seu próprio estado e, em seguida, componha-os para criar interfaces de usuário complexas.

## Pré-Requisitos

No [site da Tania Rascia](https://www.taniarascia.com/getting-started-with-react/) podemos ver alguns pré-requisitos para estudar React.

Há algumas coisas que você deve saber com antecedência antes de começar a brincar com o React. Se você nunca usou JavaScript ou DOM antes, por exemplo, eu ficaria mais familiarizado com eles antes de tentar lidar com o React.

- Familiaridade básica com [HTML e CSS](https://www.internetingishard.com/).
- Conhecimento básico de [JavaScript e programação](https://www.digitalocean.com/community/tutorial_series/how-to-code-in-javascript).
  Compreensão básica do [DOM](https://www.taniarascia.com/introduction-to-the-dom/).
  Familiaridade com [sintaxe e recursos do ES6](https://www.taniarascia.com/es6-syntax-and-feature-overview/).
- [Node.js e npm](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/) instalado globalmente.

## Seção 1: Introdução

### O que é React?

- React **é uma biblioteca** Javascript para desenvolvimento de aplicações front-end
- Estas aplicações são chamadas de SPA (Single Page Application): um único carregamento
- A arquitetura do React é baseada em componentes
- Pode ser inserido em uma aplicação ou podemos criar a aplicação apenas com React
- É mantido pelo Meta (Facebook)

### Como criar um aplicativo react

```javascript
     npx create-react-app nome-app
     npm start
```

### Implantação

Para fazer o deploy do seu projeto você pode dar uma olhada nesse passo a passo no [site create-react-app.dev](https://create-react-app.dev/docs/deployment/).

### Ferramentas

#### Node.js

- O Node.js é uma runtime de Javascript
- Ou seja, uma biblioteca utilizada por um compilador durante a execução do programa
- Que está construída na V8 engine (escrita em C++) do Google
- Possibilita criar softwares em JS no lado do servidor
- Temos então um código JS rodando em C++ para garantir alta performance

#### npm

- O **npm** é um gerenciador de pacotes do Node
- Vamos poder utilizar bibliotecas de terceiros, baixando elas pelo npm
- E também executar determinados scripts no nosso programa
- Dificilmente um software em Node.js não utiliza o npm
- Os módulos devem ser descartável, ou seja, a cada instalação do projeto baixamos todos os pacotes novamente
- Para criar as nossas aplicações em React vamos utilizar um executor de scripts do Node que é o **npx**
- Com o comando: `npx create-react-app <nome>` temos uma nova aplicação sendo gerada
- Podemos iniciar a aplicação com `npm start`
- Podemos usar o vite: `npm create vite@latest`
  - coloca o nome do projeto que quer 
  - seleciona o framework 
  - seleciona com js ou js + ts 
  - muda para a pasta que foi criada 
  - `cd hello-word`
  - `npm install`
  - `npm run dev`

### Estrutura base do React

Há algumas pastas e arquivos chaves para o desenvolvimento em React:

- `node_modules`: onde as dependências do projeto ficam
- `public`: assets estáticos e HTML de inicialização
- `src`: onde vamos programar as nossas aplicações
- `src/index.js`: arquivo de inicialização do React
- `src/App.js`: componente principal da aplicação

#### Extensão para o React

- `rafce` cria o padrão de um componente React

## Seção 2 - Fundamentos do React

- Na maioria dos projetos, os componentes ficam em uma pasta chamada `components` que devemos criar
- Geralmente são nomeados com a `Pascal Case`: `FirstComponent.js`
- No arquivo criamos uma função que contém o código deste componente ( a lógica e o template )
- Também precisamos exportar esta função, para reutilizá-lo

### JSX

- JSX é o "HTML do React"
- Onde vamos declarar as tags de HTML que serão exibidas no navegador
- Ficam no return do component
- Temos algumas diferenças do HTML, por exemplo: `class` será `className`
- Isso se dá pelas instruções semelhantes de JS e HTML, pois o JSX é Javascript então algumas terão nomes diferentes
- O JSX pode ter apenas um elemento pai
- Comentário no JSX: `{ /* Algum comentário */ }`

### Template Expressions

- Template Expressions é o recurso que nos permite executar JS no JSX e também interpolar variáveis
- A sintaxe é `{ algumCodigoEmJs } ``
- Tudo que está entre chaves é processado em Javascript e nos retorna um resultado

### Eventos

#### Evento de click

- Os eventos para o front-end são essenciais
- Em várias situações vamos precisar do click, **como ao enviar formulários**
- No React os eventos estão "prontos", como podemos utilizar o `OnClick`para ativar uma função ao clicar em um elemento
- Esta função é criada na própria função do componente
- As funções geralmente tem o padrão `handleAlgumaCoisa`

### Funções de renderização

- Podemos criar funções que retornam JSX
- Isso serve para criar situações que dependam de outras condições
- Ou seja, o JSX a ser renderizado pode variar por alguma variável, por exemplo

### Funções no evento 
- Quando as funções são simples, podemos realizar a lógica no próprio evento
- Isso torna nosso código mais complicado, por atrelar lógica com HTML 
- Mas em algumas situações é aplicáivel 

```js
    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso! </h1>
        } else return <h1>Também posso renderizar isso! </h1>
                
    };
```
## Seção 3: Avançando em React 
### Imagens no React 
- As imagens públicas do nosso projeto podem ficar na pasta public 
- De lá elas podem ser chamadas pelas tags img diretamente pelo /nome.kpg
- Pois a pasta fica linkada com o src das imagens 

### Imagens em asset
- A pasta public pode ser utilzada para colocar imagens, como fizemos na aula passada 
- Mas um padrão bem utilizado para as imagens dos projetos é colocar emm uma pasta chamada assets, em src. 
- Ou seja, você vai encontrar projetos com as duas abordagens 
- Em assets precisamos importar as imagens e o src é dinâmico com o nome da importação. 

### O que são hooks 
- Recursos do React que tem diversas funções 
- Como: guardar e alterar o estado de algum dado da nossa aplicação 
- Todos os hooks começam com **use**, por exemplo **useState**
- Podemos criar os nossos hooks, isto é, chamado de custom hoook 
- Os hooks precisam ser importador 
- Geralmente são úteis em todas as aplicações, utilizaremos diversos ao longo  do curso 

### useState hook 
- O hook useState é um dos mais utilizados 
- Utilizamos para **gerenciar o estado de algum dado**, variáveis não funcionam corretamente, o componente não re-rederiza 
- Para **guardar o dado definimos o nome da variável** e para **alterar vamos utilizar setNome**, onde nome é o nome do nosso dado 

### Renderização de lista 
- Uma outra ação bem comum é renderizar os dados no template 
- Fazemos isso com os dados com tipo de array 
- Utilizando o método map para nos auxiliar 
- Além dos dados podemos inserir JSX em cada iteração 

### A propriedade key 
- Iterar listas sem a propriedade key nos gera um warning, podemos verificar isso no console 
- O React precisa de uma chave única em cada um dos itens iterados
- Isso serve para ajudá-lo na renderização do componente 
- Geralmente temos um array de objetos e podemos colocar key como alguma chave única, como o id de algum dado 

```js 
const ListRender = () => {
    const [users] = useState([
        { id: 1, name: "Grazielle", age: 29},
        { id: 2, name: "Ramon", age: 28},
        { id: 3, name: "José", age: 62},
    ]);
}

   return(
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender; 
```

### Previous state
- Previous state é um recurso que nos permite pegar o dado em seu valor original dentro de um set de dado 
- Isso é muito utilizado para modificar listas, pois temos o valor antigo e transformamos em um valor novo
- O primeiro argumento de um set sempre será o previous state
