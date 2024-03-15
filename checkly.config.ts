import { defineConfig } from "checkly";
import { Frequency } from "checkly/constructs";
import { createEmailAlert } from "./src/_checks_/alert.checks";

export default defineConfig({
  projectName: "Checkly Project Template",
  logicalId: "checkly-project-template",
  checks: {
    activated: true,
    locations: ["us-east-1", "eu-west-1"],
    frequency: Frequency.EVERY_5M,
    checkMatch: "**/*.check.ts", // please take note of the file ext used
    browserChecks: {
      frequency: Frequency.EVERY_5M,
      testMatch: "**/tests/**/*.spec.ts",
      alertChannels: [
        createEmailAlert(
          {
            sendRecovery: false,
            sendFailure: true,
            sendDegraded: false,
          },
          process.env.ALERT_EMAIL ?? ""
        ),
      ],
    },
  },
});
