<h1>
  CN React Coda
</h1>

[![Node.js CI](https://github.com/C4co/cn-react-coda/actions/workflows/ci.yml/badge.svg)](https://github.com/C4co/cn-react-coda/actions/workflows/ci.yml)
[![Build Status](https://travis-ci.com/C4co/cn-react-coda.svg?branch=master)](https://travis-ci.com/C4co/cn-react-coda)
[![Coverage Status](https://coveralls.io/repos/github/C4co/cn-react-coda/badge.svg?branch=master)](https://coveralls.io/github/C4co/cn-react-coda?branch=master)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/5367261f37c44d5eb932dbcb49c61990)](https://www.codacy.com/gh/C4co/cn-react-coda/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=C4co/cn-react-coda&amp;utm_campaign=Badge_Grade)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

> A simple react component to write code snippets

<p>
  <img width="740" src="https://i.imgur.com/Bwa0oa0.png"/>
</p>


### Install
```
npm install cn-react-coda
```

### Development

Test
```
npm run test
```

Build
```
npm run build
```

Lint
```
npm run lint
```

### How to use?

```jsx
import React from "react"
import { Coda } from "cn-react-coda"

const example = `
  function fn(){
    console.log("Hello world!")
  }
`

export default function App(){
  return (
    <Coda lang="js" theme="dark" title="example.js" code={example} />
  )
}
```

### Properties

| Name  | Type                 | Default | Required | Description                                                                                      |
|-------|----------------------|---------|----------|--------------------------------------------------------------------------------------------------|
| **code**  | string               | null    | yes      | Code snippet to be showed                                                                        |
| **title** | string               | null    | no       | Snippet title                                                                                    |
| **theme** | string (dark, light) | dark    | no       | Component theme                                                                                  |
| **lang**  | string               | jsx     | no       | Programing language, too see all suppport see [hightlight.js](https://highlightjs.org/static/demo/) |

### What's inside

- [styled component](https://styled-components.com/)
- [hightlight.js](https://highlightjs.org/)
- [react syntax highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
- [polished](https://polished.js.org/)
- [jetbrains-mono](https://www.jetbrains.com/pt-br/lp/mono/)

---

### License

MIT © [C4co](https://github.com/C4co)
