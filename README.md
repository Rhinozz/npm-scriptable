# npm-scriptable
A project to convert npm packages to Scriptable modules.

## Usage

To use these with the npm package format, add a line at the top of your script:

```js
const require = importModule;
```

Then, whenever you want to use a module, you can add:

```js
const [module name] = require('[module name]')
```

### Module Installation

To install a module, click on the `[module name].js` file and download it. Move it to your Scriptable folder in iCloud.

Alternatively, you can copy the file's text contents and paste it into a new script.

Each module should be as close as possible to the original. Some functions may not work due to the limitations of Scriptable - see the non-minified version of each module for a guide on each function.
