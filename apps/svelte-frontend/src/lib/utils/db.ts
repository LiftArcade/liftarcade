import { drizzleClient } from '@liftarcade/services-database';
import { DATABASE_URL } from '$env/static/private';

/**
 * This is probably not what you wanted. instead, use the event.locals.db
 * This is the database client that is used by the server to handle requests.
 * @description Don't use this directly unless you are adding it to the server handle.
 *
 */
export const dbForServerHandle = drizzleClient(DATABASE_URL);
