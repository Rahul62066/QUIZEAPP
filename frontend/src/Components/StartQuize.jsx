import React, { useState } from 'react'
import { Quizedata } from '../Data/Quizedata'
import ResultPage from './Resultpage';
import Timer from './Timer';


import '../Styles/timer.scss';
import '../Styles/ResultPage.scss';

const StartQuize = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [click, setClick] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [show,setShow]=useState("Best of Luck..");
   

    const Nextquestion = () => {
        updateScore();

        setClickedOption(0);

        if (currentQuestion < Quizedata.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
        else {
            thought();
            setShowScore(true);
        }
    }
    const Previousquestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }
    const updateScore = () => {
        if (clickedOption === Quizedata[currentQuestion].answer) {
            setScore(score + 1);
           
        }

    }
    const QuizeAgain = () => {
        setClickedOption(0);
        setScore(0);
        setCurrentQuestion(0);
        setShowScore(false);
    }
    const ResetQuestion = (i, key) => {
       

        setCurrentQuestion();

    }
    const thought = () => {
        if(score>(Quizedata.length)/2){
            setShow("Very Good Score");
        }
        else if(score>Quizedata.length-3){
            setShow("Excelent Score");
        }
        else if(score==Quizedata.length){
            setShow("Outstading performance");
        }
        else{
            setShow("Better Luck Next Time");
        }
    }

    return (<>
        <div className='startQuize'>
            <div>
            <div className='question'>
                {Quizedata.map((key, i) => {
                    return (<>

                        <button className={"circle " + (click === i + 1 ? 'selected' : null)}
                            onClick={() => { return (setClick(i + 1), ResetQuestion()) }}
                        >{Quizedata[i].key}</button>
                    </>
                    )
                })}
            </div>
            <div className='quize'>

                <div>
                    <h1>{show}</h1>

                    {showScore ? (
                        <ResultPage score={score} totalScore={Quizedata.length} tryAgain={QuizeAgain} />) : (

                        <>
                            <div>
                                <div className='question'>

                                    <span>{Quizedata[currentQuestion].question}</span>
                                </div>
                                {Quizedata[0].options.map((options, i) => {

                                    return (<>

                                        <button className={"button " + (clickedOption === i + 1 ? 'selected' : null)}
                                            key={i}
                                            onClick={() => { return (setClickedOption(i + 1)) }}

                                        >
                                            {Quizedata[currentQuestion].options[i]}</button>

                                    </>
                                    )
                                })}
                                <div className='handlebutton'>
                                    <input type="button" value="Previous" onClick={Previousquestion} />
                                    <Timer />
                                    <input type="button" value="Next" onClick={Nextquestion} />
                                </div>
                            </div>
                            
                        </>
                    )
                    }

                </div>


            </div>
            </div>

        </div>
    </>)
}

export default StartQuize