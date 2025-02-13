import { drizzle } from 'drizzle-orm/libsql/node';
import * as schema from "./schema/index";

const db = drizzle({
  connection: {
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN
  },
  schema,
});


export { db }