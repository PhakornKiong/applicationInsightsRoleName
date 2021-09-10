let appInsights = require('applicationinsights');
const express = require('express');
const app = express();

appInsights
  .setup('_your_ikey_')
  .setAutoDependencyCorrelation(true)
  .setAutoCollectRequests(true)
  .setAutoCollectPerformance(true, true)
  .setInternalLogging(true, true)
  .setSendLiveMetrics(true)
  .start();

const clientAppInsight = appInsights.defaultClient;
// Set cloudRole & couldRoleInstance
clientAppInsight.context.tags[clientAppInsight.context.keys.cloudRole] =
  'someRandomRole';
clientAppInsight.context.tags[clientAppInsight.context.keys.cloudRoleInstance] =
  'someRandomeInstanceName';

const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
