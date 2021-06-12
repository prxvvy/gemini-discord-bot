import type { Message } from "eris";
import type { Client } from "./Client";
declare class Command {
    client: Client;
    name: string;
    autoAliases?: boolean;
    description: string;
    aliases?: string[];
    format?: string;
    details?: string;
    examples?: string[];
    ownerOnly?: boolean;
    clientPermissions?: string[];
    userPermissions?: string[];
    nsfw?: boolean;
    isDisabled?: boolean | false;
    hidden?: boolean;
    supportServerOnly?: boolean;
    guildOwnerOnly?: boolean;
    constructor(client: Client, commandOptions: CommandOptions);
    run(message: Message, args?: string[], ...params: any): void;
    static validateInfo(client: Client, commandOptions: CommandOptions): void;
}
interface CommandOptions {
    name: string;
    autoAliases?: boolean;
    aliases?: Array<string>;
    description: string;
    format?: string;
    details?: string;
    examples?: string[];
    ownerOnly?: boolean;
    clientPermissions?: string[];
    userPermissions?: string[];
    nsfw?: boolean;
    isDisabled?: boolean | false;
    hidden?: boolean;
    supportServerOnly?: boolean;
    guildOwnerOnly?: boolean;
}
export { Command };
