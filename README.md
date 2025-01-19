# Pyml

Pyml is a JavaScript library that enables running Python code directly in the browser using the `<python>` tag.

## Features

- Run Python code in HTML with the `<python>` tag.
- Powered by Pyodide, which compiles Python to WebAssembly (WASM).
- Easy to integrate into web projects.

## Usage

1. Include Pyodide and Pyml in your HTML:
    ```html
    <script src="https://cdn.jsdelivr.net/pyodide/v0.23.2/full/pyodide.js"></script>
    <script src="https://fundiman.github.io/pyml/pyml.js"></script>
    ```

2. Add Python code inside `<python>` tags:
    ```html
    <python>
    print("Hello, world!")
    </python>
    ```

3. That's it! Your Python code will execute when the page loads.

## License
This project is licensed under the **All Rights Reserved** license. All rights are reserved by the author, and no usage, copying, or redistribution is permitted without express permission.
