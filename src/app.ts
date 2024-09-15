import express from 'express';
import bodyParser from 'body-parser';
const app = express();

import { errorHandler, notFound } from './middlewares/errorHandler.middleware';
import unitRouter from './unit.routes'


app.use(bodyParser.json());

app.use('/api/units', unitRouter);

app.use(notFound);
app.use(errorHandler)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
