import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: 'd1f0b7dc-7ccb-4b4e-a34e-f31c66e1877c',
    clientToken: 'pub0e8b3847b9df04ecc2dab5414dc59a58',
    site: 'datadoghq.com',
    service:'dogs-frontend',
    env:'development',
    version: '0.0.1',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input',
    allowedTracingUrls: [
        {
            match: "http://localhost:8081",
            propagatorTypes: ["tracecontext"],
        },
    ],
    beforeSend: (event, context) => {
        if (event.type === 'resource' && event.resource.type === 'fetch') {
            console.log(context);
        }
    },
});
    
datadogRum.startSessionReplayRecording();