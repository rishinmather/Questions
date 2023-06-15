import React from "react";
import SingleQuestion from "./SingleQuestion";
const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            {...question}
            key={question.id}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};

export default Questions;
