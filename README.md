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

It's configuration uses environment separation. 
For settings special environment you must set `NODE_ENV`. 
The default environment is `development`.

**Package scripts:**

| Command        | Description                                       |
|----------------|---------------------------------------------------|
| start          | Start the development server.                     |
| build          | Build your bundles with unassigned environment.   |
| watch          | Watch changes with unassigned environment.        |
| eslint         | Check your project with eslint.                   |
| eslint:fix     | Fix project conflicts with eslint.                |
| flow:report    | Generate flow coverage information for app dir    |
| precommit      | Run precommit hook                                |
| prettier       | Handle application files with Prettier.           |
| prettier:write | Write handling of Prettier in your source.        |
| test           | Start jest tests                                  |
| test:debug     | Debug your tests with watch mode                  |
| test:watch     | Start jest tests with watch mode                  |

## Project structure

| Path              | Description                                       |
|-------------------|---------------------------------------------------|
| /app              | Your application                                  |
| /app/actions      | Redux actions                                     |
| /app/assets       | Assets (such as fonts, images, etc)               |
| /app/components   | React components                                  |
| /app/constants    | JS constants (for example, constants for actions) |
| /app/containers   | React containers                                  |
| /app/pages        | React components with page logic                  |
| /app/reducers     | Redux reducers                                    |
| /app/store        | Redux store                                       |
| /app/types        | Types for Flow                                    |
| /app/app.js       | Application entry point                           |
| /app/index.html   | Application startup html                          |
| /config           | Project configuration                             |
| /config/misc      | Other configuration scripts                       |
| /config/variables | Webpack variables for your application            |
| /config/webpack   | Webpack configuration by environments             |
| /dist             | Webpack bundle                                    |
| /vendor           | Vendor libs                                       |

## TODO

* [ ] Add examples with skeleton features  
* [ ] Resolve webpack context for jest and flow with mocks  
* [ ] Full coverage with flow
* [ ] Integrate with Yeoman
