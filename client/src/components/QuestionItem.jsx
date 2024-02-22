import SubmitButton from "./button/SubmitButton";

const QuestionItem = ({
  response,
  wordNumber,
  setWordNumber,
  texts,
  text,
  index,
  handleSubmit,
  handleInputChange,
  inputValues,
  shouldRender,
}) => {
  return (
    shouldRender && (
      <div
        key={index}
        style={{
          marginBottom: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "1rem",
          paddingLeft: "0",
        }}
      >
        <span>Question {index + 1}</span>
        <hr className="hr-line" />
        <p className="mt-2 mb-4">
          What do you think is the meaning of '{text}' in the context of the
          passage?
        </p>
        <div className="input-container">
          <input
            type="text"
            className="input-field w-full"
            value={inputValues[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
            disabled={response && response.length > 0}
          />
        </div>

        {response.length > 0 ? (
          <>
            <hr className="hr-line" />
            <div>
              {response[0][index].match_score > 95 ? (
                <button className="bg-green-400 p-2 pt-0 pb-0 text-sm font-semiboldbold rounded-[33px]">
                  Correct!
                </button>
              ) : response[0][index].match_score > 80 ? (
                <button className="bg-[#cdeaff] p-2 pt-0 pb-0 text-sm font-semiboldbold rounded-[33px]">
                  You were close!
                </button>
              ) : (
                <button className="bg-[#ffc3bb] p-2 pt-0 pb-0 text-sm font-semiboldbold rounded-[33px]">
                  Wrong
                </button>
              )}
            </div>
            <p>
              (Feedback of AI){" "}
              {response.length > 0 && response[0][index].ai_response}
            </p>
          </>
        ) : index === texts.length - 1 ? (
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        ) : (
          <button
            className="next-btn"
            onClick={() => setWordNumber(wordNumber + 1)}
          >
            Next
          </button>
        )}
      </div>
    )
  );
};

export default QuestionItem;
