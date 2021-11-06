# Command Line Sample With Nodejs
for implation this project uses [yargs](https://www.npmjs.com/package/yargs)

helpful links :

1: [Tutorial](https://codezup.com/run-node-js-command-line-arguments-yargs-npm/)

2: [Helpful_Documentation](https://yargs.js.org/docs/#demandOption)

3: [Helpful_Github](https://github.com/yargs/yargs/blob/HEAD/docs/api.md)

## install yargs

```javascript
npm i yargs
```

## install module globaly
```javascript
npm i -g .
```

## run command Sample
```javascript
sample-cli print --port 5000
//or
sample-cli print -p 5000
```

## help for Commands

```javascript
sample-cli --help
```

```
sample-cli [command]

Commands:
  sample-cli print  print port

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

## help for arguments of commands
```javascript
sample-cli print --help
```

```
sample-cli print

print port

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -p, --port     3000/5000             [number] [required] [choices: 3000, 5000]
  -n, --name     server name                                            [string]
```