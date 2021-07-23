import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { checkIfValid, validateEmail } from '../utils/helpers';

const Build2 = () => {
  const [form, setForm] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log(target.name);

    setForm(form => ({...form, [inputType]:inputValue}));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    if (!form.name || !validateEmail(form.email)) {
      setErrorMessage('Email or username is invalid');
      return;
    }
    if (!form.summary || !checkIfValid(form.summary)) {
      setErrorMessage(
        `Please include a message`
      );
      return;
    }
    alert(`Hello ${form.name}`);

    setForm({});
  };


  return (
    <div>
      {errorMessage && (
        <div>
          <p className="subtitle pt-5 mx-5 px-5">{errorMessage}</p>
        </div>
      )}
      <form className="form">
        <div className="field p-5 mx-5 px-5">
          <label className="label">Summary:</label>
          <div className="control">
            <textarea className="textarea" name="summary" value={form.summary} onChange={handleInputChange} placeholder="Please enter your message here"></textarea>
          </div>
        </div>

        <div className="field p-5 mx-5 px-5">
          <label className="label">Skills:</label>
          <div className="control">
            <textarea className="textarea" name="skills" value={form.skills} onChange={handleInputChange} placeholder="Please enter your message here"></textarea>
          </div>
        </div>

        <div className="has-text-right">
          <Link className="button p-5 m-5 px-5" onClick={handleSubmit} to="/Build3">
            Next
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Build2;
