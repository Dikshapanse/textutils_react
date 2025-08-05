import React,{useState} from "react";

export default function TextFrom (props){   
    const [text, setText] = useState('');

    // Text to Upper Case
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }

    // Text To Lower Case 
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }

    // Clear Text
    const handleClearClick = () => {
        let newText = " ";
        setText(newText)
        props.showAlert("Text cleared!", "success")
    }
    // Speak Text
    const handleSpeak =()=> {
        // Create a SpeechSynthesisUtterance
        const utterance = new SpeechSynthesisUtterance(text);
     
        // Select a voice
        const voices = speechSynthesis.getVoices();
        utterance.voice = voices[2]; // Choose a specific voice
      
        // Speak the text
        speechSynthesis.speak(utterance);
        props.showAlert("Text speak!", "success")
     }

     // Copy the text
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipbord!", "success")
    }
    // Remove Extra Spases
    const handleExtraSpaces = () => {
        let newText = text.split( /[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed !", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    return (
        <>
            <div className="container" style={{color:props.mode === 'dark'?'white':'#1a2832'}}>
                <h2 className="mb-3">{props.heading} </h2>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter your text" style={{backgroundColor:props.mode === 'dark'?'#1a2832':'white', color:props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>

                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpeak}>Speak</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>



            </div>
            <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#2a3b46'}}>
                <h2>Your text summary</h2>
                <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</b></p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}