---
title: Migrations
---

## Running Migrations

You can run migrations by launching the server. The server will automatically
run all the migrations once launched.

You can also run migrations using the `sea-orm-cli` command line tool.

```bash
# data.sqlite is the default data store the server uses.
# ?mode=rwc is required, otherwise sea-orm-cli won't create the database file.
DATABASE_URL='sqlite://data.sqlite?mode=rwc' sea-orm-cli migrate up
```

If you are working on a new migration and you need to revert it, you will need
to run the CLI tool to migrate down.

```bash
DATABASE_URL='sqlite://data.sqlite?mode=rwc' sea-orm-cli migrate down
```

## Adding a Migration

You should never modify an existing migration! Only add a new migration.
To add a new migration, use the `sea-orm-cli` tool.

```bash
# Make sure to run this at the root of the project, where you see the `Readme.md` and `LICENSE.txt`
sea-orm-cli migrate generate my_new_migration
```

The migration file will be created under `migration/src/` with some example code
in it. Erase the example code and write your migration.

## Generating Entities

Entity files are generated from the database. If you add a new migration, you
will need to first run the migration then generate entities.

```bash
# Make sure to run these at the root of the project, where you see the `Readme.md` and `LICENSE.txt`
export DATABASE_URL='sqlite://data.sqlite?mode=rwc'
sea-orm-cli migrate up
sea-orm-cli sea-orm-cli generate entity -o backend/src/entity/
```
