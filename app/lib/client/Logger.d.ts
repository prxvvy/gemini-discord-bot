declare class Logger {
    static log(content: string | any, type: string): void;
    static warn(content: string | any): void;
    static error(content: string | any): void;
    static success(content: string | any): void;
    static cmd(content: string | any): void;
}
export { Logger };
