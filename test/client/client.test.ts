import { Client } from '../../src/client/client';
/// <reference path="../../src/client/client.ts" />

var assert = require('assert');

describe('Client', function() {
  describe('Ping', function() {
    it('should return pong', async function() {
        var Client = require("../../src/client/client");
        
        let client = new Client.Client('https://app.dev.finux.ai');
        let result = await client.Ping()
        console.log(result)
    });
  });
});
