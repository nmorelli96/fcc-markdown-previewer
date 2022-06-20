marked.setOptions({
  gfm: true,
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
      <div className="container-fluid p-0">
        <nav class="navbar navbar-light top d-flex align-content-center justify-content-center" id="navbar">
          <p class="navbar-brand h1 m-0 p-0 unselectable"><span>&lt; </span>Markdown Previewer <span>/&gt;</span></p>
        </nav>
        {/* Tabs only visible on mobile*/}
        <ul className="nav nav-tabs d-flex d-xl-none align-content-center justify-content-center" role="tablist">
          <li className="nav-item"><a className="nav-link active unselectable" href="#editor-pane" aria-controls="editor"
            data-bs-toggle="tab"><i class="fa-solid fa-pen-to-square fa-sm"></i> Editor</a></li>
          <li className="nav-item"><a className="nav-link unselectable" href="#markdown-pane" aria-controls="profile"
            data-bs-toggle="tab"><i class="fa-solid fa-code fa-sm"></i> Markdown</a></li>
        </ul>

        {/* Tabs replacement titles for desktop */}
        <div className="title-container d-none d-xl-block">
          <div className="row text-center h5">
            <div className="content-title col p-0 unselectable">
              <i class="fa-solid fa-pen-to-square fa-sm"></i> Editor
            </div>

            <div className="content-title col p-0 unselectable">
              <i class="fa-solid fa-code fa-sm"></i> Markdown
            </div>
          </div>
        </div>

        {/* Tabs content */}
        <div className="tab-content row align-content-center justify-content-center">
          <div role="tabpanel" className="tab-pane active col col-12 col-xl-6" id="editor-pane">
            <textarea className="form-control" id="editor" onChange={this.handleChange}
              value={text}># Welcome to my React Markdown Previewer!
            </textarea>
          </div>
          <div role="tabpanel" className="tab-pane col-12 col-xl-6" id="markdown-pane">
            <div className="preview" id="preview"
              dangerouslySetInnerHTML={{ __html: markdown }} />
          </div>
        </div>
        <footer className="footer text-muted d-flex align-content-center justify-content-center">Based on the&nbsp;<a target="_blank"
          href="https://www.freecodecamp.org/learn/front-end-development-libraries/">
          FCC course</a>&nbsp;by&nbsp; <a target="_blank"
            href="https://github.com/nmorelli96/fcc-markdown-previewer">nmorelli96</a></footer>
      </div >
    );
  }
}

const placeholder = `# Welcome!

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