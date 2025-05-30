import { useState } from "react";
import ProgressBar from "./ProgressBar";


function FlashCard(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);


  }
  const handleQuestionAnswer = ()=>{
    setShowAnswer(false);
  }

  return (
    <div className="outerBox">
      <div className="questionBox">
        {showAnswer ? (
          <>
            <h3> Answer </h3>
            <p> {props.answer}</p>

          </>
        ) : (
          <>
            <h3>Question</h3>
            <p>{props.question}</p>
          </>

        )}
      </div>

      <div className="innerBox">
        <div className="buttonBox">
          <button onClick={()=> {handleQuestionAnswer();props.onPrevious()}}> &lt;Previous</button>



          {showAnswer ? (
            <button onClick={()=>{handleQuestionAnswer()}} id="Answer"> show Question</button>
          ):(
          <button onClick={handleShowAnswer}  id="Answer"> show Answer</button>
          )}

          <button onClick={()=>{handleQuestionAnswer();props.onNext()}}>  Next &gt;</button>
        </div>

      </div>
    </div>
  
  );
}
export default FlashCard;
