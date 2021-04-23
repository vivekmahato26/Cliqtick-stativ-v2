// const  functions = require('firebase-functions');

// const express = require( 'express' );
// const fs = require( 'fs' );
// const path = require( 'path' );


// const render = "./render.js"

// // create express application
// const app = express();

// const { App } = require( '../src/app' ); 
// // serve static assets
// app.get( /\.(js|css|map|ico)$/, express.static( path.resolve( __dirname, '../dist' ) ) );

// // for any other requests, send `index.html` as a response
// app.use( '*', ( req, res ) => {

//     // read `index.html` file
//     let indexHTML = fs.readFileSync( path.resolve( __dirname, '../dist/index.html' ), {
//         encoding: 'utf8',
//     } );

//     // get HTML string from the `App` component
//     let appHTML = render(app);

    

//     // populate `#app` element with `appHTML`
//     indexHTML = indexHTML.replace( '<div id="root"></div>', `<div id="root">${ appHTML }</div>` );

//     // set header and status
//     res.contentType( 'text/html' );
//     res.status( 200 );
//     return res.send( indexHTML );
// } );

// // run express server on port 9000

// exports.nextServer = functions.region('asia-south1').https.onRequest(app);