import React from 'react';
import SpeechRecognition , { useSpeechRecognition } from 'react-speech-recognition';

const App = () =>{

  const startListening = () => SpeechRecognition.startListening({continuous: true, language: 'en-IN'});
  const stopListening = () => SpeechRecognition.stopListening();
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
            <button onClick={startListening}>Start Listening</button>
            <button onClick={stopListening}>Stop Listening</button>
          </div>
       </div>
    </>
  )
}

export default App;
