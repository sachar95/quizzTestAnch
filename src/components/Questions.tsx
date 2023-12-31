import React, { ChangeEvent, useContext, useEffect, useState } from 'react'

import { UserResponseContext } from '../context/context'
import { QuestionProps } from '../types/Questions'

import '../styles/Question.css'


const Question: React.FC<QuestionProps> = ({data,setUserResponse}) => {
    const userResponses = useContext(UserResponseContext)
    const {id,question,options} = data    
    const [valueChecked,setValueChecked] = useState<string | null>(null)

    const handleCheck = (e:ChangeEvent<HTMLInputElement>) => {
      const userResponseId = e.target.id
        setValueChecked(userResponseId)
        const answerToUpddate = userResponses.findIndex(obj => obj.id === id)
        if(answerToUpddate !== -1){
            let newUserReponse = userResponses.map(response => {
                return response.id === id ? {...response,idResponse:parseInt(userResponseId)} : response
            })
            setUserResponse(newUserReponse)
        }else{
            setUserResponse([...userResponses,{id,idResponse:parseInt(userResponseId)}])
        }
    }

    useEffect(() =>{
        const currentResponseByPage = userResponses.find(obj => obj.id === id)
        setValueChecked(`${currentResponseByPage?.idResponse}`)
    },[id,userResponses])

  return (
    <div data-testid="question-component" className="questionsContainer">
          <div className="question">
            <h3 className='titleQuestion'>
              {question}
            </h3>
          </div>
          <div className="answersContainer">
            {options.map((option:{id:number,text:string},index:number) =>{
                return (
                    <div className='checkboxQuestion' key={index}>
                        <input 
                          data-testid={`answer-${option.id}`} 
                          id={`${option.id}`}  
                          type="checkbox" 
                          onChange={handleCheck} 
                          checked={valueChecked === `${option.id}`}
                        />
                        <span>{option.text}</span>
                    </div>
                )
            })}
          </div>
    </div>
  )
}

export default Question
