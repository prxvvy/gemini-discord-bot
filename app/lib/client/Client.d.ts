import Eris from "eris";
import { Command } from "./Command";
import { Event } from "./Event";
import { Logger } from "./Logger";
import { Utils } from "./Utils";
declare class Client extends Eris.Client {
    commands: Command[];
    events: Event[];
    commandsPath: string;
    eventsPath: string;
    logger: typeof Logger;
    utils: Utils;
    ownerID?: string | string[];
    constructor(clientOptions: ClientOptions);
    private loadAll;
    isOwner(user: Eris.User | Eris.Member | Eris.Message<Eris.GuildChannel>): boolean;
    getCommandByName(command_name: string | any): Command;
    getCommandByAlias(command_alias: string | any): Command;
}
interface ClientOptions {
    token: string;
    commandsPath: string;
    eventsPath: string;
    ownerID?: string | string[];
    client_options?: Eris.ClientOptions;
}
export { Client };
