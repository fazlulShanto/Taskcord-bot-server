ALTER TABLE "server" ADD COLUMN "is_bot_in_server" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "server" ADD COLUMN "last_updated_at" timestamp DEFAULT now();