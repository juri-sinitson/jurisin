# Jurisin Artwork App

## Running the app
Before you run the app first time, you need to run `yarn install`.
### Local backend with local data
Run `yarn run artworks-backend-local-data` to start the local server and run `yarn run start` to start the app, go to the `http://localhost:4200/`. `4200` is a default port of angular.

### Local backend with product data
Run `yarn run artworks-backend-prod-data` to start the local server and run `yarn run start` to start the app, go to the `http://localhost:4200/`. `4200` is a default port of angular.

### Note
The app does not access the data and the images directly to avoid CORS-issues and to stay safe against attacks associated with that. The data and images are fetched through the (local) backend instead.

The development server which is run when you issue the command `yarn run start` uses also a proxy to the local backend. See `apps/artwork/src/proxy.conf.json` and https://angular.io/guide/build#proxying-to-a-backend-server.

## What does the app `artwork` do?
The app fetches artworks in a grid list. When an element of that list is clicked/tipped the details dialog of the artwork is opened.
The artworks API is described on https://api.artic.edu/docs/.
The goal of the app is to demonstrate the usage of
1. Monorepo concept (see https://nx.dev/l/r/core-concepts/why-monorepos) and and the DDD principles on https://www.angulararchitects.io/book pages 17 to 22.
2. Storybook, see below
3. Request caching with @ngrx/data, see below
4. Unit-Testing by testing behavior instead of implementation details (see also https://www.youtube.com/watch?v=EZ05e7EMOLM)
5. Simple deployment

## Testing
Run `yarn run test`

## Linting
Run `yarn run lint`

## Deployment

### Local deployment
Run `yarn run build`. When the build is ready run run either `yarn run artworks-backend-prod-data` for prod data or `yarn run artworks-backend-local-data` for local data if not yet run. Then just go to the base URL of the server. This would be usually `http://localhost:4300/`.

### Prod deployment
Run `yarn run build` and serve or copy the directory `dist/apps/artwork` in the directory your production backend mapped on. If you reset the container with every deployment, you also need to run `yarn install` every time before the building command.

In the production you have to proxy the data and images in the same way as in `apps/artwork/src/server/backend/backend-prod-data.js`. If you use NodeJs in production, you can extend the `backend-prod-data.js` above according to your needs.

If you need other image sizes check out the documentation on https://api.artic.edu/docs/#image-sizes.

## Tooling
### nx
See https://nx.dev/l/r/core-concepts/why-monorepos, https://nx.dev/l/r/core-extended/computation-caching
and the DDD principles on https://www.angulararchitects.io/book pages 17 to 22.

### PrimeNG
This UI library is used to avoid writing UI-boilerplate-code. It includes the library Primeflex (similar to Tailwindcss) with utility classes (e.g. `w-full`, `lg:w-8`) for responsive design.
### Storybook
Storybook is a kind of catalog of UI-Components and can be used as an interface between developers and non-developers. The catalog is maintained by developers that non-developers are able to checkout every state of the component (e.g. primary, loading or error). A non-developer can also experiment with e.g. extreme long text in the title to check out responsive behavior.

#### Commands
Run `nx run artwork-feature:storybook` to see the UI-Components of the library `artwork-feature`.
Run `nx run shared-ui-common:storybook` to see the common UI-Components of the library `shared-ui-common`.
Run `nx clear-cache` if you notice that storybook does not reflect the library changes an says it cannot resolve a library.

### @ngrx/data
Used for management of data fetched from network, e.g. via http. The data is fetched once and every component needing that data accesses it independently using the appropriate service.

## TODOs
### Storybook
1. Storybook: limit the canvas size to avoid every component to take the whole screen.

4. Figure out how to proxy the relative image paths in storybook. The proxy configuration for default app is not applied to storybook automatically. Probably you need to extend the webpack configuration of storybook, see https://storybook.js.org/docs/react/configure/webpack.

    Possible solution:
    
    1. Use the assets library path like this: `/assets/images/:domain/:lib/:img`, e.g. `assets/images/artwork/api/0f1cc0e0-e42e-be16-3f71-2022da38cb93.jpg`.
    2. Use the middleware according to https://webpack.js.org/configuration/dev-server/#devserveronbeforesetupmiddleware. This or similar could work:
    ```javascript
    devServer: {
      onBeforeSetupMiddleware: function (devServer) {
        if (!devServer) {
          throw new Error('webpack-dev-server is not defined');
        }

        const rootDir = path.join(__dirname);
        const domain = req.params.domain;
        const lib = req.params.lib;

      devServer.app.get('/assets/images/:domain/:lib/:img', function (req, res) {
        res.sendFile(`${req.url}`, {
          root: `${rootDir}/../libs/${domain}/${lib}/src/assets/images/${img}`
        });
      });
      },
    },
    ```

### Deprecations
Bump up RxJs and import everything from `rxjs` instead of `rxjs/operators`.
### Dedup
1. Use the local backend data for storybook like this `import { data } from 'libs/artwork/api/src/assets/artworks.json';` instead of copy-paste.

### Testing
1. Add E2E (e.g. Cypress) tests using cypress which tests the app in productive mode or in the one similar to productive.
2. Figure out how to test filtering of images in jest. Or do it with E2E (e.g. Cypress) instead.
3. Figure out why http error is shown when mocking the `get` method of `HttpClient` like this:
```typescript
  const returnArtworksLoadError = () =>
    jest.spyOn(httpClient, 'get').mockReturnValue(
      throwError(new Error('Error!'))
    );
```
But not when mocking the http-request like this:
```typescript
    httpMock.expectOne((req: HttpRequest<unknown>): boolean => {
      return req.url.includes('api/artworks');
    }).flush('Error', {status: 500, statusText: 'Artworks load error!'});    
```
Alternatively use E2E (e.g. Cypress) for this.

4. Figure out how to merge code coverage or how to show code coverage over multiple libraries.
These links might be helpful:

https://duckduckgo.com/?q=nx+merge+code+coverage&t=ffab&ia=web

https://dev.to/penx/combining-storybook-cypress-and-jest-code-coverage-4pa5

https://dev.to/rupeshtiwari/merge-and-publish-code-coverage-for-nx-workspace-in-azure-ci-pipeline-1pk5

https://yonatankra.com/how-to-create-a-workspace-coverage-report-in-nrwl-nx-monorepo/

### App
1. Grid view now uses async pipe. Use it in the details component also.

# Jurisin (docs generated by Nx)

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

???? **Smart, Extensible Build Framework**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@jurisin/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.






## ??? Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx???s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

# LICENSE
See the license file.
# DISCLAIMER

THE DISCLAIMER IN THE LICENCE FILE IS FULLY APPLIED WITHOUT ANY EXCEPTION TO ANY DOCUMENTATION AND TO ANY INSTRUCTION IN THIS REPOSITORY IN EXACTLY THE SAME WAY AS TO
THE SOFTWARE. ESPECIALLY TO THE INSTRUCTIONS OF ANY README.
