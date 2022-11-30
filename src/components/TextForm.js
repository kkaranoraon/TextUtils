import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClickUpper =() => {
        //console.log("UpperCase was Clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleUpClickLower =() => {
        //console.log("UpperCase was Clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleUpClickClear=() => {
        //console.log("UpperCase was Clicked"+text);
        let newText = "";
        setText(newText);
    }
    const hanldeonChange = (event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
    const [text,setText] = useState("");
    return (
        <>  
        <div>
            <h1 className='my-5 text-center'>Enter the text to analize here!</h1>
            <div className="mb-3">
                <label htmlfor="mybox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={hanldeonChange} id="mybox" rows="8"></textarea>
    
                <button className="btn btn-primary my-3" onClick={handleUpClickUpper} type="submit">Convert to UpperCase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleUpClickLower} type="submit">Convert to LowerCase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleUpClickClear} type="submit">Clear</button>

            </div>
        </div>
        <div className='container my-3'>
            <h1>Your Text Summary:</h1>
            <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
            <p>{0.008*text.split(" ").length} Minutes Read</p>
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
        </>

    )
}
