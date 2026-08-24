![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

# I Hate Taxes
[Project Link](https://i-hate-taxes.vercel.app/)

## This project is a simple system for tax, salary, and profit calculation.

#### Its main purpose is to calculate profits and expenses for a CNPJ (corporate) account, since I currently work as a PJ (pessoa jurídica / independent contractor).

## Technologies

#### The technologies chosen for the project were selected based on things I wanted to learn and practice, which are:

* VueJS
  * I already have solid experience with it, but I wanted to practice and understand the new Composition API proposal in Vue 3.
* TypeScript
  * I was curious to experiment with it because I had never used it before. Since the project involves specific business rules, I found the idea of strong typing interesting.
* TailwindCSS
  * A comfortable choice — I already have good experience and wanted to deliver a layout quickly.
* Jest
  * With the goal of practicing and learning more about testing, I chose a widely adopted library so I could find more material and examples to support my learning.
* GitHub Actions
  * I was really eager to learn and have my first contact with CI/CD. GitHub Actions was an easy choice because of its integration with the project.
    * CI – I loved automating this step; it flowed very well in the project.
    * CD – I didn't apply or learn it because I chose Vercel for hosting, and the deployment was so simple and practical that it didn't need a custom CD pipeline. Still, I left a file at `./github/workflows/deploy.yml` just to test an action focused on a single branch. I found the branch‑based triggering and its many possible applications very interesting.

## Project

#### The project itself is quite simple. The main points worth mentioning are:

  * A `business_rules` directory where all the calculation and business logic lives. I found this to be a good place to apply TypeScript.
  * TDD – for study and learning purposes, I placed the test files right next to the files they are testing.
    * The only exception is an integration test, which I preferred to isolate in a separate `tests` folder, since it involves different files and I thought it was better to follow the standard practice of keeping them separate.

## Notes

##### <b>I KNOW</b> that class and file names should be descriptive and well‑chosen (CLEAN CODE). However, since this is a personal project where only I will work on it, I decided to name one class after the nickname of a friend of mine who helped me <b>A LOT</b> to understand the financial side of things (he’s an accountant). The class is `Vrau` located at `/src/business_rules/Vrau/Vrau.ts` – which would be the equivalent of `Accountant.ts` or `certifiedPublicAccountant.ts` / `CPA.ts`.

##### So here’s my tribute to my friend. <b>THANK YOU SO MUCH, VRAU!!! :heart: </b>
##### And my thanks to my designer friend who helped me with the interface details. <b>THANK YOU SO MUCH, IAGUINHO!!! :heart: </b> 

## Running the Project Locally

#### The command below will create and start a container using Docker to make it easier:

```
npm run serve
```


#### However, if you prefer not to use Docker, you can run it the conventional way. Keep in mind that you'll need npm and Vue installed.

* Dependencies
    * node: 18.14.2
    * core-js: "^3.8.3"
    * register-service-worker: "^1.7.2"
    * vue: "^3.2.13"
    * vue-router: "^4.0.3"
    * vuex: "^4.0.0"

```
npm install
```

```
npm run dev
```
