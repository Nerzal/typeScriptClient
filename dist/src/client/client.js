"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const WebRequest = require("request-promise-native");
var Client;
(function (Client_1) {
    class Client {
        constructor(url) {
            this.url = url;
        }
        Ping() {
            return __awaiter(this, void 0, void 0, function* () {
                var result = yield WebRequest.get('http://www.google.com/');
                console.log(result.content);
                return result.content;
            });
        }
    }
    Client_1.Client = Client;
})(Client = exports.Client || (exports.Client = {}));
