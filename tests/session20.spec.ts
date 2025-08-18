/*Activity:
Should run it to your favorite web app as a practice
Step 1 - Sync yung Forked Repository
Step 2 - Git Pull sa working directory
Step 3 - Run the test - npx playwright test performance.spec.ts --project chromium
Step 4 - Open the Report - Screenshot it and send to #daily-updates-test-automation
*/

import { test } from '@playwright/test';
import { runLighthouseWithCustomConfig } from '../shared/lighthouse-helper';
import fs from 'fs';

test('Custom Lighthouse audit from config', async ({}, testInfo) => {
  const url = 'https://www.saucedemo.com/';
  const result = await runLighthouseWithCustomConfig(url);


  const reportPath = 'lighthouse-report/custom-lighthouse-report.html';
  if (fs.existsSync(reportPath)) {
    const reportContent = fs.readFileSync(reportPath);
    await testInfo.attach('Lighthouse Report', {
      body: reportContent,
      contentType: 'text/html',
    });
  }

  if (result?.categories) {
    const summary = Object.entries(result.categories)
      .map(([cat, val]) => `${cat}: ${val.score}`)
      .join('\n');
    await testInfo.attach('Lighthouse Score Summary', {
      body: Buffer.from(summary),
      contentType: 'text/plain',
    });
  }
});