const handleSubmit = async (e, quizData, questions, history) => {
  e.preventDefault();
  const body = {
    ...quizData,
    questions_answers: [...questions],
  };

  // check if more than one true exists for a question
  for (let i = 0; i < questions.length; i++) {
    let count = 0;
    for (let j = 0; j < questions[i].answers.length; j++) {
      if(questions[i].answers[j].is_true === "true"){
        count+=1
      }
    }
    if(count > 1){
      return alert(`Question ${i+1} has more than one correct answer`)
    }
    if(count === 0) {
      alert(`Question ${i+1} has no correct answers!`)
    }
  }
  

  //Simulate Post Request
  await new Promise((resolve) => setTimeout(() => resolve(), 1000));
  /*
  const response = await fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json", Authorization: `Bearer AccessToken`},
      body: JSON.stringify(body)
  })
  const data = await response.json()
  **do something with data**
  */

  //Save quiz to localstorage
  const oldData = JSON.parse(localStorage.getItem("quizzes"));
  if (!oldData) {
    localStorage.setItem("quizzes", JSON.stringify([body]));
  } else if (oldData !== null && Array.isArray(oldData)) {
    oldData.push(body);
    localStorage.setItem("quizzes", JSON.stringify(oldData));
  }
  // reload the page after successful add
  history.go(0)
};

export default handleSubmit;
