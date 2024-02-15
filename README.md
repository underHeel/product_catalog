
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

## Built With

[Vite](https://vitejs.dev/)