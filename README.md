# Space X Programs
It is fully server side rendered app listing the space mission programs from an external API.

The approach is to have a redux store created in the server side and shipping it with the data to the client side. Client side store will get initiated with this server state and hydrate method is used for rendering the react components at the client side.

- The implementation is scalable to add any routes for the server side rendering.
- Implemented `react-helmet` for better SEO
- Javascript serialization used for preventing XSS attacks
- Used `styled components` for styling


## Tech stack

- React
- Redux
- NodeJS
- ExpressJS
- Webpack
- Babel
- Styled Components
