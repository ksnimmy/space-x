# Space X Programs
This is a fully server side rendered app listing the space mission programs from an external API.

The approach is to have a redux store created in the server side and ship to the client side with the data. Client side store will get initiated with this server state and hydrate method is being used for rendering the react components at the client side.

If the filters are already existed in the browser url, that would also be stored in the redux state and pass it to the client side to render. So that the initial rendering of the application will take place with the filtered data. This would also avoid rerendering of components with filters. The filtered state would be preselected on render.

- The implementation is scalable to add any routes for the server side rendering.
- Implemented `react-helmet` for better SEO
- Javascript serialization used for preventing XSS attacks
- Used `styled components` for styling
- Build and packaging using webpack
- ESlint for code quality checks


## Tech stack and tools

- React
- Redux
- NodeJS
- ExpressJS
- Webpack
- Babel
- Styled Components
- ESlint

## Available Scripts

- `npm run dev` : to run the application in development mode
- `npm run build`: to build and create a webpack bundle in production mode
- `npm start`: to start the bundled application created by webpack in production mode
- `npm run build:start`: to build and start the production bundle at once

## Light House Report

![Report](https://github.com/ksnimmy/space-x/blob/master/light_house.png)
