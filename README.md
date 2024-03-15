# Checkly: Monitoring as Code: React Project Template
  This is a sample project that shows basic Checkly CLI setup and configurations for a React Project

  1- Organize all your test in one folder
  2- Deploy your checks using github actions
  3- Add Alert Channels to recieve alert on status of your checks


  Get Started By Installing Checkly
  ``` 
    npm create checkly 
  ```
  or
  ```
    yarn add checkly
  ```

### Install Playwright
  ``` 
    npm init playwright@latest

  ```
  or
  ```
    yarn create playwright

  ```




### Project Structure
    1- ./checkly.config.ts 
        - in the root of the application contains the configurations and the core settings for the cli
    2- ./src/tests/ 
        - holds all of playwright test files
    3- ./src/_checks_/
        - holds all your checks file
    4- .github/workflows/checkly.yml
        - Contains CI workflows to run and deploy checks

## CLI Commands

Run the core CLI commands with `npx checkly <command>` 

| Command              | Action                                           |
|:---------------------|:-------------------------------------------------|
| `npx checkly test`   | Dry run all the checks in your project           |
| `npx checkly deploy` | Deploy your checks to the Checkly cloud          |
| `npx checkly login`  | Log in to your Checkly account                   |
| `npx checkly --help` | Show help for each command.                      |

[Check the docs for the full CLI reference](https://www.checklyhq.com/docs/cli/command-line-reference/).


## Questions?

Check [our CLI docs](https://www.checklyhq.com/docs/cli/), the [main Checkly docs](https://checklyhq.com/docs) or 
join our [Slack community](https://checklyhq.com/slack).