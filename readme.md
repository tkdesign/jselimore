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

5.  Build your project using a build system such as Webpack or Rollup.

### Integration with Vue.js project

If you want to use the `jsElimore` library in a Vue.js project, follow these steps:

1.  Install `jsElimore` in your project as a dependency (see "Installing Dependencies" section).

2.  In your Vue component, import the library and initialize it for the desired element. You can customize jsElimore parameters by passing an options object during initialization, but it's optional. If no options are provided, the default settings will be used. For example, in your component's script:

**Initialization with default parameters:**

```javascript
import jsElimore from 'jselimore';

export default {
  // ... other component settings

  mounted() {
    // Initialize jsElimore for your element with default parameters
    const element = jsElimore('.your-element-selector');
  },
};
```

**Initialization with custom parameters:**

```javascript
import jsElimore from 'jselimore';

export default {
  // ... other component settings

  mounted() {
    // Initialize jsElimore for your element with custom parameters (optional)
    const element = jsElimore('.your-element-selector', {
      maxLength: 100,       // Adjust the maximum text length (optional)
      moreText: "Show",    // Customize the text for the "Show" button (optional)
    });
  },
};
```

### Integration with React project

If you want to use the `jsElimore` library in a React project, follow these steps:

1.  Install `jsElimore` in your project as a dependency (see "Installing Dependencies" section).

2.  In your React component, import the library and initialize it for the desired element. You can customize jsElimore parameters by passing an options object during initialization, but it's optional. If no options are provided, the default settings will be used. For example, in your functional component:

**Initialization with default parameters:**

```javascript
import React, { useEffect } from 'react';
import jsElimore from 'jselimore';
import React, { useEffect } from 'react';
import jsElimore from 'jselimore';

const MyComponent = () => {
  useEffect(() => {
    // Initialize jsElimore for your element with default parameters
    const element = jsElimore('.your-element-selector');
  }, []);

  return (
    // Your component's JSX code
  );
};

export default MyComponent;
```

**Initialization with custom parameters:**

```javascript
import React, { useEffect } from 'react';
import jsElimore from 'jselimore';

const MyComponent = () => {
  useEffect(() => {
    // Initialize jsElimore for your element with custom parameters (optional)
    const element = jsElimore('.your-element-selector', {
      maxLength: 100,       // Adjust the maximum text length (optional)
      moreText: "Show",    // Customize the text for the "Show" button (optional)
    });
  }, []);

  return (
    // Your component's JSX code
  );
};

export default MyComponent;
```

## License

This library is open-source and available under the [MIT License](LICENSE.md). Feel free to use it in your projects.