# JavaScript Elimore

JavaScript Elimore is a lightweight JavaScript library for text truncation with a "Show More" button. It allows you to truncate long blocks of text and provide users with the option to expand and read the full content. This library is suitable for web projects, including those built with Vue.js, React, or any vanilla JavaScript application.

## Features

- Truncate text to a specified maximum length.
- Provide a customizable "Show More" button for user interaction.
- Supports easy integration into Vue.js, React, and vanilla JavaScript projects.
- Highly customizable with options to control text length and button text.

## Usage as pure static JS code

This section describes how to use the jsElimore library as pure static JS code, which can be easily embedded into an HTML page without the need for a build system or framework. This method provides a straightforward integration and allows you to use jsElimore directly in your HTML page's code.

### Option 1: Downloading the distributed library from github repository

Download the distributable jsElimore library from the repository [https://github.com/tkdesign/jselimore](https://github.com/tkdesign/jselimore). You can find it in the `dist` folder.

-- or --

### Option 2: Cloning the project from github repository

1. Clone the entire jsElimore project repository [https://github.com/tkdesign/jselimore](https://github.com/tkdesign/jselimore) to your local environment.

2. In your project directory, install the required dependencies by running:

```bash
npm install --save-dev
```

3. Once the dependencies are installed, generate the distributable version of the library using:

```bash
npm run dist
```

This will process the source code from the `src` directory and produce a distribution that can be used in various environments.

### To use this library, you can call the `jsElimore` function and provide a selector and context (default is `document`)

Here's an example of how you can use this library:

1.  Include the library in your project:

```html
<script src="jselimore.js"></script>
```

2.  Initialize the library by specifying a selector for the element to which you want to apply the text truncation effect. For example:

```javascript
// Simple initialization without customizing options
const element = jsElimore('.your-element-selector');

```

3.  You can also customize the library's parameters during initialization by passing an options object. For example:

```javascript
// Initialization with customized options
const element = jsElimore('.your-element-selector', {
  maxLength: 100,      // New maximum text length
  moreText: "Show More",  // New text for the "Show More" button
});

```

As a result, the library will create a truncated version of the text with a "Show More" button (or the text you set) that the user can click to reveal the full text.

Example HTML markup:

```html
<div class="your-element-selector">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus a felis vehicula luctus ac eu justo.
</div>
```

After the library is executed, the text will be truncated, and a "Show More" button will be added. When the button is clicked, the text will expand.

Make sure you have correctly included the library and specified the selector for your element. This way, the library will work on your web page.

4. To recreate the truncated text with updated settings, use the rebuild method:

```javascript
// Example: Change the "moreText" option and rebuild
element.options.moreText = 'Read more...';
element.rebuild();
```

The rebuild method allows you to update the truncated text using the current settings.

## Usage with build systems and frontend frameworks

### Installing dependencies in your project

1.  Open your project's `package.json` file (the project in which you want to use `jsElimore`).

2.  Add a dependency for `jsElimore` by specifying the GitHub repository path in the format `githubusername/repositoryname#branchname`:

```json
"dependencies": {
  "jselimore": "git+https://github.com/tkdesign/jselimore.git"
}
```

3.  Run the `npm install` or `yarn install` command to install the `jsElimore` dependency from the GitHub repository in your project.

Your project will now use `jsElimore` from the specified GitHub repository as a dependency. You can import and use it in your code.

### Usage with build systems

The JavaScript Elimore library can be integrated into your projects using various build systems like Webpack, Rollup, which allow you to manage dependencies, optimize code, and ensure compatibility across different browsers.

1.  Install `jsElimore` in your project as a dependency (see "Installing Dependencies" section).

2.  In your JavaScript code, import the library using the following instruction:

```javascript
import jsElimore from 'jselimore';
```

3.  Initialize the JavaScript Elimore library by providing the selector of the element to which you want to apply the text truncation effect. No additional parameters are needed for the default settings:

```javascript
const element = jsElimore('.your-element-selector');
```

4.  You can also customize the library's parameters during initialization by passing an options object. For example:

```javascript
const element = jsElimore('.your-element-selector', {
  maxLength: 100,        // Adjust the maximum text length
  moreText: "Show More", // Customize the text for the "Show More" button (default is "...")
});
```

5. If you wish to update the settings and recreate the truncated text, adjust the jsElimore options:

```javascript
// Change the "moreText" option to 'Read more...' (for illustration)
element.options.moreText = 'Read more...';

// Use the `rebuild` method to recreate the truncated text with the updated settings
element.rebuild();
```

6.  Build your project using a build system such as Webpack or Rollup.

### Integration with Vue.js project

If you want to use the `jsElimore` library in a Vue.js project, follow these steps:

1.  Install `jsElimore` in your project as a dependency (see "Installing Dependencies" section).

2.  In your Vue component, import the library and initialize it for the desired element. You can customize jsElimore parameters by passing an options object during initialization, but it's optional. If no options are provided, the default settings will be used. For example, in your component's script:

**Initialization with default parameters:**

```html
<template>
  <div>
    <button @click="rebuildElement">Rebuild Element</button>
  </div>
</template>

<script>
import jsElimore from 'jselimore';

export default {
  mounted() {
    this.initializeElement();
  },
  methods: {
    initializeElement() {
      // Initialize jsElimore for your element with default parameters
      this.element = jsElimore('.your-element-selector');
    },
    // Create a function to change options
    setOptions(newOptions) {
      if (this.element) {
        this.element.options = { ...this.element.options, ...newOptions };
      }
    },
    // Create a function to rebuild the element
    rebuildElement() {
      if (this.element) {
        this.element.rebuild();
      }
    },
  },
};
</script>
```

**Initialization with custom parameters:**

```html
<template>
  <div>
    <button @click="rebuildElement">Rebuild Element</button>
  </div>
</template>

<script>
import jsElimore from 'jselimore';

export default {
  mounted() {
    this.initializeElement();
  },
  methods: {
    initializeElement() {
      // Initialize jsElimore for your element with custom parameters (optional)
      this.element = jsElimore('.your-element-selector', {
        maxLength: 100,       // Adjust the maximum text length (optional)
        moreText: "Show",    // Customize the text for the "Show" button (optional)
      });
    },
    // Create a function to change options
    setOptions(newOptions) {
      if (this.element) {
        this.element.options = { ...this.element.options, ...newOptions };
      }
    },
    // Create a function to rebuild the element
    rebuildElement() {
      if (this.element) {
        this.element.rebuild();
      }
    },
  },
};
</script>
```

### Integration with React project

If you want to use the `jsElimore` library in a React project, follow these steps:

1.  Install `jsElimore` in your project as a dependency (see "Installing Dependencies" section).

2.  In your React component, import the library and initialize it for the desired element. You can customize jsElimore parameters by passing an options object during initialization, but it's optional. If no options are provided, the default settings will be used. For example, in your functional component:

**Initialization with default parameters:**

```javascript
import React, { useEffect } from 'react';
import jsElimore from 'jselimore';

const MyComponent = () => {
  let element; // Define an element variable at the component level

  useEffect(() => {
    // Initialize jsElimore for your element with default parameters
    element = jsElimore('.your-element-selector');
  }, []);

  // Create a function to change options
  const setOptions = (newOptions) => {
    if (element) {
      element.options = { ...element.options, ...newOptions };
    }
  };

  // Create a function to rebuild the element
  const rebuildElement = () => {
    if (element) {
      element.rebuild();
    }
  };

  return (
    // Your component's JSX code
    <button onClick={rebuildElement}>Rebuild Element</button>
  );
}

export default MyComponent;
```

**Initialization with custom parameters:**

```javascript
import React, { useEffect } from 'react';
import jsElimore from 'jselimore';

const MyComponent = () => {
  let element; // Define an element variable at the component level

  useEffect(() => {
    // Initialize jsElimore for your element with custom parameters (optional)
    element = jsElimore('.your-element-selector', {
      maxLength: 100,       // Adjust the maximum text length (optional)
      moreText: "Show",    // Customize the text for the "Show" button (optional)
    });
  }, []);

  // Create a function to change options
  const setOptions = (newOptions) => {
    if (element) {
      element.options = { ...element.options, ...newOptions };
    }
  };

  // Create a function to rebuild the element
  const rebuildElement = () => {
    if (element) {
      element.rebuild();
    }
  };

  return (
    // Your component's JSX code
    <button onClick={rebuildElement}>Rebuild Element</button>
  );
}

export default MyComponent;

```

## License

This library is open-source and available under the [MIT License](LICENSE.md). Feel free to use it in your projects.