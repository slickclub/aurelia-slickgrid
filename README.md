# Aurelia-Slickgrid
One of the best javascript datagrid [SlickGrid](https://github.com/mleibman/SlickGrid) which was originally developed by @mleibman is now available to Aurelia. I have tried and used a few datagrids and SlickGrid beats most of them in terms of functionalities and performance (it can easily deal with even a million row).

### SlickGrid Source
We will be using [6pac SlickGrid fork](https://github.com/6pac/SlickGrid/) (the most active fork since the original @mleibman fork was closed some time ago by his author personal reasons).

### Goal
The goal is of course to be able to run SlickGrid within Aurelia but also to incorporate as much as possible the entire list of functionalities (and more) that SlickGrid offers (you can see a vast list of samples on the [6pac SlickGrid examples](https://github.com/6pac/SlickGrid/wiki/Examples) website).

### Demo page
...soon

### NPM Package
[Aurelia-Slickgrid on NPM](https://www.npmjs.com/package/aurelia-slickgrid)

## Migration (from 0.x to 1.x)
### Breaking Changes
Since the version `1.x` is a complete rewrite, there are some drawbacks which we will discuss. By dropping [Slickgrid-ES6](https://github.com/DimitarChristoff/slickgrid-es6) dependency, it means introducing couple of breaking changes (that is, if you were using previous version). Also, the modules that you can import are different and the `Frozen` grid is gone.

### So, why the rewrite?
Mostly because the [Slickgrid-ES6](https://github.com/DimitarChristoff/slickgrid-es6) repo (which is maintained by 1 person, which mainly does `React` stuff) is not as maintained, neither stable, as the most active [6pac fork](https://github.com/6pac/SlickGrid). Also, I now have another repo for `Angular 4+` as well ([Angular-Slickgrid](https://github.com/ghiscoding/Angular-Slickgrid)) which I also maintain (that one is for work though) and is based on the [6pac fork](https://github.com/6pac/SlickGrid) fork as well. I prefer the 6pac fork for it's stability, list of available functionalities and samples (I even made a few PRs on that fork as well), which the `ES6` fork lacks. The goal is to make both `Angular-Slickgrid` and `Aurelia-Slickgrid` on par (feature wise) and in synch, also since it is used and developed at my work, it will grow much faster.

## Wiki / Documentation
The Wiki is where all the documentation and instructions will go, so please consult the [Aurelia-Validation - Wiki](https://github.com/ghiscoding/aurelia-slickgrid/wiki) before opening any issues. The [Wiki - HOWTO](https://github.com/ghiscoding/aurelia-slickgrid/wiki/HOWTO---Step-by-Step) is a great place to start with.

## Main features
You can see some screenshots below and the instructions down below.

This is a work in progress, but so far here are some of the features that `aurelia-slickgrid` brings (on top of Slickgrid itself):
- Easier use of SlickGrid within `Aurelia` as it is just a component (simply pass a column definitions and a dataset and you're good to go)
- Bootstrap Theme with SASS variables for extra customization (if you create a theme, then please make a PR)
- Auto-resize (boolean flag), will resize the datagrid viewport with available space, that includes when browser resize (basically takes available space from it's parent container)
- Support all SlickGrid Plugins.
- Server side (backend) Services (filtering, sorting, pagination)
    - [GraphQL](https://github.com/ghiscoding/aurelia-slickgrid/wiki/GraphQL)
    - [OData](https://github.com/ghiscoding/aurelia-slickgrid/wiki/OData)
- Some features of SlickGrid itself which are working out of the gate
  - Sort/Multi-Sort (client/server side)
  - Header Row with Filters (currently support `Input` and `Select` dropdown, multi-select is planned)
  - Inline Editors (a few defaults were added, and you can easily create custom ones too)
  - Formatters (this as well includes some defaults and they are customizable)
  - Optimized DataView which brings a lot of functionalities (sort, grouping, and more)
    - even server side data is saved back into a SlickGrid DataView to use these functionalities (e.g grouping)
  - All the [SlickGrid Events](https://github.com/6pac/SlickGrid/wiki/Grid-Events) are supported, see the [Wiki](https://github.com/ghiscoding/Angular-Slickgrid/wiki/Grid-&-DataView-Events)

## Missing features (planned items, not necessarily in order of execution)
The following are SlickGrid features which are not yet included in this library but will be in the upcoming future.
- Filters to support multi-select dropdown and eventually custom filters

## Screenshots

Screenshots from the demo app with the `Bootstrap` theme (that is the only available theme, but there is a lot of SASS variables to make it look like Material, or other theme if you wish to. If you create a new theme, please submit a PR).

### Slickgrid example with Formatters (last column shown is a custom Formatter)

![Default Slickgrid Example](/screenshots/formatters.png)

### Filter and Sort (clientside with DataView)

![Slickgrid Server Side](/screenshots/filter_and_sort.png)

### Editors and/or onCellClick

![Editors](/screenshots/editors.png)

### Slickgrid Example with Server Side (Filter/Sort/Pagination)

![Slickgrid Server Side](/screenshots/pagination.png)

## How to use Aurelia-Slickgrid?
Import the pieces that you want from `aurelia-slickgrid`.
```javascript
import { FieldType, Formatters} from 'aurelia-slickgrid';
```

## Installation
You can run the examples or build your own by doing the following.

### Aurelia-CLI / Webpack
```bash
npm install --save aurelia-slickgrid
# or yarn add aurelia-slickgrid
```
#### Aurelia-CLI
For `CLI` you will need to add both plugins (`aurelia-slickgrid` and `slickgrid-es6`) to your `aurelia.json` file
```javascript
"jquery",
"moment",
{
  "name": "aurelia-slickgrid",
  "path": "../node_modules/aurelia-slickgrid/dist/amd",
  "main": "index",
  "resources": ["**/*.{css,html}"]
},
{
  "name": "bootstrap",
  "path": "../node_modules/bootstrap/dist",
  "main": "js/bootstrap.min",
  "deps": ["jquery"],
  "exports": "$",
  "resources": ["css/bootstrap.css"]
},
{
  "name": "flatpickr",
  "path": "../node_modules/flatpickr/dist",
  "main": "flatpickr.min",
  "resources": ["flatpickr.min.css"]
},
{
  "name": "jquery-event",
  "path": "../node_modules/slickgrid/lib",
  "main": "jquery.event.drag-2.3.0"
},
{
  "name": "jquery-ui",
  "path": "../node_modules/slickgrid/lib",
  "main": "jquery-ui-1.11.3.min"
},
{
  "name": "slickgrid",
  "main": "slick.grid",
  "path": "../node_modules/slickgrid",
  "deps": [
    "jquery",
    "jquery-event",
    "jquery-ui"
  ]
}
```
You also have to modify your `index.html` to include all necessary `CSS` files (unless someone knows a better way, if so please create an [issue](https://github.com/ghiscoding/aurelia-slickgrid/issues))

#### Aurelia (main)
Make the plugin available globally in your `main.js` file.
```javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-slickgrid')
    .feature('resources');

  aurelia.start().then(() => aurelia.setRoot());
}
```
And finally use it your code
```javascript
import {inject} from 'aurelia-framework';
import {SlickService} from 'aurelia-slickgrid';

@inject(SlickService)
export class List {
  gridOptions = {}; // define your grid Options
  gridColumns = {}; // define your grid columns

  constructor(slickService) {
    this.slickgrid = slickService;
  }

  attached() {
    this.slickgrid.createGrid('myGrid', this.gridColumns, this.gridOptions, data);
  }
}
```

## Examples (client samples)

### Aurelia-CLI (client-cli)
```bash
git clone https://github.com/ghiscoding/aurelia-slickgrid
cd aurelia-slickgrid/client-cli
npm install # or yarn install
au run --watch
```

### Aurelia TypeScript Webpack (client-ts-wp)
```bash
git clone https://github.com/ghiscoding/aurelia-slickgrid
cd aurelia-slickgrid/client-ts-wp
npm install # or yarn install
npm start # or yarn start
```

### License
[MIT License](LICENSE)

## Contributions/Comments
Contributions are welcome, this is what the community is for. If you wish to suggest something and/or want to make a PR (Pull Request), please feel free to do so.

## Use it, like it?
You like and use this great library `Aurelia-Slickgrid`? You can always upvote :star: and/or contribute :)
