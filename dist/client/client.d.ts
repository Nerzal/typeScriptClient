export declare namespace Client {
    class Client implements IClient {
        private url;
        constructor(url: string);
        Ping(): Promise<any>;
    }
    interface IClient {
        Ping(): any;
    }
}
