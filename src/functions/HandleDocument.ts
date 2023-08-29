import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function HandleDocument(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!`, status: 200 };
};

app.http('HandleDocument', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: HandleDocument
});
