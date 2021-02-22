<p align="center">
  <img alt="react" src="https://i.imgur.com/DrE0cgt.png" width="100" />
</p>

<h1 align="center">
  CN React Coda
</h1>

> A simple react component to write code snipets

### Install
```
$ yarn add cn-react-helpers
```

### Development

Test
```
$ yarn test
```

Build
```
$ yarn build
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
| code  | string               | null    | yes      | Code snippet to be showed                                                                        |
| title | string               | null    | no       | Snippet title                                                                                    |
| theme | string (dark, light) | dark    | no       | Component theme                                                                                  |
| lang  | string               | jsx     | no       | Snippet language, too see all suppport see [hightlight.js](https://highlightjs.org/static/demo/) |

---

### License

MIT © [C4co](https://github.com/C4co)
