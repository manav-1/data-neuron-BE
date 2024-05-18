This Project is hosted using KOYEB at [`link`](https://dual-lindsay-manav81101-d2c3f9f9.koyeb.app/)

# Project Documentation

This project is a Node.js application built with the NestJS framework and TypeScript. It uses Prisma as an ORM for database operations.

## Project Structure

The main application code resides in the [`src/`]('./data-neuron-backend/src/') directory. Here's a brief overview of the key files and directories:

- `app.controller.ts`: This is where the application's main controller is defined.
- `app.module.ts`: This is the main module of the application.
- `app.service.ts`: This is the main service of the application.
- `dto/app.dto.ts`: This file contains Data Transfer Objects (DTOs) used in the application.
- `infra/prisma/`: This directory contains Prisma-related files, including migrations and the Prisma schema.
- `main.ts`: This is the entry point of the application.

## Setup

Before running the application, make sure to install the dependencies by running:

```sh
npm install
```

## Running the Application

To start the application, run:

```sh
npm run start:dev
```

## Linting

The project uses ESLint for linting, with the TypeScript ESLint plugin. The configuration can be found in [`.eslintrc.js`](command:_github.copilot.openSymbolInFile?%5B%22.eslintrc.js%22%2C%22.eslintrc.js%22%5D '.eslintrc.js').

## Database Migrations

Database migrations are handled by Prisma. The migrations will be located in [`src/infra/prisma/migrations/`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fmnt%2Fsda1%2Fprojs%2Fdata-neuron-backend%2Fsrc%2Finfra%2Fprisma%2Fmigrations%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D '/mnt/sda1/projs/data-neuron-backend/src/infra/prisma/migrations/').

## Ignored Files

The [`.gitignore`](.gitignore) file lists the files and directories that are ignored by Git. This typically includes compiled output, logs, environment variable files, and IDE-specific files.

Please refer to the individual files for more detailed information.
