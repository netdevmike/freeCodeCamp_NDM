class EqualsButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "col-12 p-2" }, /*#__PURE__*/
      React.createElement("div", { id: "equals", className: "calculator-operator-button clear-button", onClick: this.props.clickHandler }, " = ")));


  }}


class ClearButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "col-6 p-2" }, /*#__PURE__*/
      React.createElement("div", { id: "clear", onClick: () => {this.props.clickHandler(true, true);}, className: "calculator-operator-button clear-button" }, " AC ")));


  }}


class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "col-" + this.props.col + " p-2" }, /*#__PURE__*/
      React.createElement("div", { className: "calculator-button", id: this.props.name, onClick: () => {this.props.clickHandler(this.props.value);} },
      this.props.value)));



  }}


class OperatorButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "col-3 p-2" }, /*#__PURE__*/
      React.createElement("div", { className: "calculator-operator-button", id: this.props.name, onClick: () => {this.props.clickHandler(this.props.value);} },
      this.props.value)));



  }}


class CalculatorCalculationDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "calculation-display", className: "text-right" },
      this.props.calculationDisplay));


  }}


class CalculatorDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "display", className: "text-right" },
      this.props.display));


  }}


const numbers = [{ name: "seven", value: 7, col: 3 }, { name: "eight", value: 8, col: 3 }, { name: "nine", value: 9, col: 3 }, { name: "four", value: 4, col: 3 }, { name: "five", value: 5, col: 3 }, { name: "six", value: 6, col: 3 }, { name: "one", value: 1, col: 4 }, { name: "two", value: 2, col: 4 }, { name: "three", value: 3, col: 4 }, { name: "zero", value: 0, col: 8 }, { name: "decimal", value: ".", col: 4 }];
const operators = [{ name: "add", value: "+" }, { name: "subtract", value: "-" }, { name: "multiply", value: "*" }, { name: "divide", value: "/" }];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      calculationDisplay: '0',
      equalsMode: false };

    this.clearDisplay = this.clearDisplay.bind(this);
    this.appendToDisplay = this.appendToDisplay.bind(this);
    this.operatorFunction = this.operatorFunction.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }

  clearDisplay(all = true, setZero = false) {
    const t = setZero ? '0' : '';
    this.setState(state => ({
      display: t,
      calculationDisplay: all ? t : state.calculationDisplay,
      equalsMode: false }));

  }

  appendToDisplay(text, operator = false) {
    if (this.state.equalsMode) {
      const prevValue = this.state.display;
      this.setState(state => ({
        display: text,
        calculationDisplay: operator ? prevValue.toString() + text : text,
        equalsMode: false }));

    } else {
      if (this.state.display == '0' && text == '0') {

      } else
      if (/\./g.test(this.state.display.toString()) && text == '.') {

      } else
      if ((this.state.display.toString() + text.toString()).length > 12 || this.state.display.toString() == 'DIGIT LIMIT') {
        this.setState(state => ({
          display: 'DIGIT LIMIT' }));

      } else
      if (this.state.display === '0') {
        // clear state, just remove 0 and start putting numbers in
        this.setState(state => ({
          display: text,
          calculationDisplay: state.calculationDisplay === '0' ? text : state.calculationDisplay.toString() + text.toString() }));

      } else
      {
        this.setState(state => ({
          display: state.display.toString() + text.toString(),
          calculationDisplay: state.calculationDisplay.toString() + text.toString() }));

      }
    }
  }

  operatorFunction(op) {
    this.appendToDisplay(op, true);
    this.clearDisplay(false);
  }

  handleEquals() {
    if (!this.state.equalsMode) {
      let formularToEval = this.state.calculationDisplay.toString();
      if (/[+\-*\/]{2,}/g.test) {
        formularToEval = formularToEval.replace(/(\d)[+\-*\/]*([+*\/]+|[+*\/]+-)(\d)/gmi, '$1$2$3');
      }
      const solution = Math.round(eval(formularToEval) * 1000000000000) / 1000000000000;
      this.setState(state => ({
        display: solution,
        calculationDisplay: state.calculationDisplay + "=" + solution,
        equalsMode: true }));

    }
  }

  render() {
    const numberButtons = numbers.map(val => {
      return /*#__PURE__*/React.createElement(CalculatorButton, { value: val.value, name: val.name, clickHandler: this.appendToDisplay, col: val.col });
    });
    const operatorButtons = operators.map(val => {
      return /*#__PURE__*/React.createElement(OperatorButton, { value: val.value, name: val.name, clickHandler: this.operatorFunction });
    });
    return /*#__PURE__*/(
      React.createElement("div", { className: "calculator container my-auto" }, /*#__PURE__*/
      React.createElement(CalculatorCalculationDisplay, { calculationDisplay: this.state.calculationDisplay }), /*#__PURE__*/
      React.createElement(CalculatorDisplay, { display: this.state.display }), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-12" }, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement(ClearButton, { clickHandler: this.clearDisplay }),
      operatorButtons.slice(0, 2)), /*#__PURE__*/

      React.createElement("div", { className: "row" },
      numberButtons.slice(0, 3),
      operatorButtons.slice(2, 3)), /*#__PURE__*/

      React.createElement("div", { className: "row" },
      numberButtons.slice(3, 6),
      operatorButtons.slice(3, 4)), /*#__PURE__*/

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-9" }, /*#__PURE__*/
      React.createElement("div", { className: "row" },
      numberButtons.slice(6, 9)), /*#__PURE__*/

      React.createElement("div", { className: "row" },
      numberButtons.slice(9, 12))), /*#__PURE__*/


      React.createElement("div", { className: "col-3" }, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement(EqualsButton, { clickHandler: this.handleEquals }))))))));







  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById('app'));