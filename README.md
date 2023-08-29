# Overview
Demonstrates using Jest with Azure Functions v4 Runtime with Typescript

## Background
Ensure you reviewin the v4 Azure Functions [here](https://learn.microsoft.com/en-us/azure/azure-functions/functions-reference-node?tabs=typescript%2Clinux%2Cazure-cli&pivots=nodejs-model-v4)

## Getting Started
Ensure you review the `./tsconfig.json` along with the `./jest.config.ts` for settings.

## Create or update the `local.settings.json` file
There is an example that is present in the root. This is set to use the Development Azurite services for Blob and Queue.

## Running

from a bash prompt

```shell
npm install
npm run cleantest
```

### Output
The following is what should shown.

```shell
> cleantest
> npm run clean && npm run test


> clean
> rimraf dist


> test
> jest --silent

 PASS  test/HandleDocument.test.ts

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.698 s, estimated 2 s
```

## Test Runner
The VS Code Test Runner should also enabled from the Primary Sidebar if the recommended extensions are installed 

## Extensions

```json
{
    "recommendations": [
        "ms-azuretools.vscode-azurefunctions",
        "kavod-io.vscode-jest-test-adapter",
        "azurite.azurite"
    ]
}
```

You can install via the VS Code command line:

```shell
code --install-extension ms-azuretools.vscode-azurefunctions && \
code --install-extension kavod-io.vscode-jest-test-adapter && \
code --install-extension azurite.azurite
```
