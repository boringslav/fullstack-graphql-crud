import 'dotenv/config';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { schema } from './Schema';

(async () => {
	const { PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
	
	await createConnection({
		type: 'mysql',
		database: DB_NAME,
		username: DB_USER,
		password: DB_PASSWORD,
		logging: true, //shows all queries in terminal
		synchronize: true, // creates all entities in db
		entities: []
	});

	const app = express();
	app.use(cors());
	app.use(express.json());

	app.use('/graphql', graphqlHTTP({
		schema,
		graphiql: true
	}));

	app.listen(PORT, () => {
		console.log('Server listening on port: ', PORT);
	});
})().catch((err) => {
	console.error(err);
});
