import { useState } from "react";
import { nanoid } from 'nanoid'

const useQuiz = () => {
  const [quizData, setQuizData] = useState({
    created: new Date(),
    description: "",
    id: nanoid(),
    modified: new Date(),
    score: "",
    title: "",
    url: "",
  });

  return [quizData, setQuizData];
};

export default useQuiz;
