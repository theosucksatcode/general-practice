import { useState } from "react";

function App() {
  const questions = [
    {
      question: "What is the capital city of France?",
      options: ["Paris", "Lyon", "Marseille", "Nice"],
      answer: "Paris",
    },
    {
      question: "How many cylinders does a Bugatti Bolide have?",
      options: ["8", "12", "16", "10"],
      answer: "16",
    },
  ];

  const [currQuestion, setCurrQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [userFeedback, setUserFeedback] = useState(null);

  function handleSubmit() {
    if (selectedOption === questions[currQuestion].answer) {
      setUserFeedback(`You got Q${currQuestion + 1} correct!`);
      setUserScore(userScore + 1);
    } else {
      setUserFeedback(`You got Q${currQuestion + 1} wrong!`);
    }

    setSelectedOption(null);
    setCurrQuestion(currQuestion + 1);
  }

  if (currQuestion > questions.length - 1) {
    return (
      <>
        <h1>Quiz finished!</h1>
        <p>
          You got {userScore}/{questions.length}
        </p>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>{questions[currQuestion].question}</h1>
      </div>
      <div>
        {questions[currQuestion].options.map((opt, idx) => {
          const unique = `option${idx + 1}`;
          return (
            <div key={unique}>
              <input
                type="radio"
                name="options"
                id={unique}
                checked={selectedOption === opt}
                onChange={() => setSelectedOption(opt)}
              />
              <label htmlFor={unique}>{opt}</label>
            </div>
          );
        })}
      </div>
      {userFeedback ? <p>{userFeedback}</p> : <></>}
      <div>
        <button onClick={handleSubmit}>Next question</button>
      </div>
    </>
  );
}

export default App;
