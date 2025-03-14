import { db, checkConnection } from "./postgres.db";
import { initializeValkey } from "./redis";

export { db, checkConnection, initializeValkey };

export default { db, checkConnection, initializeValkey };
