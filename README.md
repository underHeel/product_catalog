## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

```
node version = 20.10.0
npm version = 10.2.3
```

#### NVM

```
Install NVM (https://github.com/nvm-sh/nvm):
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

Install Node and NPM (https://github.com/creationix/nvm#usage):

```
nvm list
nvm ls-remote
nvm install 20.10.0
nvm use 20.10.0
nvm alias default 20.10.0
node -v
npm -v
```

### Installing

Install the required node modules

```
npm i
```

And start the react application

```
npm start/npm run dev/npm run start
```

Visit http://localhost:5173/

### Git

Before starting to work on the task and before push, run the command:

```
git pull origin main
```

When working on task, create branch with name:

```
task_taskId
```

### Deploying

Deploy on github pages

```
npm run deploy
```

## DEMO LINK

https://underheel.github.io/product_catalog/#/

## Built With

[Vite](https://vitejs.dev/)

## Development Guidelines:

1. Mobile-First Design: Begin by designing for mobile screens, then scale up for larger devices, ensuring a smooth user experience regardless of screen size.

2. Flex and Grid Layouts: Choose Flexbox for straightforward layouts and Grid for more intricate designs requiring precise control over both rows and columns. 

3. Redux Toolkit for State Management: Opt for Redux Toolkit to manage the application state efficiently, simplifying the process with its built-in utilities and debugging tools.

4. Modular Styles and SCSS: Keep styles modular for easier maintenance and reuse, employing SCSS for advanced CSS features like variables and nesting to streamline development.

