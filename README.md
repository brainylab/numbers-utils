<img src="https://img.shields.io/npm/v/@brainylab/classname"/>
<img src="https://github.com/brainylab/classname/actions/workflows/npm-publish.yml/badge.svg"/>


# Class Name Validate and Convert
Package with utilities for the convert and validate class for css

## Installation

Use the npm to install
```bash
npm install @brainylab/classname
```

Or use the yarn to install

```bash
yarn add @brainylab/classname
```

## Usage

```javascript
import { className } from '@brainylab/classname'

const classNameConverted = className('class', {class2: true, class3: false})

console.log(classNameConverted)

// return string 'class class2'
```

## License
[MIT](https://choosealicense.com/licenses/mit/)