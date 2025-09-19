# JavaScript Elimore

JavaScript Elimore is a lightweight library for truncating text and displaying a "Read More" button. You can use it in plain JavaScript projects by simply including the compiled JS file in your HTML, without any frameworks or build tools. For React and Vue, dedicated components (Elimore.jsx and Elimore.vue) are provided in the `components` folder for easy integration into your applications.

## Features

- Truncate text to a specified maximum length
- Customizable "Read More" button for user interaction
- Works with plain JavaScript, React, and Vue.js
- Flexible options to control text length and button text

## Usage with Plain JavaScript

You can use jsElimore as a standalone JavaScript library, easily embedded into any HTML page without a build system or framework.

### Option 1: Download the library from GitHub

Download the jsElimore library from the [GitHub repository](https://github.com/tkdesign/jselimore), located in the `dist` folder.

### Option 2: Clone the project from GitHub

1. Clone the jsElimore repository: [https://github.com/tkdesign/jselimore](https://github.com/tkdesign/jselimore)
2. In your project directory, install dependencies:

```bash
npm i
```

3. Build the distributable version:

```bash
npm run dist
```

This will process the source code from the `src` directory and create a compiled JS file suitable for direct use in HTML pages.

### How to use jsElimore

1. Include the library in your HTML:

```html
<script src="jselimore.js"></script>
```

2. Initialize the library by specifying a selector for the element you want to truncate:

```javascript
// Basic initialization
const element = jsElimore('.your-element-selector');
```

3. You can also customize the options:

```javascript
// Initialization with custom options
const element = jsElimore('.your-element-selector', {
    maxLength: 100, // Maximum preview length
    moreText: "... read more", // Custom text for the button
});
```

The library will truncate the text and add a "Read More" button (or your custom text). Clicking the button reveals the full text.

Example HTML:

```html
<div class="your-element-selector">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus a felis vehicula luctus ac eu justo.
</div>
```

After initialization, the text will be truncated and a "Read More" button will appear. Clicking the button expands the text.

Ensure you have included the library and specified the correct selector for your element.

4. To update the truncated text dynamically (for example, after changing options or content), use the `rebuild` method:

```javascript
// Update the "moreText" option and rebuild
element.options.moreText = '... read more';
element.rebuild();
```

## Usage in Vue.js Applications (Elimore.vue)

To use Elimore in a Vue.js project, copy the `Elimore.vue` component from the `components` folder into your project and import it:

```html
<template>
  <div className="custom_wrapper">
    <Elimore
      :key="resetKey"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nostrum unde voluptas sunt sequi reprehenderit architecto at provident rem. Totam voluptatum illo vitae quasi tenetur possimus, cupiditate sint animi architecto."
      :maxLength="100"
      moreText="... read more"
    />
    <button @click="resetKey++">Reset</button>
  </div>
</template>

<script>
import Elimore from "./Elimore.vue";

export default {
  components: { Elimore },
  data () {
    return {
      element: null,
      resetKey: 0
    };
  },
};
</script>

<style>
.custom_wrapper {
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: 300px;
}
.elimore_show {
  font-weight: bold;
}
</style>
```

## Usage in React Applications (Elimore.jsx)

To use Elimore in a React project, copy the `Elimore.jsx` component from the `components` folder into your project and import it:

```javascript
import { useState } from "react";
import Elimore from "./Elimore";

function App() {
  const [resetCounter, setResetCounter] = useState(0);

  return (
    <>
      <style>{`
        .elimore_show {
          font-weight: bold;
        }
      `}</style>
      <div style={{ width: "300px", padding: "10px", border: "1px solid #ccc" }}>
        <Elimore
          key={resetCounter}
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima nostrum unde voluptas sunt sequi reprehenderit architecto at provident rem. Totam voluptatum illo vitae quasi tenetur possimus, cupiditate sint animi architecto."
          maxLength={100}
          moreText="... read more"
        />
        <button onClick={() => setResetCounter(c => c + 1)}>Reset</button>
      </div>
    </>
  );
}

export default App;
```

## Copyright
Author: Petr Kovalenko, 2023

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.