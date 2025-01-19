async function executePython() {
  const pyodide = await loadPyodide(); // Load the Python runtime
  const pythonTags = document.querySelectorAll('python'); // Find all <python> tags
  pythonTags.forEach(async (tag) => {
    try {
      const result = await pyodide.runPythonAsync(tag.textContent); // Execute the Python code
      console.log('Python Output:', result); // Log the result to the console
    } catch (e) {
      console.error('Python error:', e);
    }
  });
}
executePython();
