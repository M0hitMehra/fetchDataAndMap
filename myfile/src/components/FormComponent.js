import React, { useState } from "react";
import "../css/formComp.css";
import "../css/button.css";
import Button from "./Button";
import { Post } from "../api/Post";
import InputField from "./InputField";

const FormComponent = () => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [body, setBody] = useState("");
  const [bodyError, setBodyError] = useState("");
  const [userSelected, setUserSelected] = useState(0);
  const [buttonError, setButtonError] = useState("");
  const [buttonSelected, setButtonSelected] = useState(false);

  //button
  const renderButtonControl = () => {
    return (
      <React.Fragment>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setUserSelected(e.target.id);
            setButtonSelected(e.target.value);
            console.log(e.target.name)
          }}
          buttonSelected={buttonSelected}
        />

        {buttonError && (
          <p id="buttonError" tabIndex={0}>
            {buttonError}
          </p>
        )}
      </React.Fragment>
    );
  };

  //validation
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!userSelected > 0) {
      setButtonError("Please select a user");
    }
    if (title === "") {
      setTitleError("Please add a title");
    }
    if (body === "") {
      setBodyError("Please add some text");
    }
    if (userSelected && body && title !== "") {
      Post(userSelected, title, body);
    }
  };

  const handleTitleChange = (ev) => setTitle(ev.target.value);
  const handleBodyChange = (ev) => setBody(ev.target.value);

  return (
    <div className="wrapper">
      <div className="wrapper__formControl">
        <form method="post" onSubmit={onSubmit}>
          <h1>
            <label>Please select the user</label>
          </h1>
          <fieldset>
            {renderButtonControl()}
            <div className="wrapper__inputContainer">
              <InputField
                label="title"
                className="wrapper__inputContainer__inputStyles"
                handleChange={handleTitleChange}
                value={title}
                placeholder="Some title"
                validation={titleError}
                validationTestID="titleError"
              />
              <InputField
                label="body"
                className="wrapper__inputContainer__inputStyles"
                handleChange={handleBodyChange}
                value={body}
                placeholder="Some body"
                validation={bodyError}
                validationTestID="bodyError"
              />
              <button
                className="wrapper__inputContainer__submitButton"
                data-testid="submitButton"
                type="submit"
                name="submit"
                id="submit"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
