import * as WebRequest from 'request-promise-native';

export namespace Client {

    export class Client implements IClient{
        private url: string;

        constructor(url: string)  {
            this.url = url;
        }

        async Ping(){
            var result = await WebRequest.get('http://www.google.com/');
            console.log(result.content);
            return result.content
        }
    
    }

    interface IClient {
        Ping();
    }
}