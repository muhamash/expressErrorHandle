const express = require( 'express' );
const app = express();
const fs = require( 'fs' );
const port = process.env.PORT || 5000;

// app.get( '/', ( req, res ) =>
// {
//     // res.send( 'Hello Express.js!' );
//     // res.send(a)
//     for ( let i = 0; i < 10; i++ )
//     {
//         if(i === 9)
//         {
//            next( new Error( 'This is an error! get route --> for loop' ) );
//         }
//         else
//         {
//             res.write('Hello Express.js! ' + i + '\n');
//         }
//     }

//     res.end();
// } );

// // app.get( '/api', ( req, res ) =>
// // {
// //     // throw new Error( 'This is an error!' );
// //     // res.send(a)
// // })
// app.use( ( req, res, next ) =>
// {
//     // console.log( 'Middleware 1' );
//     // next();
//     // throw new Error( 'This is an error!' );
//     // next( new Error( 'This is an error!' ) );
//     // res.status(404).send( '404 URL Not Found' );
//     next( 'bhai error hoise' );
// } );

// app.use( ( error, req, res, next ) =>
// {
//     // console.log( error );
//     // res.status( 500 ).send( 'bhai error hoise' );
//     if ( res.headersSent )
//     {
//         next( 'problem in headers' );
//     } else
//     {
//         if ( error && error.message )
//         {
//             res.send( error.message );
//         }
//         else
//         {
//             res.send( 'bhai error hoise' );
//         }
//     }
// } );


// app.get( '/', ( req, res, next ) =>
// {
//     fs.readFileSync( './index.html', ( error, data ) =>
//     {
//         if ( error )
//         {
//             next( error );
//         }
//         else
//         {
//             res.send( data );
//         }
//     })
//     // setTimeout( () =>
//     // {
//     //     try
//     //     {
//     //         res.send( e );
//     //     } catch ( error )
//     //     {
//     //         next( error );
//     //     }
//     // }, 100 );
// } );

app.get( '/', [
    ( req, res, next ) =>
    {
        fs.readFileSync( './index.html', ( error, data ) =>
        {
            console.log( data )
            next();
        } );
    },
    ( req, res, next ) =>
    {
        console.log( data.property )
        // next();
    },
] );

app.use( ( error, req, res, next ) =>
{
    // console.log( error );
    // res.status( 500 ).send( 'bhai error hoise' );
    if ( res.headersSent )
    {
        next( 'problem in headers' );
    } else
    {
        if ( error && error.message )
        {
            res.status(500).send( error.message );
        }
        else
        {
            res.send( 'bhai error hoise' );
        }
    }
} );

app.listen(port, () => `Server running on port ${port} 🔥`);