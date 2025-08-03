import React,{useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor: 'white'
    // })
    let myStyle = {
        backgroundColor: props.mode ==='dark'?'#1a2832':'white',
        color: props.mode ==='dark'?'white':'#1a2832'
    }
    
  return (

    <div className="container" style={myStyle}>
        <h1 className='my-3' style={{ color: props.mode ==='dark'?'white':'#1a2832'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        <strong>Analze your text</strong> 
                    </button>
                </h2>
                <div className="accordion-body" style={myStyle}>
                    TxtUtils gives you a way to analyze your text Quickly and efficiently. Be it word count, character count or
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                        <strong>Free to use</strong>
                    </button>
                </h2>
                <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provides  instant character count & word count statistics for a given text. TextUtils reports the number of word and characters. thus it is suitable for writing text with word/ character limit.
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                       <strong>Browser compatible</strong>
                    </button>
                </h2>
                <div className="accordion-body" style={myStyle}>
                    this word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari. Opera. It suits to word characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
            </div>
        </div>
    </div>
  )
}
