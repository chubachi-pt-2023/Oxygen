CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`saasId` text NOT NULL,
	`userCustomId` text,
	`displayName` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_userCustomId_unique` ON `users` (`userCustomId`);