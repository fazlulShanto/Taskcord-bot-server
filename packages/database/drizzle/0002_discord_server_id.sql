ALTER TABLE "projects" ALTER COLUMN "description" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "status" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "logo" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "discord_server_id" varchar NOT NULL;