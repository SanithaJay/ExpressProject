
const express = require( "express" );
const app = express();
const bodyParse = require( "body-parser" );


const loginRoutes = require( "./router/login.router")
const chatRoutes = require( "./router/chat.router" )

app.use( bodyParse.urlencoded( { extended: true } ) );

app.use( loginRoutes );
app.use( chatRoutes );




app.use( ( req, res, next ) =>
{

    res.send( "<h1>Page Not Found 404</h1>" )

} )
app.listen( 3001 )