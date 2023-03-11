import express from 'express';
import indexRoutes from './routes/index.routes';
import imagesRoutes from './routes/images.routes';
import fileUpload from 'express-fileupload';
import config from './config'

const app = express();

app.use(fileUpload({
  tempFileDir: '/temp'
}));
app.use(indexRoutes);
app.use(imagesRoutes);

export default app;