const getData = async (setQuizzes) => {
  //Simulate fetch call
  await new Promise((resolve) => setTimeout(() => resolve(), 500));
  const quizzes = JSON.parse(localStorage.getItem('quizzes'));
  setQuizzes(quizzes)
};

export default getData;
