import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

// Deriving __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '../jobs.json'));  // Correct path to jobs.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);

// Vercel functions need to export the handler
export default server;
