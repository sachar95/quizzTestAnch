import data from "./models/dataQuizz";
import Footer from "./components/Footer";
import Question from "./components/Questions";
import "./App.css";
import { useState } from "react";
import React from "react";
import { UserResponseContext } from "./context/context";
import useScoreCalculator from "./hooks/useScoreCalculator";
import FinalScore from "./components/FinalScore";


function App() {
  const [indexPages, setIndexPages] = useState<number>(0)
  const { calculate ,scoreFinal } = useScoreCalculator();

  const setIndex:(status:string) => void = (status) => {
    let index = indexPages
    if(status === 'previous'){
      setIndexPages(--index)
    }else if(status === 'next'){
      index += 1
      setIndexPages(index)
    }
  }

  const [userResponse,setUserResponse] = useState<{id:number,idResponse:number}[] | [] >([])

  return (
    <UserResponseContext.Provider value={userResponse}>
    <div className="App">
      <div className="container">
        {
          scoreFinal ? <FinalScore finalScore={scoreFinal}/>:
          <>
            <h1 className="questionNumber">questions number {indexPages + 1}</h1>
            <Question data={data.quiz[indexPages]} setUserResponse={setUserResponse} />
            <Footer calculateFinalScore={calculate} questions={data.quiz} setIndex={setIndex} currentIndex={indexPages} dataLength={data.quiz.length} />
          </>
        }
      </div>
    </div>
    </UserResponseContext.Provider>
  );
}

export default App;
