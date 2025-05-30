import ProgressBar  from "./ProgressBar.jsx"
import FlashCard from "./FlashCard.jsx"
import { useState } from "react"  
function App() {
  const [flashcards]=useState([
    {  question: "What is React?", answer: "A JavaScript library for building user interfaces" },
    {  question: "What is a Hook?", answer: "A special function that lets you use state and other React features" },
    {  question: "What is the difference between var,let and const",answer: "In JavaScript,var is function-scoped and can be re-declared;let and const are block-scoped, with let allowing re-assignment and const preventing it.However, const objects can have their contents modified" },
    {  question: "What is the difference between var,let and const",answer: "In JavaScript,var is function-scoped and can be re-declared;let and const are block-scoped, with let allowing re-assignment and const preventing it.However, const objects can have their contents modified" },
    {  question: "What is the difference between var,let and const",answer: "In JavaScript,var is function-scoped and can be re-declared;let and const are block-scoped, with let allowing re-assignment and const preventing it.However, const objects can have their contents modified" },
    {  question: "What is the difference between var,let and const",answer: "In JavaScript,var is function-scoped and can be re-declared;let and const are block-scoped, with let allowing re-assignment and const preventing it.However, const objects can have their contents modified" },
    {  question: "What is the difference between var,let and const",answer: "In JavaScript,var is function-scoped and can be re-declared;let and const are block-scoped, with let allowing re-assignment and const preventing it.However, const objects can have their contents modified" },     {  question: "What is the difference between var,let and const",answer: "In JavaScript,var is function-scoped and can be re-declared;let and const are block-scoped, with let allowing re-assignment and const preventing it.However, const objects can have their contents modified" },
    {  question: "What is the difference between var,let and const",answer: "In JavaScript,var is function-scoped and can be re-declared;let and const are block-scoped, with let allowing re-assignment and const preventing it.However, const objects can have their contents modified" },
    {  question: "What is the difference between var,let and const",answer: "In JavaScript,var is function-scoped and can be re-declared;let and const are block-scoped, with let allowing re-assignment and const preventing it.However, const objects can have their contents modified" },


  ])
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentCard = flashcards[currentIndex]



  const NextCard = () => {
    if(currentIndex<flashcards.length-1)
    setCurrentIndex((prevIndex) => (prevIndex + 1))
  }

  
  const PreviousCard = () => {
    if(currentIndex<1){
      //nichts tun

    }
    else{
    setCurrentIndex((prevIndex) => (prevIndex - 1));
    }
  }
     const progress=Math.round(((currentIndex+1)/flashcards.length)*100)


   


  

  return(
  <>
  <h2>Flashcard App</h2>
  <div className="container">
  <ProgressBar progress={progress} />
  
        <FlashCard  question={currentCard.question} answer={currentCard.answer} onNext={NextCard} onPrevious={PreviousCard}/>
      
  </div>
  
  </>
  )
  
}
export default App
