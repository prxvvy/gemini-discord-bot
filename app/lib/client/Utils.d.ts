import type { Client } from "./Client";
import { Member, Message } from "eris";
import type { User, GuildChannel, Role } from "eris";
declare class Utils {
    client: Client;
    constructor(client: Client);
    resolveID(user: User | Member | Message<GuildChannel>): any;
    boolToString(boolean: boolean): string;
    resolveString(data: string | Array<any>): string;
    userTag(member: Member | User): string;
    selfTag(): string;
    highestRole(member: Member): Role;
}
export { Utils };
