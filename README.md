# Starter

react Starter project using typescript and Parcel

## Pre-requisites

- [node v9.4.0 or higher](http://nodejs.org/)

## Development

Development requires installation of Javascript library modules using the [Node Package manager](https://www.npmjs.com/).

The following command is run from the project's root directory.

```bash
  npm install
```

## Building the Website

The website is built using [parcel](https://parceljs.org/) which creates a bundled version of the code and resources in the _/dist_ root folder.

The following commands are run from the project's root directory.

```bash
npm run-script build
```

The following additional command is run from the project's root directory to launch the development build server:

```bash
npm run-script start
```


## Package.json Scripts

| Script             | Description                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| _build_            | Builds the Webpack development version of the project.                      |
| _start_            | Starts the Webpack server.                                                  |


## Folder Structure

| Folder             | Description                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| _api_              | API and network related Classes that handle any network requests.           |
| _contexts_         | Implementation of React contexts used in the App.                           |
| _definitions_      | declaration of interfaces, routes and constants.                            |
| _react-components_ | Implementation of react Components that renders different pages in the App. |
| _utilities_        | Implementation of Modules related utilities used across the App.            |


## Code quality conventions
- file headers needs to be added with file/author related details
- file names should follow kebab-case
- imports should be sorted alphabetically
- classes, functions, interfaces, enums and other objects should to be documented
- variables should be declared in the beginning of the block
- prefer const & let over var
- return statements should only appear at the end of the block
- on importing a function from another module use `as` and add a `_` in the beginning of it like `import func as _func from 'module'`