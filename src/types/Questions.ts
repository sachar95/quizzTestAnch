import { UserResponse } from "./UserResponse"

export type Questions = {
    id:number,
    question:string,
    options:Array<{id:number,text:string}>,
    correctAnswerId:number
}

export interface QuestionProps {
    data:Questions,
    setUserResponse:(response:UserResponse) => void
  }