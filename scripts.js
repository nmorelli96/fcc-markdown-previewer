marked.setOptions({
  gfm: false,
  breaks: true
})

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    text: placeholder
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    const { text } = this.state;
    const markdown = marked.parse(text);
    return (
      <div className="container-fluid">
        {/* Tabs */}
        <ul className="nav nav-tabs d-flex d-md-none" role="tablist">
          <li className="nav-item"><a className="nav-link active" href="#editor-pane" aria-controls="editor"
            data-bs-toggle="tab">Editor</a></li>
          <li className="nav-item"><a className="nav-link" href="#markdown-pane" aria-controls="profile"
            data-bs-toggle="tab">Markdown</a></li>
        </ul>

        {/* Tabs replacement titles for big screen */}
        <div className="title-container d-none d-md-flex justify-content-evenly">
          <div className="content-title">
            Editor
          </div>

          <div className="content-title">
            Markdown
          </div>
        </div>

        {/* Tabs content */}
        <div className="tab-content row">
          <div role="tabpanel" className="tab-pane active col col-12 col-md-6" id="editor-pane">
            <textarea className="form-control" id="editor" onChange={this.handleChange} value={text}># Welcome to my React Markdown Previewer!
            </textarea>
          </div>
          <div role="tabpanel" className="tab-pane col-12 col-md-6 " id="markdown-pane">
            <div className="preview rounded" id="preview"
              dangerouslySetInnerHTML={{ __html: markdown }} />
          </div>
        </div>
      </div>
    );
  }
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

ReactDOM.render(<App />, document.getElementById('app'));