"use strict";
/// <reference path="../../src/client/client.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../../src/client/client");
var assert = require('assert');
describe('Client', function () {
    describe('Ping', function () {
        it('should return pong', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let client = new client_1.Client.Client('https://app.dev.finux.ai');
                let result = yield client.Ping();
                console.log(result);
            });
        });
    });
});
