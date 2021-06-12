import Eris from "eris";

declare class Client extends Eris.Client {
    public commands: Client.Command[];
    public events: Client.Event[];
    public commandsPath: string;
    public eventsPath: string;
    public logger: typeof Client.Logger;
    public utils: Client.Utils;
    public ownerID: string | string[];
    constructor(clientOptions: Client.ClientOptions){
        super(clientOptions.token, clientOptions.client_options);
    };
    private loadAll();
    public isOwner(user: Eris.User);
    public getCommandByName(command_name: string | any): Client.Command;
    public getCommandByAlias(command_alias: string | any): Client.Command;
}

declare namespace Client {

    interface ClientOptions {
        token: string;
        commandsPath: string;
        eventsPath: string;
        ownerID: string | string[];
        client_options?: Eris.ClientOptions;
    }

    interface CommandOptions {
        name: string;
        description: string;
    }

    interface EventOptions {
        name: string;
        isDisabled?: boolean | false;
    }

    export class Event {
        public client: Client;
        public name: string;
        public isDisabled?: boolean | false;
        constructor(client: Client, eventOptions: EventOptions);
        public run(...params: any);
    }

    export class Command {
        public client: Client;
        public name: string;
        public description: string;
        constructor(client: Client, commandOptions: CommandOptions);
        public run(message: Eris.Message, args?: string[], ...params: any);
    }

    export class Logger {
        static log(content: string | any, type: string);
        static warn(content: string | any);
        static error(content: string | any);
        static success(content: string | any);
        static cmd(content: string | any);
    }

    export class Utils {
        public client: Client;
        constructor(client: Client);
        public resolveID(user: Eris.User);
    }

    export const handler: Function = (eventsPath: string, commandsPath: string, client: Client) => {};

    export const loadCommands: Function = (path: string, client: Client) => {};

    export const loadEvents: Function = (path: string, client: Client) => {};

}

export = Client;