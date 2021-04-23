const ReactDOMServer = require( 'react-dom/server' );
const { StaticRouter } = require( 'react-router-dom' );
const { App } = require( '../src/app' ); 

module.exports = function(app) {
    app.get('*', (req, res) => {
        ReactDOMServer.renderToString(
            <StaticRouter location={ req.originalUrl }>
                <App />
            </StaticRouter>
        )
    })
  }