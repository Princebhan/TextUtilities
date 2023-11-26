import React ,{useState}from 'react'

export default function About(props) {
  const [mystyle,setMystyle]=useState({
    color:'white',
    backgroundColor:'black'
});

const [btntext,setBtntext]=useState("Light Mode")

const toggle=()=>
{
    if(mystyle.color==='white')
    {
        setMystyle({
            color:'black',
             backgroundColor:'white',
             

        })
        setBtntext("Dark mode")
    }
    else{
        setMystyle({
            color:'white',
             backgroundColor:'black'

        })
        setBtntext("Light mode")

    }
}

  return (

<div className="conatiner" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1 className='my-4 text-center'>About us</h1>
    <h3 className='my-3'>Get to know Text Utility - Free Online Text Formatter</h3>
    <p>Text Utility is a Free Online Word Counter and character counter tool which can manipulate your text the way you want. Free tool to change text case, change Uppercase to lowercase, lowercase to uppercase, remove extra space for Free. You can copy your manipulated text and use it anywhere.
       Text Utility is not create to replace any word processor, but the formatting tools available here can help speed up some jobs which might otherwise be long, repetitive and time consuming. Text Utility can also tells you how many words and characters are in your text in no Time.
    </p><hr></hr><br></br>

    <h3>What is Text Utility?</h3>
    <p>Text Utility is a collection of useful text manipulating tools. All text tools are just simple, free and easy to use. A utility created to help the users play around with the text formatting, the way they need.</p>
    <br></br>

    <h3>What are the tools available in Text Utility?</h3>

    <ul>
      <li><strong>Word and character counter</strong></li>
      <p>Word Counter is a completely free online tool in Text Utility Web App which helps you quickly count the number of words, characters in a paragraph. You need to count the word count of a piece of text, or you are writing a topic with a limited number of words...
          Don't worry, Text Utility word counter will help you.</p>
    </ul>

    <ul>
      <li><strong>Text case changer - Normal to lowercase, lowercase to uppercase, uppercase to lowercase</strong></li>
      <p>
      Using this tool you can change the case of the entered text in just one link, as per your requirement.

      </p>
      </ul>

      <ul>
      <li><strong>Clear Text</strong></li>
      <p>
      Using this tool you can change the case of the entered text in just one link, as per your requirement.
      and clear text

      </p>
      </ul>
      <br></br><br></br>

      <div className='text-center'>
        <h4>© Copyright 2024. All Right Reserved. Made with  By <a href="https://www.instagram.com/prince_.022/">prince</a></h4>
      </div>



</div>
  );
}
