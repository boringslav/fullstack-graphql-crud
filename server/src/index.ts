import 'dotenv/config';
import express from 'express';
import cors from 'cors';

(async () => {
	const { PORT } = process.env;
	const app = express();
	app.use(cors());
	app.use(express.json());

	app.listen(PORT, () => {
		console.log('Server listening on port: ', PORT);
	});
})().catch((err) => {
	console.error(err);
});
