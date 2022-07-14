import express from 'express';
import endpoint1Routes from './routes/endpoint1Routes.js';
import endpoint2Routes from './routes/endpoint2Routes.js';
const app = express();


//routing 
app.use('/', endpoint1Routes);
app.use('/api', endpoint2Routes);




//Definir y arrancar el servidor

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto:${port}`);
})