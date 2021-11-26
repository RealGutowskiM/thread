import { createServer } from "node:http";

createServer().listen( "8080" ).on( "listening", () => {
    console.log( "listening on port 8080" );
} );