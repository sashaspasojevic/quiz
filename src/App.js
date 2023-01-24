import React from "react";
import "./App.css";
import { useGlobalContext } from "./context";
import Loading from "./Loading";
import Modal from "./Modal";
import SetupForm from "./SetupForm";

function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if (waiting) {
    return <SetupForm></SetupForm>;
  }

  if (loading) {
    return <Loading></Loading>;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];

  const answers = [...incorrect_answers];

  const tempIndex = Math.floor(Math.random() * 4);

  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <main>
      <Modal></Modal>
      <section className='quiz'>
        <p className='correct-answers'>
          correct answer: {correct}/{index}{" "}
        </p>
        <article className='contaiener'>
          <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
          <div className='btn-container'>
            {answers.map((answer, index) => {
              return (
                <button
                  className='answer-btn'
                  key={index}
                  dangerouslySetInnerHTML={{ __html: answer }}
                  onClick={() => {
                    checkAnswer(correct_answer === answer);
                    nextQuestion();
                  }}
                ></button>
              );
            })}
          </div>
        </article>
        <button className='next-question' onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
