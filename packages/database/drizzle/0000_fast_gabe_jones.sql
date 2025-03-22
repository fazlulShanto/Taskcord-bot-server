CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"discord_id" varchar NOT NULL,
	"full_name" varchar,
	"nick_name" varchar DEFAULT '',
	"avatar" varchar,
	"email" varchar DEFAULT '',
	"discord_refresh_token" varchar,
	"discord_access_token" varchar,
	"discord_access_token_expires_at" timestamp,
	"last_auth" timestamp DEFAULT now(),
	"is_verified" boolean DEFAULT false,
	"updated_at" timestamp DEFAULT now(),
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "users_discord_id_unique" UNIQUE("discord_id")
);
