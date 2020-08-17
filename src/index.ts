import express from 'express';
import { log } from '@sequel/core';
import { rootHandler } from './handlers';

const app = express();
const port = process.env.PORT || '8000';

app.get('/{name}', rootHandler);

app.listen(port, (err) => {
	if (err) return log(err);
	return log(`Server is listening on ${port}`);
});
