// import { describe, expect, test, beforeEach } from "@jest/globals";
import { InvocationContext, HttpRequest, HttpRequestBodyInit, HttpRequestInit } from "@azure/functions";
import { StatusCodes } from 'http-status-codes';
// import { HandleDocument } from "./HandleDocument";
import { HandleDocument } from '../src/functions/HandleDocument';

describe("Handle Document", () => {
    test('simple send', async () => {
        const context = new InvocationContext({ functionName: 'HandleDocument' });
        const body = '------ThisJustNeedsToMatch\r\nContent-Disposition: form-data; name="name"\r\n\r\nJohn Doe\r\n------ThisJustNeedsToMatch\r\nContent-Disposition: form-data; name="file"; filename="tbd.png"\r\nContent-Type: image/png\r\n\r\n\r\n------ThisJustNeedsToMatch--\r\n';
        const request = new HttpRequest({
            body: { string: body},
            url: 'http://localhost/api/HandleDocument',
            method: 'POST',
            headers: { 'content-type': 'multipart/form-data; boundary=----ThisJustNeedsToMatch' },

        });

        const expected = StatusCodes.OK;

        let result = await HandleDocument(request, context);

        expect(result.status).toStrictEqual(expected);

    });
});