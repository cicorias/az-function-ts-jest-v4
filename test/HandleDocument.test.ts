// import { describe, expect, test, beforeEach } from "@jest/globals";
import { InvocationContext, HttpRequest } from "@azure/functions";
import { StatusCodes } from 'http-status-codes';
// import { HandleDocument } from "./HandleDocument";
import { HandleDocument } from '../src/functions/HandleDocument';

describe("Handle Document", () => {
    test('simple send', async () => {
        const context = new InvocationContext({ functionName: 'HandleDocument' });
        const request = new HttpRequest({
            url: 'http://localhost/api/HandleDocument',
            method: 'POST'
        });

        const expected = StatusCodes.OK;

        let result = await HandleDocument(request, context);

        expect(result.status).toStrictEqual(expected);

    });
});