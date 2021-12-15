import { createServer } from "node:http";
import { resolve } from "node:path";
import { spawn } from "node:child_process";

const port = process.env.PORT || 8080;

createServer().listen( port ).on( "listening", () => {
    console.log( "listening on", port );
} );

if ( process.env.NODE_ENV !== "production" ) {
    let client = spawn(
        "npm", [ "run", "watch" ],
        { cwd: resolve( __dirname, ".." ) }
    );

    client.stdout.on( 'data', ( data ) => {
        console.log( `parcel: ${data}` );
    } );

    client.stderr.on( 'data', ( data ) => {
        console.error( `parcel error: ${data}` );
    } );

    client.on( 'close', ( code ) => {
        console.log( `parcel exited with code ${code}` );
    } );
}