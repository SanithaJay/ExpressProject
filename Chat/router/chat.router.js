const express = require( "express" );
const router = express.Router();
const path = require( 'path' );


router.post( "/", ( req, res, next ) =>
    {
        console.log( "chat page:",req.body )
        localStorage.setItem("username", req.body)
        
        res.sendFile( path.join( __dirname, "..", "views", "chat.html" ) )
    } )

module.exports = router;