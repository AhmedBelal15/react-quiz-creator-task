import { useHistory } from "react-router-dom";
import FormElement from "../../components/FormElement/FormElement";
import TextField from "../../components/TextField/TextField";
import useQuiz from "./hooks/useQuiz";
import Button from "../../components/Button/Button";
import styles from "./add-quiz.module.css";
import QuestionForm from "./QuestionForm/QuestionForm";
import useQuestions from "./hooks/useQuestions";
import handleSubmit from "./handleSubmit";

const AddQuiz = () => {
  const [quizData, setQuizData] = useQuiz();
  const handleQuizChange = (e) => {
    setQuizData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const [questions, setQuestions, handleAddQuestion] = useQuestions();

  const history = useHistory();
  return (
    <>
      <h1 className={styles["header"]}>Add Quiz</h1>

      <form
        onSubmit={(e) => {
          handleSubmit(e, quizData, questions, history);
        }}
        className={styles["form"]}
      >
        <FormElement>
          <label htmlFor="title">Title</label>
          <TextField
            name="title"
            id="title"
            placeholder="Title"
            value={quizData.title}
            onChange={handleQuizChange}
            required
          />
        </FormElement>

        <FormElement>
          <label htmlFor="description">Description</label>
          <TextField
            name="description"
            id="description"
            placeholder="Description"
            value={quizData.description}
            onChange={handleQuizChange}
            required
          />
        </FormElement>

        <FormElement>
          <label htmlFor="final-score">Final Score</label>
          <TextField
            name="score"
            id="final-score"
            placeholder="Final Score"
            value={quizData.score}
            onChange={(e) => {
              if (/^[0-9]+$/.test(e.target.value) || e.target.value === "") {
                handleQuizChange(e);
              }
            }}
            required
          />
        </FormElement>

        <FormElement>
          <label htmlFor="url">Youtube Video</label>
          <TextField
            name="url"
            id="url"
            placeholder="https://www.youtube.com/watch?v=e6EGQFJLl04"
            type="url"
            value={quizData.url}
            onChange={handleQuizChange}
            required
          />
        </FormElement>
        <hr />

        {questions.map((values, index) => {
          return (
            <div key={index}>
              <QuestionForm
                values={values}
                index={index}
                setQuestions={setQuestions}
              />
            </div>
          );
        })}
        <div className={styles["btn-container"]}>
          <Button
            width="48%"
            onClick={handleAddQuestion}
            type="button"
            background="#41d1e9"
          >
            Add More Questions
          </Button>
          <Button width="48%" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddQuiz;
