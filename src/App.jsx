import React from 'react';
import SpeechRecognition , { useSpeechRecognition } from 'react-speech-recognition';

const App = () =>{

  SpeechRecognition.startListening({continuous: true});
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if(!browserSupportsSpeechRecognition){
    return null;
  }

  return (
    <>
       <div className='container'>
          <h2>SpeakCraft</h2>
          <p>A <strong>Speech To Text</strong> Converter Application.</p>

          <div className="main-content">
            {transcript}
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
