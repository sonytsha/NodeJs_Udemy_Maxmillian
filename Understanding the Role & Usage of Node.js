Node.js is a JS runtime
You can use it for more than just SDerver-side code
ulility scripts, build tools,.....

  run server : create server and listen to incoming requests
business logic : handle requests, validate input, connect to database
responses : return responses (Rendered HTML, JSON,...)

const fs = require('fs');
fs.writeFileSync('hello.txt','Hello from node.js')
