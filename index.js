const express = require( 'express' );
const app = express();
const port = process.env.PORT || 5000;

app.get( '/', ( req, res ) =>
{
    // res.send( 'Hello Express.js!' );
    res.send(a)
} );

// app.get( '/api', ( req, res ) =>
// {
//     // throw new Error( 'This is an error!' );
//     // res.send(a)
// })
app.use( ( req, res, next ) =>
{
    // console.log( 'Middleware 1' );
    // next();
    // throw new Error( 'This is an error!' );
    // next( new Error( 'This is an error!' ) );
    res.status(404).send( '404 URL Not Found' );
} );

app.use( ( error, req, res, next ) =>
{
    // console.log( error );
    // res.status( 500 ).send( 'bhai error hoise' );
    if ( error && error.message )
    {
        res.send( error.message );
    }
    else
    {
        res.send( 'bhai error hoise' );
    }
} );

app.listen(port, () => `Server running on port ${port} 🔥`);