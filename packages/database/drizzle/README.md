# Database Migrations

This directory contains all database migrations for the Taskcord application.

## How to Use Migrations

1. **Generate Migrations**
   ```bash
   pnpm generate
   ```
   This will generate migration files based on the changes in your schema files.

2. **Apply Migrations**
   ```bash
   pnpm migrate
   ```
   This will apply all pending migrations to your database.

3. **View Database in Studio**
   ```bash
   pnpm studio
   ```
   This will open Drizzle Studio, a GUI tool to view and manage your database.

## Migration Files

Migration files are automatically generated in this directory when you run `pnpm generate`. Each migration file follows the naming pattern:
`YYYYMMDDHHMMSS_migration_name.sql`

## Best Practices

1. Always review generated migrations before applying them
2. Keep migrations in version control
3. Never modify existing migration files
4. Create new migrations for schema changes instead of modifying existing ones 