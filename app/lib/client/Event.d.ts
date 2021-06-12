import { Client } from "./Client";
declare class Event {
    client: Client;
    name: string;
    isDisabled?: boolean | false;
    constructor(client: Client, eventOptions: EventOptions);
    run(...params: any): void;
}
interface EventOptions {
    name: string;
    isDisabled?: boolean | false;
}
export { Event };
