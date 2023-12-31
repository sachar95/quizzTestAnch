import { useState } from 'react';
import { Questions } from '../types/Questions';
import { UserResponse } from '../types/UserResponse';
import scoreCalculator from '../helpers/scoreCalculator';

const useScoreCalculator = (): { calculate: (questions:Array<Questions>,UserResponses:UserResponse) => void, scoreFinal: string } => {
  const [scoreFinal, setScoreFinal] = useState<string>('')

  const calculateScore = (questions:Array<Questions>,UserResponses:UserResponse) : void => {
        const score = scoreCalculator(questions,UserResponses)
        setScoreFinal(score)
  }

  return { calculate: calculateScore, scoreFinal };
}

export default useScoreCalculator;
