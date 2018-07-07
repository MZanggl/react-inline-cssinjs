# React Inline CSS in JS

Extension to CSS in JS libraries that turn inline styles to classnames.

### Installation

```
npm i -S git+https://github.com/MZanggl/react-inline-cssinjs
```

### Example

```
import React, { Component } from 'react';
import { css } from 'react-emotion'; //not limited to emotion
import StyleToClass from 'react-inline-cssinjs';

class App extends Component {
  render() {
    return (
        <StyleToClass generateClassNameFn={css}>
          <span style="font-size: 3rem;">No more inline styles</span>
          <span style="font-size: 3rem;" className="other-class-name">
            <div style="font-size: 2rem;">Inner Element</div>
          </span>
        </StyleToClass>
    );
  }
}

export default App;
```

The result will be

```
<span class="css-1lz646n">No more inline styles</span>
<span class="other-class-name css-1lz646n">
    <div class="css-o6nsxn">Inner Element</div>
</span>
```

You can pass any function you want into `generateClassNameFn` as long as it takes the CSS as an argument and returns a classname.

This way you can continue using your favorite CSS in JS library and don't worry about classname conflicts.

### Benefits 

CSS in JS is great. But there is one thing that always bothered me. 
If I only have one or two styles I don't want to go through the trouble of doing the following

```
const spanStyle = css`
    font-size: .9em;
    display: inline-block;
`
<span className={spanStyle}>That is annoying</span>
```

It is especially annoying when I have multiple classes I want to apply.

On the other hand I don't want to write this inline JSON-CSS

```
<span style={{ fontSize: '.9em', display: 'inline-block' }}>nope</span>
```

What I want to write is plain old CSS

```
<span style=`
    font-size: .9em;
    display: inline-block;
`>...</span>
```
and then turn the inline style to a class automatically.

Just like react turns inline methods like `onClick` to event listeners.

### warning

This is still more a proof of concept. I have not tested the performance of it yet.
In fact using it like this would probably not be optimal. It should be part of the build process. If anyone feels like writing a plugin like that, please go for it.