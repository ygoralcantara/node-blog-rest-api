import * as express from 'express';
import * as bodyParser from 'body-parser';

import connectMongo from './config/mongoConnect';
import cors from './middlewares/cors.middleware';
import router from './config/routes';

const { PORT } = process.env;

// Application
const app: express.Application = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors);

// Connect Mongo Database
connectMongo();

// Routes
app.use('/api', router);

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: 'Hello World' });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
