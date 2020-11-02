import React from 'react';

function App() {
  return (
    <div className="App">
      Hello React
      <FuncComp></FuncComp>
      <ClassComp></ClassComp>
    </div>
  );
}

function FuncComp () {
  return (
    <div class="container">
      <h2>function style component</h2>
    </div>
  )
}

class ClassComp extends React.Component {
  render() {
    return (
      <div class="container">
        <h2>Class style component</h2>
      </div>
    )
  }
}

export default App;