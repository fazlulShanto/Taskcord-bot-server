CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"description" text,
	"creator_id" uuid NOT NULL,
	"manager_id" varchar NOT NULL,
	"status" varchar,
	"created_at" timestamp DEFAULT now(),
	"logo" varchar,
	"starting_timestamp" timestamp,
	"estimated_completion_timestamp" timestamp,
	"completed_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_creator_id_users_id_fk" FOREIGN KEY ("creator_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;