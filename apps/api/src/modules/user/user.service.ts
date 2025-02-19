import type { DbUser } from "@/db/models/user.model";
import { UserDal } from "@/db/dal/user.dal";

export default class UserService {
    public async me(userId: string): Promise<DbUser | null> {
        const user = await UserDal.getUserByDiscordId(userId);
        return user;
    }
}
