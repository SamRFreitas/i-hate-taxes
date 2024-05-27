![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

# I Hate Taxes
[Link do Projeto](https://i-hate-taxes.vercel.app/)

## Esse projeto é um simples sistema para cálculo de impostos, salário e lucros. 

#### Sua principal função é calcular os lucros e gastos de uma conta CNPJ, pois no momento trabalho como PJ.

## Tecnologias

#### A escolha das tecnologias utilizadas no projeto foram relcionadas a coisas que eu queria aprender e praticar que no caso são:
* VueJS
  * Uma tecnologia que já tenho uma boa experiência, mas queria praticar e entender a nova proposta do composition API da versão 3 do Vue.
* Typescript
  * Tive curiosidade em experimentar, pois nunca tinha mexido e utilizado, e por existirem certas regras de negócio relacionadas ao projeto, achei interessante a idea de tipagem no projeto.
* TailwindCSS
  * Escolha confortável, pois já possuo uma boa experiência e queria entregar um layout de uma forma mais rápida.
* Jest
  * Com intuito de praticar e aprender mais sobre testes, achei interessante a utilização de uma biblioteca bem difundida no mercado, pois seria possível de achar mais material e exemplos, ajudando no aprendizado de testes.
* Github Actions
  * Com muita vontade de aprender e ter meu primeiro contato com CI/CD, achei interessante a escolha do github actions pela facilidade da aplicação no projeto.
    * CI - Adorei a automatização dessa etapa, e fluiu muito bem no projeto.
    * CD - Não apliquei e não aprendi, pois na escolha de hospedagem na vercel, o deploy foi tão simples e prático que nem precisou do implementação de um CD. Mas deixei um arquivo no caminho ./github/workflows/deploy.yml só para testar a aplicação de uma action focada em apenas um branch. Achei muito interessante a escolha de quais branches vao ativar a action e possuem inúmeras aplicações pra isso.
   
## Projeto

#### O projeto em si é bem simples, os pontos principais que acho interessante de mencionar são:
  * A criação de um diretório escrito business_rules onde as regras de todos os cálculos e regras do negócio se encontram. Onde achei interessante a aplicação do typescript.
  * TDD - Para fins de estudo e aprendizado achei interessante os arquivos de testes estarem do lado dos arquivos que estão sendo testados.
    * Fora a exceção de um teste de integração que achei melhor isolar em uma parte de testes, pois se tratando de arquivos diferentes, achei melhor seguir o padrão de colocar em uma pasta de tests.
   
## Observações

##### <b>EU SEI</b>, que os nomes das classes e arquivos devem ser descritivos e bem escolhidos (CLEAN CODE). No entanto por se tratar de um projeto pessoal, onde só eu vou desenvolver, fiz a escolha de nomear uma classe com o apelido de um amigo meu em sua homenagem, que me ajudou <b>MUITO</b> a aplicar e enteder a parte financeira pois ele é contador. A clase em si é a classe Vrau encontrada no caminho /src/business_rules/Vrau/Vrau.ts que seria equivalente a Contador.ts ou no inglês certifiedPublicAccountant.ts ou CPA.ts

##### Então fica aqui minha homenagem pro meu amigo. <b> MUITO OBRIGADO VRAU!!! :heart: </b>
##### E meu obrigado ao meu amigo designer que me ajudou com os detalhes da interface, <b> MUITO OBRIGADO IAGUINHO!!! :heart: </b> 

## Rodando o Projeto Localmente.

#### O comando logo abaixo vai criar e subir um container utilizando o docker para facilitar 

```
npm run serve
```

#### No entanto, se não quiser utilizar docker pode ser do jeito convencional. Lembrando que precisa ter o npm e vue instalados para rodar o projeto. 

* Dependências
    * node: 18.14.2
    * core-js": "^3.8.3",
    * "register-service-worker": "^1.7.2",
    * "vue": "^3.2.13",
    * "vue-router": "^4.0.3",
    * "vuex": "^4.0.0"
    



```
npm install
```

```
npm run dev
```
