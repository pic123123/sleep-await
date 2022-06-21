# sleep-await

It is used when you want to execute the next logic after a specific millisecond using sleep.

> This function must use async await. Execution is paused through the awiat keyword, and execution resumes when the promise is processed.

> https://www.npmjs.com/package/sleep-await

## :gear: Installation

### Npm

```
$ npm install sleep-await
```

## :runner: Quick Start

### Example

```typescript
import { sleepAwait } from "sleep-await";

TESTA();
async function TESTA() {
  console.log("11"); // "11"

  await sleepAwait(3000); // -> after 3 seconds

  console.log("22"); // -> "22"

  return true;
}
```
