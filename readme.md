# has-yarn-cli

> Check if a project is using [Yarn](https://yarnpkg.com)

It checks for a `yarn.lock` file in the given directory or any of its parent directories (useful for Yarn workspaces).

## Install

```sh
npm install --global has-yarn-cli
```

## Usage

```
$ has-yarn --help

  Usage
    $ has-yarn
    ✔ This project uses Yarn

  Options
    --quiet  Silence output (useful for scripts)

  Exits with code 0 if the project uses Yarn, otherwise code 2
```

## Related

- [has-yarn](https://github.com/sindresorhus/has-yarn) - API for this package
