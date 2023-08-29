import { app, InvocationContext, Timer } from "@azure/functions";

export async function DailyCleanup(myTimer: Timer, context: InvocationContext): Promise<void> {
    context.log('Timer function processed request.');
}

app.timer('DailyCleanup', {
    schedule: '0 */5 * * * *',
    handler: DailyCleanup
});
