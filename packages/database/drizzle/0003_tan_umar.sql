CREATE TABLE "comments" (
	"id" uuid PRIMARY KEY NOT NULL,
	"task_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"parent_comment_id" uuid,
	"content" text NOT NULL,
	"attachments" jsonb,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "features" (
	"id" uuid PRIMARY KEY NOT NULL,
	"feature_slug" varchar NOT NULL,
	"feature_name" varchar NOT NULL,
	CONSTRAINT "features_feature_slug_unique" UNIQUE("feature_slug")
);
--> statement-breakpoint
CREATE TABLE "milestone_tasks" (
	"milestone_id" uuid NOT NULL,
	"task_id" uuid NOT NULL,
	CONSTRAINT "milestone_tasks_milestone_id_task_id_pk" PRIMARY KEY("milestone_id","task_id")
);
--> statement-breakpoint
CREATE TABLE "milestones" (
	"id" uuid PRIMARY KEY NOT NULL,
	"project_id" uuid NOT NULL,
	"title" varchar NOT NULL,
	"description" text,
	"start_date" timestamp,
	"end_date" timestamp,
	"status" varchar DEFAULT 'pending',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "permissions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"permission_slug" varchar NOT NULL,
	"permission_title" varchar NOT NULL,
	CONSTRAINT "permissions_permission_slug_unique" UNIQUE("permission_slug")
);
--> statement-breakpoint
CREATE TABLE "project_defined_roles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"project_id" uuid NOT NULL,
	"role_name" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "project_roles" (
	"project_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"role_id" uuid NOT NULL,
	CONSTRAINT "project_roles_project_id_user_id_role_id_pk" PRIMARY KEY("project_id","user_id","role_id")
);
--> statement-breakpoint
CREATE TABLE "role_feature_permissions" (
	"role_id" uuid NOT NULL,
	"feature_id" uuid NOT NULL,
	"permission_id" uuid NOT NULL,
	CONSTRAINT "role_feature_permissions_role_id_feature_id_permission_id_pk" PRIMARY KEY("role_id","feature_id","permission_id")
);
--> statement-breakpoint
CREATE TABLE "server" (
	"id" uuid PRIMARY KEY NOT NULL,
	"owner_id" varchar NOT NULL,
	"server_logo" varchar,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "task_assignees" (
	"task_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	CONSTRAINT "task_assignees_task_id_user_id_pk" PRIMARY KEY("task_id","user_id")
);
--> statement-breakpoint
CREATE TABLE "tasks" (
	"id" uuid PRIMARY KEY NOT NULL,
	"project_id" uuid NOT NULL,
	"title" varchar NOT NULL,
	"description" text,
	"creator_id" uuid NOT NULL,
	"status" varchar DEFAULT 'TODO' NOT NULL,
	"priority" varchar DEFAULT 'MEDIUM' NOT NULL,
	"due_date" timestamp,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_task_id_tasks_id_fk" FOREIGN KEY ("task_id") REFERENCES "public"."tasks"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_parent_comment_id_comments_id_fk" FOREIGN KEY ("parent_comment_id") REFERENCES "public"."comments"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "milestone_tasks" ADD CONSTRAINT "milestone_tasks_milestone_id_milestones_id_fk" FOREIGN KEY ("milestone_id") REFERENCES "public"."milestones"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "milestone_tasks" ADD CONSTRAINT "milestone_tasks_task_id_tasks_id_fk" FOREIGN KEY ("task_id") REFERENCES "public"."tasks"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "milestones" ADD CONSTRAINT "milestones_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_defined_roles" ADD CONSTRAINT "project_defined_roles_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_roles" ADD CONSTRAINT "project_roles_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_roles" ADD CONSTRAINT "project_roles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_roles" ADD CONSTRAINT "project_roles_role_id_project_defined_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."project_defined_roles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "role_feature_permissions" ADD CONSTRAINT "role_feature_permissions_role_id_project_defined_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."project_defined_roles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "role_feature_permissions" ADD CONSTRAINT "role_feature_permissions_feature_id_features_id_fk" FOREIGN KEY ("feature_id") REFERENCES "public"."features"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "role_feature_permissions" ADD CONSTRAINT "role_feature_permissions_permission_id_permissions_id_fk" FOREIGN KEY ("permission_id") REFERENCES "public"."permissions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "task_assignees" ADD CONSTRAINT "task_assignees_task_id_tasks_id_fk" FOREIGN KEY ("task_id") REFERENCES "public"."tasks"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "task_assignees" ADD CONSTRAINT "task_assignees_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;