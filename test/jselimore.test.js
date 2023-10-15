const { JSDOM } = require('jsdom');

const JSElimore  = require('../src/jselimore.js');

describe('jsElimore Library', () => {
  test('Initialization of jsElimore', () => {
    const jsdom = new JSDOM('<!doctype html><html lang="en"><body><div class="your-element-selector">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolorum ea est eum harum ipsa laudantium magni minima modi neque quo, sed unde vitae. Nemo placeat porro totam. Omnis, possimus.</div></body></html>');
    global.window = jsdom.window;
    global.document = jsdom.window.document;
    const element = JSElimore('.your-element-selector');
    expect(element).toBeDefined();
  });

  test('Initialization with a missing element', () => {
    // Creating a jsdom environment without the necessary element
    const jsdomWithoutElement = new JSDOM('<!doctype html><html lang="en"><body></body></html>');
    global.window = jsdomWithoutElement.window;
    global.document = jsdomWithoutElement.window.document;
    const element = JSElimore('.your-element-selector');
    expect(element).toBeDefined(); // Should remain defined
  });

  test('Testing the "rebuild" function', () => {
    const jsdom = new JSDOM('<!doctype html><html lang="en"><body><div class="your-element-selector">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolorum ea est eum harum ipsa laudantium magni minima modi neque quo, sed unde vitae. Nemo placeat porro totam. Omnis, possimus.</div></body></html>');
    global.window = jsdom.window;
    global.document = jsdom.window.document;
    const element = JSElimore('.your-element-selector');
    const container = document.querySelector('.your-element-selector');
    const containerContent = container.innerHTML;
    element.options.moreText = "Read more...";
    element.rebuild();
    expect(container.innerHTML).not.toEqual(containerContent);
  });

});
