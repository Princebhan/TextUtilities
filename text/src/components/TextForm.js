import React,{useState} from 'react'

export default function TextForm(props) {

  const handleupclick=()=>{
   // console.log("uppercase was clicked" + text);
    let newtext=text.toUpperCase();
    setText(newtext);
  }

  const handleloclick=()=>{
    // console.log("uppercase was clicked" + text);
     let newtext=text.toLowerCase();
     setText(newtext);
   }

   const handleclearclick=()=>{
    // console.log("uppercase was clicked" + text);
     let newtext='';
     setText(newtext);
   }

   const handleCopyClick = () => {
    const textarea = document.getElementById('Mybox');
    textarea.select();
    document.execCommand('copy');
    // You can display a message or update the UI to indicate that the text has been copied.
    // For example: alert('Text copied to clipboard!');
  };

  const handleRemoveSpaceClick = () => {
    let newtext = text.replace(/\s+/g, ' ');
    setText(newtext);
  };
  
  const handleTitleClick = () => {
    let newtext = text
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    setText(newtext);
  };

  const onchangetext=(event)=>{
    //console.log("on change");
    setText(event.target.value);
  }
  
  // eslint-disable-next-line 
  const [text,setText]=useState('');
  return (
    <>
    <div className='container'  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={onchangetext}id="Mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleupclick}>Convert To UpperCase</button> 
            <button className="btn btn-primary mx-2 my-1" onClick={handleloclick}>Convert To LowerCase</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleTitleClick}>Title Case</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleclearclick}>Clear</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleCopyClick}>Copy</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleRemoveSpaceClick}>Remove Extra Space</button>

    </div>
    <div className="container  my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your Text Summary</h1>
      <h4>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</h4>
      <h4>{0.008 * text.length} Take time to read</h4>

      <h2>Preview</h2>
      <h4>{text.length>0?text:"Enter Something"}</h4>
    </div>
    </>
  )
}
