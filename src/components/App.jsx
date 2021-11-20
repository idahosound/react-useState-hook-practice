import React from "react";


function App() {
   
  const [currentTime, setTime] = React.useState(getTime);

  function getTime(){
    const Time = new Date().toLocaleTimeString();
    return Time
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={() => setTime(getTime)}>Get Time</button>
    </div>
  );  
}

export default App;

