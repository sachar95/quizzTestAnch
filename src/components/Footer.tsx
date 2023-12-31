import React, { useContext } from 'react';
import { UserResponseContext } from '../context/context';
import '../styles/Footer.css'
import { FooterProps } from '../types/Footer';

const Footer: React.FC<FooterProps> = ({calculateFinalScore,questions,setIndex,currentIndex,dataLength}) => {
  const userResponses = useContext(UserResponseContext)
  const userResponseCliked = !!userResponses.find(obj => obj.id === currentIndex + 1)

  return (
    <div data-testid="footer-component" className="footer">
      <button className="button" disabled={!currentIndex} onClick={() => setIndex('previous')}>previous</button>
     {dataLength - 1 === currentIndex ? 
      <button className="button" disabled={!userResponseCliked} onClick={() => calculateFinalScore(questions,userResponses)}>submit</button> 
      : <button className="button" disabled={!userResponseCliked} onClick={() => setIndex('next')}>next</button>} 
    </div>
  );
};

export default Footer;
