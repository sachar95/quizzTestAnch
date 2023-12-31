import { Questions } from "../types/Questions"
import { UserResponse } from "../types/UserResponse"

const scoreCalculator = (questions:Array<Questions>,UserResponses:UserResponse) : string => {
    let correctAnswer = 0
    const pointQuestion = 100 / questions.length
    UserResponses.forEach(response => {
        if(questions[response.id - 1].correctAnswerId === response.idResponse){
            correctAnswer += 1
        }
    })
    return `${Math.round(correctAnswer * pointQuestion)}`
}

export default scoreCalculator