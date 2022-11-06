declare class Logger {
    static OUTPUT_MODE: string;
    static CHALK: Record<string, ((v: string) => string)>;
    static from(context?: string, method?: string): Logger;
    private readonly _context;
    private readonly _method;
    constructor(context?: string, method?: string);
    setMethod(method: string): Logger;
    log(logline: string): void;
}
export default Logger;
