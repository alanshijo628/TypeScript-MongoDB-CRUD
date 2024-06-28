import express from 'express';
import userRoutes from './routes/useRoute';
import helmet from 'helmet';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(helmet());

app.use('/api/users', userRoutes);

export default app;