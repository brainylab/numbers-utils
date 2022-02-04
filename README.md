<img src="https://img.shields.io/npm/v/@brainylab/classname"/>
<img src="https://github.com/brainylab/classname/actions/workflows/npm-publish.yml/badge.svg"/>


# Class Name Validate and Convert
Package with utilities for the convert number to price format

## Installation

Use the npm to install
```bash
npm install @brainylab/numbers-utils
```

Or use the yarn to install

```bash
yarn add @brainylab/numbers-utils
```

## Usage

```javascript
import { priceFormat } from '@brainylab/numbers-utils';

const number = 500;

const priceConverted = priceFormat(number)

console.log(priceConverted)

// return string 'R$ 500,00'
```

## License
[MIT](https://choosealicense.com/licenses/mit/)