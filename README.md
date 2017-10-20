# account-management

### Account management app for windows/Mac/Linux. Generating bills, retrieving the old bills and product entry is now much more easier

<br/>



## Install

* **Note: requires a node version >= 6 and an npm version >= 3.**

First, clone the repo via git:

```bash
git clone https://github.com/arkadyuti/electron-react-nedb.git
```

And then install dependencies with yarn.

```bash
$ cd electron-react-nedb
$ yarn
```
**Note**: If you can't use [yarn](https://github.com/yarnpkg/yarn) for some reason, try `npm install`.

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a server sends hot updates to the renderer process:

```bash
$ npm run dev
```

You Run these two commands __simultaneously__ in different console tabs:

```bash
$ npm run hot-updates-server
$ npm run start-hot-renderer
```


## Packaging

To package apps for the local platform:

To package apps with options:

```bash
$ npm run package package-win
$ npm run package package-linux
```

## Maintainers

- [Arkadyuti](https://github.com/arkadyuti)
- [Subhendu](https://github.com/subhendukundu)