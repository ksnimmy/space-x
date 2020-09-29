# Space X Programs
It is fully server side rendered app listing the space mission programs from an external API.

The approach is to have a redux store created in the server side and shipping it with the data to the client side. Client side store will get initiated with this server state and hydrate method is used for rendering the react components at the client side.

If the filters are existed in the browser url, that would also be stored in the redux store and sent to client side to initiate the client side store. So that the initial rendering of the application will take place with filtered data. This would also avoid rerendering of components with filters. These filtere buttons in the page would show as preselected based on this state.

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

## Light House Report

![Report](https://github.com/ksnimmy/space-x/blob/master/light_house.png)
