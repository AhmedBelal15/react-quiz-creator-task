import { useState } from "react";
import { nanoid } from 'nanoid'

const useQuestions = () => {
  const initQuestionData = {
    answer_id: null,
    answers: [
      {
        id: nanoid(),
        is_true: false,
        text: "",
      },
      {
        id: nanoid(),
        is_true: false,
        text: "",
      },
      {
        id: nanoid(),
        is_true: false,
        text: "",
      },
      {
        id: nanoid(),
        is_true: false,
        text: "",
      },
    ],
    feedback_false: "",
    feedback_true: "",
    id: nanoid(),
    text: "",
  };

  const [questions, setQuestions] = useState([{ ...initQuestionData }]);

  const handleAddQuestion = () => {
    setQuestions((prevState) => {
      return [...prevState, { ...initQuestionData }];
    });
  };

  return [questions, setQuestions, handleAddQuestion];
};

export default useQuestions;
