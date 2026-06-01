/**
 * server.js — Express HTTP server entry point.
 *
 * A minimal Node.js tutorial server built on the Express web framework. It
 * exposes two GET endpoints that each return a fixed, static text response:
 *
 *   GET /              -> "Hello world"   (the original, preserved endpoint)
 *   GET /good-evening  -> "Good evening"  (the newly added endpoint)
 *
 * Design notes:
 *   - CommonJS module format is used deliberately (require/module semantics).
 *     package.json intentionally omits "type": "module", so Node treats this
 *     `.js` file as CommonJS and `require('express')` resolves correctly.
 *   - Both responses are static string literals. No request data (query string,
 *     route params, body, or headers) is ever read or reflected back to the
 *     client, so the handlers present no injection, reflected-XSS, or
 *     open-redirect surface.
 *   - The server is kept intentionally small: two routes and a single listener.
 *     No middleware, routers, template engines, or static file serving are
 *     configured, in keeping with the project's minimal-footprint goal.
 */

'use strict';

// Load the Express web framework (declared as a dependency in package.json and
// installed into node_modules/ via `npm install`).
const express = require('express');

// Create the Express application instance. This object registers routes and,
// when handed to `listen`, becomes the running HTTP server.
const app = express();

// The TCP port the HTTP server binds to. Kept as a simple literal to match the
// tutorial's documented run instructions (http://localhost:3000).
const PORT = 3000;

/**
 * Preserved endpoint.
 *
 * GET / responds with the exact text "Hello world". `res.send` writes the
 * string body and finalizes the response; for a String argument it sets the
 * Content-Type to text/html and does not append any trailing newline, so the
 * body is byte-for-byte "Hello world".
 */
app.get('/', (req, res) => res.send('Hello world'));

/**
 * New endpoint.
 *
 * GET /good-evening responds with the exact text "Good evening". As above, the
 * response body is exactly the provided literal with no added characters.
 */
app.get('/good-evening', (req, res) => res.send('Good evening'));

// Start the HTTP server and log a startup message once it is accepting
// connections. This is the process's long-running entry point.
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
