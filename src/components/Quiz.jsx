import { useState, useCallback } from 'react';
import Question from './Question';
import Summary from './Summary';

import QUESTIONS from '../questions';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const isQuizFinished = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnser) {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnser]
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);
        

    if (isQuizFinished) {    
        return <Summary userAnswers={userAnswers} />;
    } 
   
    return (
        <div id="quiz">
           <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
           />
        </div>
    );

}