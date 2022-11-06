// ES6 //
const funcSpeechToText = (evt) => {
    window.SpeechRecognition = window.SpeechRecognition ||  window.webkitSpeechRecognition;
    const recognition = new window.SpeechRecognition();
    recognition.lang = 'th-TH' // change lang
    recognition.interimResults = true;
    recognition.continuous = true;
    if(evt === true){
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            const confidence = event.results[0][0].confidence;
            return [transcript, confidence]
        };
        recognition.start();
    }else{
        recognition.stop();
    }
}


export default funcSpeechToText