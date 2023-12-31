import { Questions } from "./Questions";
import { UserResponse } from "./UserResponse";

export interface FooterProps {
    calculateFinalScore:(questions:Array<Questions>,UserResponses:UserResponse)=>void,
    questions:Array<Questions>,
    setIndex:(status:string,score?:string) => void,
    currentIndex:number,
    dataLength:number
  }