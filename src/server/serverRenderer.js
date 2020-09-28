import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../Routes';
import { ServerStyleSheet } from 'styled-components'

export default (req, store) => {
    const sheet = new ServerStyleSheet();
    const body = renderToString(
        sheet.collectStyles(
            <Provider store={store}>
                <StaticRouter location={req.path} context={{}}>
                    <div>
                        {renderRoutes(Routes)}
                    </div>
                </StaticRouter>
            </Provider>
        )
    );

    const helmet = Helmet.renderStatic();
    const styles = sheet.getStyleTags();
    const title = 'SpaceX Launch Programs';

    return `
        <!DOCTYPE html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css"
                />
                <title>${title}</title>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${styles}
            </head>
            <body>
                <div id="root">${body}</div>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script async src="bundle.js"></script>
            </body>
        </html>
    `;
};