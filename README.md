[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# inkitt-frontend

A simple project (with no api) to simulate comment system in Reddit.
it has:

- custom Webpack Config
- Typescript
- CSS modules beside normal css files and Tailwind for base CSS
- docker
- eslint/prettier/husky
- Redux/Redux-Saga
- Sentry for error tracking (not complete config, just initilized)

## tl;dr

- clone project and go to folder
- Install by executing `npm install` or `yarn`.
- to start server just use this command `npm start`. it will be run on port 4000.
- to start server with docker you can use docker file that is provided.

## tools:

- Custom Webpack config
- Test with jest and Cypress for functional tests
- webpack as module bundler
- babel as Typescript and ES6 transpiler
- docker and docker compose

## project structure

```

.

├── build # Compiled files (just server file is saved as index.js)

├── .vscode # visual studio IDE config (if you use it)

├── bundle-report # analyzer report for webpack final build

├── public # public assets

├── setup # main setups for webpack.it also included the utils like alias or module rules and ...

├── src # main project logic files

│ ├── app # main files to start app and it's configurations

│ ├── config # main config for configurations (not so much but used for better seperation, it can also declared in env file).

│ ├── constants # main constants file for the application constants.

│ ├── mock-server: the mocke server util to handle mock data in app

│ ├── providers # main app providers (inclduing error provider. error-handler for my project is often use for a source of error handling for all error happening in project. app provider to handle the app start configs and actions. data provider to add redux or any data-provider might be needed)

│ ├── services # main services of project. here is just an simulator of api call.


│ ├── utils # main utils of project.

│ ├── ui # main views of project including base components(stateless components and layout components and common components. there is also views of application. we have just one route)

│ ├── declration.d.ts # main declration utils for typescript

├── tests # unfortunatly I just included test util but couldn't find enough time to make it completed.

├── Dockerfile.prod # docker file to build in production wepack config

├── Dockerfile # docker file to build the server file and run it and watch it changes with webpack and reload the server

├── docker-compose # docker-compose file to build and run docker file

├── LICENSE

└── README.md

└── ... # other configs for editor config, typescript, prettier and ...


```

## Why custom webpack config

I tried to do a little more in here to show case what I can do so I decided to use a customized webpack config and not use CRA or any boilerplate. I got some ideas but not another fork of them.

# final words

hope you enjoy from what I have done. I know there are lots of improvements can be made here. specially I should work more on test and I didn't had time really.
Thanks in advance and looking for your comment.
