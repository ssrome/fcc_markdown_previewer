import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

// \inline\
//   ```
// {
//   "firstName": "John",
//   "lastName": "Smith",
//   "age": 25
// }
// ```
export default function App() {
  const placeholderText = `# My React Markdown Previewer!
## Sub-heading...
### And a smaller heading:
Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
1. And of course there are lists.
2. That look like this.
3. embedded image:

![React Logo](https://cdn.iconscout.com/icon/free/png-256/react-1543566-1306069.png)
`;
  const [inputText, setInputText] = useState(placeholderText);
  function handleInput(event) {
    setInputText(event.target.value);
    console.log(inputText);
  }

  function setLocalStorage() {
    localStorage.setItem("project_selector", "markdown-previewer");
    localStorage.setItem("fCC_markdown-previewer_hide", true);
  }

  setLocalStorage();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Previewer</h1>
      </header>
      <div>
        <Form.Label>Editor</Form.Label>
        <Form>
          <Form.Control
            className="inputField"
            id="editor"
            as="textarea"
            rows={10}
            aria-label="editor"
            onChange={handleInput}
            defaultValue={inputText}
          />
        </Form>
      </div>
      <div>
        <h2>Previewer</h2>
        <Row>
          <Col id="preview" className="preview">
            <ReactMarkdown
              remarkPlugins={[gfm]}
              children={inputText}
              inline={true}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
