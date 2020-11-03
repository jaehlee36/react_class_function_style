import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      Hello React
      <FuncComp initNumber={2} initNumber2={3}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}
var funcStyle = 'color:red';
var funcId= 0;

function FuncComp (props) {
  var numberStateArray = useState(props.initNumber); // useState가 return하는 배열
  var number = numberStateArray[0]; // 초기값
  var setNumber = numberStateArray[1]; // setState같은 함수

  // var dateState = useState((new Date()).toString());
  // var _date = dateState[0];
  // var setDate = dateState[1];

  var [_date, setDate]  = useState( (new Date()).toString() );
  

  console.log("%c func => render" + (++funcId), funcStyle)
  return (
    <div class="container">
    <h2>Class style component</h2>
    <p>Number: {number}</p>
    <p>Date: {_date}</p>
    <input type="button" value="random" onClick={
      function(e){
        setNumber(Math.random());
      }
    }></input>
    <input type="button" value="date" onClick={
      function(e) {
        setDate((new Date()).toString());
      }
    }></input>
  </div>
  )
}

class ClassComp extends React.Component {
  state= {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }
  render() {
    return (
      <div class="container">
        <h2>Class style component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input type="button" value="random" onClick={
          function(e){
            // e.preventDefault();
            this.setState({ number: Math.random()})
          }.bind(this)
        }></input>
      <input type="button" value="date" onClick={
        function(e) {
          this.setState({date: (new Date()).toString()})
        }.bind(this)
      }></input>
      </div>
    )
  }
}

export default App;
