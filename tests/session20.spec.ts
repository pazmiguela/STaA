/*Activity:
Should run it to your favorite web app as a practice
Step 1 - Sync yung Forked Repository
Step 2 - Git Pull sa working directory
Step 3 - Run the test - npx playwright test performance.spec.ts --project chromium
Step 4 - Open the Report - Screenshot it and send to #daily-updates-test-automation
*/

import { test } from '@playwright/test';
import { runLighthouseWithCustomConfig } from '../shared/lighthouse-helper';

test('Custom Lighthouse audit from config', async () => {
  const url = 'https://www.glucosegoddess.com/';
  await runLighthouseWithCustomConfig(url, 'lighthouse.config.yml');
});
