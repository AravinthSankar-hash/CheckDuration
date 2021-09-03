# CheckDuration

Get the time taken to execute the provided function

## Installation

```js
# using npm
npm install checkDuration
```

## Usage

```js
# using require
const { performancecheck } = require('checkDuration');

# using import
import { performancecheck } from 'checkDuration';
```

## Example
```js
    performancecheck( (a:number, b: number) => {
            return a*b;
        }, [5,100000]
    )
```js