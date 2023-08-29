import { app, HttpRequest, HttpResponseInit, InvocationContext, output } from "@azure/functions";

const blobOutput = output.storageBlob({
    connection: 'storage_APPSETTING',
    path: 'helloworld/tbd-copy.png',
});

const blobOutputJson = output.storageBlob({
    connection: 'storage_APPSETTING',
    path: 'helloworld/tbd-copy.json',
});

const queueOutput = output.storageQueue({
    connection: 'storage_APPSETTING',
    queueName: 'helloworld',
});


export async function HandleDocument(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const formdata = await request.formData();
    const formItems : Record<string, string> = {};

    for (const [key, value] of formdata.entries()) {
        if (typeof value === "object") {
            context.log(key, value.name, value.type);
            const buffer = await value.arrayBuffer();
            context.extraOutputs.set(blobOutput, buffer);
            
        } else if (typeof value === "string") {
            context.log(key, value);
            formItems[key] = value;
        }
        else {
            context.warn("unknown type", key, value);
        }
    }

    context.extraOutputs.set(blobOutputJson, JSON.stringify(formItems));
    context.extraOutputs.set(queueOutput, JSON.stringify(formItems));

    return { body: `Hello!`, status: 200 };
}


app.http('HandleDocument', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: HandleDocument,
    extraOutputs: [blobOutput, blobOutputJson, queueOutput]
});
