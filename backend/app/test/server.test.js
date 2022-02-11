const createServer = require('../src/server.js');
const request = require('supertest');
const { describe, expect, test} = require('@jest/globals');
const DatabaseClient = require('../src/database/DatabaseClient');

const app = createServer();

describe("Testing Endpoints", () => {


    // TEST 1
    test("GET '/'", done => {
        
        request(app)
            .get('/')
            .expect(200)
            .expect( response => {
                expect(response.body.success).toBe(true);
            })
            .end( () => {
                done();
            })
    })

})