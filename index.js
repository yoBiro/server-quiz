import express from 'express';
import { userRoutes } from './src/routes/usuario_routes.js';

const app = express();

app.use(express.json());

app.use('/getAllUsers', userRoutes);
app.use('/createUser', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});