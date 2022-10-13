class MarkdownPreviewer extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "markdown-previewer" }, /*#__PURE__*/
      React.createElement("h4", null, "\u2630 Markdown previewer"), /*#__PURE__*/
      React.createElement("div", { dangerouslySetInnerHTML: this.props.markup })));


  }}


class MarkdownEditor extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "markdown-editor" }, /*#__PURE__*/
      React.createElement("h4", null, "\u2630 Markdown editor"), /*#__PURE__*/
      React.createElement("textarea", { onChange: this.props.onChange, value: this.props.value })));


  }}


class MarkdownContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://opencollective-production.s3-us-west-1.amazonaws.com/b86fb900-84a5-11e8-9910-1b3c4c66856a.jpeg)\n" };
    this.handleChange = this.handleChange.bind(this);
  }
  createMarkup() {
    var options = { sanitize: true };
    return { __html: marked(this.state.text, options) };
  }

  handleChange(e) {
    this.setState({
      text: e.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(MarkdownEditor, { onChange: this.handleChange, value: this.state.text }), /*#__PURE__*/
      React.createElement(MarkdownPreviewer, { markup: this.createMarkup() })));


  }}


class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement(MarkdownContainer, null));

  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById('app'));