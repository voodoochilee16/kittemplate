import {
	ENABLE_DRIZZLE_LOGGER,
	MYSQL_DB_HOST,
	MYSQL_DB_NAME,
	MYSQL_DB_PASSWORD,
	MYSQL_DB_USER
} from '$env/static/private';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { enableLogger } from '../utils';

const connectionPool = mysql.createPool({
	host: MYSQL_DB_HOST,
	user: MYSQL_DB_USER,
	password: MYSQL_DB_PASSWORD,
	database: MYSQL_DB_NAME
});

const drizzleClient = drizzle(connectionPool, {
	logger: enableLogger(ENABLE_DRIZZLE_LOGGER)
});

export { connectionPool, drizzleClient };
