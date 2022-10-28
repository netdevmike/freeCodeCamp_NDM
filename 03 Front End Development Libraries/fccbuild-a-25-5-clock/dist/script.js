const whiteColor = { "color": "white" };
const redColor = { "color": "red" };
const forBreak = {
  "id": "break-label",
  "displayName": "Break Length",
  "decrementID": "break-decrement",
  "incrementID": "break-increment",
  "lengthID": "break-length",
  "defaultDisplayVal": 5 * 60 };

const forSession = {
  "id": "session-label",
  "displayName": "Session Length",
  "decrementID": "session-decrement",
  "incrementID": "session-increment",
  "lengthID": "session-length",
  "defaultDisplayVal": 25 * 60 };

const timerDetails = {
  "defaultDisplayVal": 25 * 60 };


function formatTime(time, type) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (type == "timer") {
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    //console.log("time passed - "+time+" time-left - " + minutes + ':' + seconds);
    return minutes + ':' + seconds;
  } else
  {
    return minutes;
  }
}



var Html = () => {
  const [timerValue, setTimerValue] = React.useState(timerDetails.defaultDisplayVal);
  const [breakLengthVal, setBreakLengthVal] = React.useState(forBreak.defaultDisplayVal);
  const [sessionLengthVal, setSessionLengthVal] = React.useState(forSession.defaultDisplayVal);
  const [isTimerOn, setIsTimerOn] = React.useState(false);
  const [onBreak, setOnBreak] = React.useState(false);
  const [timerColor, setTimerColor] = React.useState(whiteColor);
  let audioBeep = null;

  function handleTimeControl() {
    let seconds = 1000;
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + seconds;
    let onBreakVar = onBreak;
    let audio = audioBeep;
    if (!isTimerOn) {
      let interval = setInterval(() => {
        date = new Date().getTime();
        if (date > nextDate) {
          setTimerValue(prevState => {
            if (prevState <= 0 && !onBreakVar) {
              // if count down is 0 and on session count
              audio.play();
              onBreakVar = true; //break will start
              setOnBreak(true);
              return breakLengthVal;
            } else
            if (prevState <= 0 && onBreakVar) {
              // if count down is 0 and on break count
              audio.play();
              onBreakVar = false; //session will start
              setOnBreak(false);
              return sessionLengthVal;
            }
            return prevState - 1;
          });
          nextDate += seconds;
        }
      }, 30);
      localStorage.clear();
      localStorage.setItem('interval-var', interval);
    }
    if (isTimerOn) {
      clearInterval(localStorage.getItem('interval-var'));
    }
    setIsTimerOn(!isTimerOn);
  }

  function handleReset() {
    setTimerValue(timerDetails.defaultDisplayVal);
    setBreakLengthVal(forBreak.defaultDisplayVal);
    setSessionLengthVal(forSession.defaultDisplayVal);
    if (isTimerOn) {
      clearInterval(localStorage.getItem('interval-var'));
    }
    setIsTimerOn(false);
    setOnBreak(false);
    audioBeep.pause();
    audioBeep.currentTime = 0;
  }

  function handleLengthControls(value, id) {
    if (isTimerOn) {return;}

    if (id.match("break")) {
      if (breakLengthVal <= 60 && value < 0 || breakLengthVal >= 3600 && value > 0) {
        return;
      }
      //increment/decrement have -/+sign in value
      setBreakLengthVal(prevState => {
        if (!isTimerOn && onBreak) {
          setTimerValue(prevStatebreakLengthVal + value);
        }
        return prevState + value;
      });

    } else
    {
      if (sessionLengthVal <= 60 && value < 0 || sessionLengthVal >= 3600 && value > 0) {
        return;
      }
      //increment/decrement have -/+sign in value
      setSessionLengthVal(prevState => {
        if (!isTimerOn && !onBreak) {
          setTimerValue(prevState + value);
        }
        return prevState + value;
      });

    }

    console.log('after change - breakLengthVal = ' + breakLengthVal + ', sessionLengthVal = ' + sessionLengthVal + ', timerValue = ' + timerValue);
  }

  return /*#__PURE__*/React.createElement("div", { id: "wrapper" }, /*#__PURE__*/
  React.createElement("div", { className: "main-title" }, "25 + 5 Clock"), /*#__PURE__*/
  React.createElement(LengthControl, { type: forBreak, lengthVal: breakLengthVal, onClick: handleLengthControls }), /*#__PURE__*/
  React.createElement(LengthControl, { type: forSession, lengthVal: sessionLengthVal, onClick: handleLengthControls }), /*#__PURE__*/
  React.createElement(Timer, { detail: timerDetails, timerVal: timerValue, onBreak: onBreak, timerColor: timerColor }), /*#__PURE__*/
  React.createElement(TimerControl, { handleTimeControl: handleTimeControl, handleReset: handleReset, isTimerOn: isTimerOn }), /*#__PURE__*/
  React.createElement("audio", { id: "beep", preload: "auto", ref: audio => {
      audioBeep = audio;
    },
    src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" }));


};

var LengthControl = props => {
  return /*#__PURE__*/React.createElement("div", { className: "length-control" }, /*#__PURE__*/
  React.createElement("div", { id: props.type.id }, props.type.displayName), /*#__PURE__*/
  React.createElement("button", { className: "btn-level", id: props.type.decrementID, onClick: () => props.onClick(-60, props.type.decrementID), value: "-" }, /*#__PURE__*/
  React.createElement("i", { className: "fa fa-arrow-down fa-2x" })), /*#__PURE__*/

  React.createElement("div", { className: "btn-level", id: props.type.lengthID }, formatTime(props.lengthVal, 'length')), /*#__PURE__*/
  React.createElement("button", { className: "btn-level", id: props.type.incrementID, onClick: () => props.onClick(60, props.type.incrementID), value: "+" }, /*#__PURE__*/
  React.createElement("i", { className: "fa fa-arrow-up fa-2x" })));


};

var Timer = props => {
  const [timerColor, setTimerColor] = React.useState(whiteColor);

  React.useEffect(() => {
    props.timerVal < 60 ? setTimerColor(redColor) : setTimerColor(whiteColor);
  }, [props.timerVal]);

  return /*#__PURE__*/React.createElement("div", { className: "timer", style: timerColor }, /*#__PURE__*/
  React.createElement("div", { className: "timer-wrapper" }, /*#__PURE__*/React.createElement("div", { id: "timer-label" }, props.onBreak ? 'Break' : 'Session'), /*#__PURE__*/
  React.createElement("div", { id: "time-left" }, formatTime(props.timerVal, 'timer'))));


};

var TimerControl = props => {
  return /*#__PURE__*/React.createElement("div", { className: "timer-control" }, /*#__PURE__*/
  React.createElement("button", { id: "start_stop", onClick: props.handleTimeControl },
  props.isTimerOn ? /*#__PURE__*/
  React.createElement("i", { className: "fa fa-pause fa-2x" }) : /*#__PURE__*/
  React.createElement("i", { className: "fa fa-play fa-2x" })), /*#__PURE__*/


  React.createElement("button", { id: "reset", onClick: props.handleReset }, /*#__PURE__*/
  React.createElement("i", { className: "fa fa-refresh fa-2x" })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(Html, null), document.getElementById("app"));