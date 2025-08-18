/*Activity:
Should run it to your favorite web app as a practice
Step 1 - Sync yung Forked Repository
Step 2 - Git Pull sa working directory
Step 3 - Run the test - npx playwright test performance.spec.ts --project chromium
Step 4 - Open the Report - Screenshot it and send to #daily-updates-test-automation
*/

import { chromium, test } from '@playwright/test';
// import { runLighthouseWithCustomConfig } from '../shared/lighthouse-helper';
//inserted
import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';

export async function runLighthouseWithCustomConfig(
  url: string,
  configPath = 'lighthouse.config.yml'
) {
  const userConfig = loadConfig(configPath);

  // Use Playwright's Chromium path
  const chromePath = chromium.executablePath();

  const chrome = await launch({
    chromePath,
    chromeFlags: ['--headless']
  });

  const options = {
    output: userConfig.output,
    onlyCategories: userConfig.onlyCategories,
    logLevel: userConfig.logLevel,
    port: chrome.port,
  };

  const result = await lighthouse(url, options);

} // <-- Add this closing brace for the function

//inserted

test('Custom Lighthouse audit from config', async () => {
  const url = 'https://www.glucosegoddess.com/';
  await runLighthouseWithCustomConfig(url, 'lighthouse.config.yml');
});
    function loadConfig(configPath: string) {
        // Dummy config for demonstration; replace with actual config loading logic
        return {
            output: 'html',
            onlyCategories: ['performance'],
            logLevel: 'info'
        };
    }

