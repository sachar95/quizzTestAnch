import React from 'react';
import '../styles/FinalScore.css';
import { FinalScoreProps } from '../types/FinalScore';

const FinalScore: React.FC<FinalScoreProps> = ({ finalScore }) => {
  return (
    <div className="final-score-container">
      <h2>Final Score</h2>
      <div className="score">{finalScore}</div>
    </div>
  );
};

export default FinalScore;
