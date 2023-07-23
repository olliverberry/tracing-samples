import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: `${process.env.REACT_APP_APP_ID}`,
    clientToken: `${process.env.REACT_APP_CLIENT_TOKEN}`,
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
            match: `${process.env.REACT_APP_API_BASE_URL}`,
            propagatorTypes: ["tracecontext"],
        },
    ],
});

datadogRum.startSessionReplayRecording();