import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>setup quiz</h2>
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input
              className='form-input'
              type='number'
              name='amount'
              id='amount'
              value={quiz.amount}
              min={1}
              max={50}
              onChange={handleChange}
            />
          </div>
          {/* category */}
          <div className='form-control'>
            <label htmlFor='category'>select category</label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.category}
              onChange={handleChange}
            >
              <option value='sport'>sport</option>
              <option value='history'>history</option>
              <option value='politics'>politics</option>
              <option value='mythology'>mythology</option>
              <option value='geography'>geography</option>
              <option value='computer'>computer</option>
              <option value='general'>general</option>
              <option value='books'>books</option>
              <option value='film'>film</option>
              <option value='music'>music</option>
            </select>
          </div>
          {/* difficulty */}
          <div className='form-control'>
            <label htmlFor='difficulty'>select difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>
          {error && (
            <p className='error'>
              {" "}
              can't generate questions , please use different options
            </p>
          )}
          <button className='submit-btn' onClick={handleSubmit}>
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
