# Overview
Demonstrates using Jest with Azure Functions v4 Runtime with Typescript

## Getting Started
Ensure you review the `./tsconfig.json` along with the `./jest.config.ts` for settings.

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
