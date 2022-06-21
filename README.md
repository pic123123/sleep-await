# PromiseSleep

Temporary files & directorires easy CREATE and DELETE in Node.js

> It waits for the number of milliseconds of the argument you put into the function before executing it. This function must use async await. Execution is paused through the awiat keyword, and execution resumes when the promise is processed.

## :gear: Installation

### Npm

```
$ npm install promise-sleep
```

## :runner: Quick Start

### Example

```typescript
import { promiseSleep } from "promise-sleep";

TESTA();
async function TESTA() {
  console.log("11");

  await promiseSleep(3000);

  console.log("22");

  return true;
}
```
