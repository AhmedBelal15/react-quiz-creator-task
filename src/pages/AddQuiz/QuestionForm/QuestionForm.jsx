import TextField from "../../../components/TextField/TextField";
import FormElement from "../../../components/FormElement/FormElement";
import Select from "../../../components/Select/Select";

const QuestionForm = ({ values, index, setQuestions }) => {
  const handleChange = (e) => {
    setQuestions((prevState) => {
      const newValue = { ...values, [e.target.name]: e.target.value };
      const stateCopy = [...prevState];
      stateCopy[index] = newValue;
      return [...stateCopy];
    });
  };

  const handleAnswerChange = (e, i) => {
    setQuestions((prevState) => {
      const newValue = {
        ...values.answers[i],
        [e.target.name]: e.target.value,
      };
      const stateCopy = [...prevState];
      stateCopy[index].answers[i] = newValue;
      return [...stateCopy];
    });
  };
  const qOptions = [
    { text: "True", value: true },
    { text: "False", value: false },
  ];
  return (
    <>
      <FormElement>
        <label htmlFor="text">Question {index+1}</label>
        <TextField
          name="text"
          id="text"
          placeholder="Question"
          value={values.text}
          onChange={handleChange}
          required
        />
      </FormElement>

      <FormElement>
        <label htmlFor="feedback_true">Feedback on right answer</label>
        <TextField
          name="feedback_true"
          id="feedback_true"
          placeholder="Feedback on right answer"
          value={values.feedback_true}
          onChange={handleChange}
          required
        />
      </FormElement>

      <FormElement>
        <label htmlFor="text">Feedback on wrong answer</label>
        <TextField
          name="feedback_false"
          id="feedback_false"
          placeholder="Feedback on wrong answer"
          value={values.feedback_false}
          onChange={handleChange}
          required
        />
      </FormElement>

      {values.answers.map((values, index) => {
        return (
          <div key={index + 10}>
            <FormElement>
              <label htmlFor={`ans${index + 1}`}>Answer {index + 1}</label>
              <TextField
                name="text"
                id={`ans${index + 1}`}
                placeholder={`Answer ${index + 1}`}
                value={values.text}
                onChange={(e) => handleAnswerChange(e, index)}
                required
              />
            </FormElement>

            <FormElement>
              <label htmlFor={`ans${index + 1}`}>Is the right answer?</label>
              <Select
                // value={values.is_true}
                onChange={(e) => handleAnswerChange(e, index)}
                name="is_true"
                options={qOptions}
                required={true}
              />
            </FormElement>
          </div>
        );
      })}
      <hr />
    </>
  );
};

export default QuestionForm;
