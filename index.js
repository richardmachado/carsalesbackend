const server = require('./server.js');
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => { console.log(`\n=== Server listening on port ${PORT} ===\n`); });