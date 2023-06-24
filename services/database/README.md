// This is the schema declaration / migrations manager for the database.

## How to use

### Client
```js
import { DrizzlePostgresClient } from 'services/database/src/client';

const db = new DrizzlePostgresClient({ databaseString: _YOUR DATABASE STRING_ });

db.queryClient.query('SELECT * FROM users WHERE id = $1', [1]);
```

### Server

This is mostly using drizzleKit to keep and maintain the database schema.

_Note this currently does not support push:postgres_

Tracking issue: https://orm.drizzle.team/kit-docs/commands#prototype--push

currently you can use the following commands:

```bash
# Create a new migration
# introspect the db
pnpm run db:pull

# Make changes to the schema

# Create a new migration 
pnpm run db:migrate

# Run the migrations - Update the Neon database with the new schema
pnpm run db:push
```

