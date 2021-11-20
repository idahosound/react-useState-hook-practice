import React from "react";


function App() {
   
  const [currentTime, setTime] = React.useState(getTime);

  function getTime(){
    const Time = new Date().toLocaleTimeString();
    return Time
  }

  function updateTime(){
    setTime(getTime)
  }

  setInterval(updateTime, 1000)

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );  
}

export default App;

