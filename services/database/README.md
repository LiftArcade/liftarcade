# How to use

In early development (destructive actions can happen):

1. Make changes to the schema / data.
2. push the changes and alter the table (potentially destructive step) with `db:push` command.

### Review the database:

`pnpm drizzle-kit studio`

// TODO:

- [ ] Describe production usage

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
