import { type DbUser, type DbNewUser } from "../models/user.model";
export declare class UserDal {
    /**
     * Creates a new user in the database
     */
    static createUser(input: DbNewUser): Promise<DbUser>;
    /**
     * Retrieves a user by their Discord ID
     * Returns null if user is not found
     */
    static getUserByDiscordId(discordId: string): Promise<DbUser | null>;
    /**
     * Updates an existing user's information
     */
    static updateUserByDiscordId(discordId: string, data: Partial<DbNewUser>): Promise<DbUser>;
}
//# sourceMappingURL=user.dal.d.ts.map