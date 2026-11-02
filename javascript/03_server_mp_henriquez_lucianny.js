import { createServer } from 'node:http';

const server = createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Bienvenido a Estacionamiento Digital\n');
    }
    else if (req.url === '/contacto') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Contacto - Estacionamiento Digital</h1><p>Escríbenos a estacionamiento@example.com</p>');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 Página no encontrada</h1>');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor de Estacionamiento Digital disponible en 127.0.0.1:3000');
});