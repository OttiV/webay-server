# Webay
## [Check out the deployed version](https://webay.netlify.com/)
This repo contains a frontend and backend. It uses Typescript, Express, routing-controllers and TypeORM in the backend and React/Redux in the frontend.


## Getting Started

### Postgres Database

Start a Postgres container using the following Docker command:

```bash
$ docker run \
  --rm \
  -e POSTGRES_PASSWORD=secret \
  -p 5432:5432 \
  postgres
```

### TypeStack Server

Then `cd` into the `server` directory and run `npm install` to install the dependencies.

Start the server with the `nodemon`

### React Client

Open another terminal session and `cd` into the `client` directory, then run `npm install` to install dependencies and run `npm start` to start the dev server.
