# Webpack React Skeleton

## Initialization

It's common webpack project with `React+Redux+Router` stack, for future usage You should install node.js and run:

> yarn install

## Usage

For building your bundle You must run:

> yarn run build

Or start development server:

> yarn start

### Scripts

It's configuration uses environment separation. For settings special environment you must set `NODE_ENV`. The default environment is `development`.

**Package scripts:**

| Command    | Description                                       |
|------------|---------------------------------------------------|
| start      | Start the development server.                     |
| build      | Build your bundles with unassigned environment.   |
| watch      | Watch changes with unassigned environment.        |
| eslint     | Check your project with eslint.                   |
| test       | Start jest tests                                  |

## Project structure

| Path            | Description                                       |
|-----------------|---------------------------------------------------|
| /app            | Your application                                  |
| /app/actions    | Redux actions                                     |
| /app/assets     | Assets (such as fonts, images, etc)               |
| /app/components | React components                                  |
| /app/constants  | JS constants (for example, constants for actions) |
| /app/containers | React containers                                  |
| /app/reducers   | Redux reducers                                    |
| /app/store      | Redux store                                       |
| /app/app.js     | Application entry point                           |
| /app/index.html | Application startup html                          |
| /config         | Webpack configuration                             |
| /dist           | Webpack bundle                                    |
| /vendor         | Vendor libs                                       |
