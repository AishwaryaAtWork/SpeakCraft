import React from 'react';
// import SpeechRecognition , {useSpeechReco}

const App = () =>{
  return (
    <>
       <div className='container'>
          <h2>SpeakCraft</h2>
          <p>A <strong>Speech To Text</strong> Converter Application.</p>

          <div className="main-content">

          </div>

          <div className="btn-style">
            <button>Copy to clipboard</button>
            <button>Start Listening</button>
            <button>Stop Listening</button>
          </div>
       </div>
    </>
  )
}

export default App;
