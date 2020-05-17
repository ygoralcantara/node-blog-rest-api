import * as express from 'express';
import * as bodyParser from 'body-parser';

import { cors, errorHandler } from '@middleware';
import { connectMongo, router } from '@config';

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

// Error Handler Middleware
app.use(errorHandler);

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: 'Hello World' });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
