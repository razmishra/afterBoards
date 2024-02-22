import axios from "axios";
import React, { useState } from "react";
import QuestionItem from "./QuestionItem";

const CreateQuestions = ({ texts }) => {
  const [inputValues, setInputValues] = useState(
    new Array(texts.length).fill("")
  );
  const [response, setResponse] = useState([]);
  const [wordNumber, setWordNumber] = useState(0);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleSubmit = async () => {
    const formData = {};

    for (let i = 0; i < texts.length; i++) {
      formData[texts[i]] = inputValues[i];
    }
    const response = await axios.post("http://localhost:8080/submit", {
      formData,
    });
    setResponse((prevResponse) => [...prevResponse, response.data]);
  };

  return (
    <div style={{ marginBottom: "37px" }}>
      {texts.map((text, index) => (
        <QuestionItem
          key={index}
          response={response}
          setResponse={setResponse}
          wordNumber={wordNumber}
          setWordNumber={setWordNumber}
          texts={texts}
          text={text}
          index={index}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          inputValues={inputValues}
          setInputValues={setInputValues}
          shouldRender={response.length === 0 ? wordNumber === index : true}
        />
      ))}
    </div>
  );
};

export default CreateQuestions;
