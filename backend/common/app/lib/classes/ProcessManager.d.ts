interface ProcessManager {
    create(): Promise<void>;
    destroy(): Promise<void>;
}
export default ProcessManager;
