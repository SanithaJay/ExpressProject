const express = require( "express" );
const router = express.Router();
const path = require( 'path' );
const fs = require( "fs" );


router.get( "/", ( req, res, next ) =>
{
    console.log( "From login page" )
    res.sendFile( path.join( __dirname, "..", "views", "chat.html" ) )

} )


router.post( "/", ( req, res, next ) =>
{
    console.log( "from chat page:", req.body )

    console.log( "uname:", req.body.username );
    console.log( "message:", req.body.message );
    const fileData = req.body.username + ':' + req.body.message + '\n';
    fs.appendFile( "chat.txt", fileData, ( err ) =>
    {
        if ( err )
        {
            console.log( "error in writing async file" );
        }
        else
        {
            fs.readFile( 'chat.txt', ( err, data ) =>
            {
                if ( err ) throw err;
                console.log( data.toString() );
                res.sendFile( path.join( __dirname, "..", "views", "chat.html" ) )
            } );
        }
    } )


} )



module.exports = router;