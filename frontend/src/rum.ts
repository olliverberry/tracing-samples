import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: `${process.env.REACT_APP_APP_ID}`,
  clientToken: `${process.env.REACT_APP_CLIENT_TOKEN}`,
  site: 'datadoghq.com',
  service:'other-app',
  env:'development',
  version: '0.0.1',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel:'mask-user-input',
  trackSessionAcrossSubdomains: true,
});

datadogRum.startSessionReplayRecording();