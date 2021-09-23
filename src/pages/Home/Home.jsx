import { useState, useEffect } from "react";
import Card from "./card/Card";
import getData from "./getData";
import Button from "../../components/Button/Button"
import styles from "./home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [quizzes, setQuizzes] = useState([{ title: "", id: "" }]);

  useEffect(() => {
    getData(setQuizzes);
  }, []);

  return (
    <>
      <h1 className={"header"}>Home</h1>
      {quizzes.map((quiz, index) => {
        return (
          <div key={index}>
            <Card title={quiz.title} id={quiz.id} />
          </div>
        );
      })}
      <div className={styles['btn-container']}>
          <Link to="/addquiz"><Button>Add New Quiz</Button></Link>
      </div>
    </>
  );
};
export default Home;
