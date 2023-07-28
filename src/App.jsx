import React, { useState } from 'react';
import SpeechRecognition , { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';

const App = () =>{

  const [textToCopy, setTextToCopy] =  useState();

  const [isCopied, setCopied ] = useClipboard(textToCopy, {
    successDuration:1000
});
  
  const copy = (text) =>{
    setTextToCopy(text);
    setCopied();
  }

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
            <button onClick={() => copy(transcript)}>{isCopied ? "Copied to clipboard" : "Copy to clipboard"}</button>
            <button onClick={startListening}>Start Listening</button>
            <button onClick={stopListening}>Stop Listening</button>
          </div>
       </div>
    </>
  )
}

export default App;
