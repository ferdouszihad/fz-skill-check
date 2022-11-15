import { Button } from "react-bootstrap";
import { FiEye } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
const Question = ({ data }) => {
  const { question, correctAnswer, options } = data;

  const checkCorrect = (ans, cAns) => {
    console.log(ans);
    console.log(cAns);

    if (
      ans.toLowerCase().replaceAll(" ", "") ===
      cAns.toLowerCase().replaceAll(" ", "")
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleAnswer = (event) => {
    const answer = event.target.outerText;
    console.log(question);
    if (checkCorrect(answer, correctAnswer)) {
      toast.success(`Your Answer < ${answer} >  is correct`);
    } else {
      toast.error(`Your Answer < ${answer} >  is Wrong.`);
    }
  };

  const showRight = () => {
    toast(` 🎈 Correct Answer is : ${correctAnswer}`);
  };

  return (
    <div className="col">
      <Toaster />
      <div className="card mb-3 bg-warning">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="question">
              <h5 className="card-title mb3">{question}</h5>
              <p>
                <span className="text-success fw-bold fst-italic">
                  {" "}
                  Select 1 out of 4
                </span>
              </p>
            </div>
            <div className="button">
              <Button
                variant="light"
                className="btn-outline-primary rounded-circle"
                onClick={showRight}
              >
                <FiEye className="m-0"></FiEye>
              </Button>
            </div>
          </div>

          <div className="card-text options mb-3 row row-cols-1 row-cols-md-2 g-3">
            {options.map((opt) => (
              <div className="col">
                <p
                  onClick={handleAnswer}
                  className="option-single h-100 d-flex bg-light align-items-center p-2 border border-2 cursor-pointer rounded"
                >
                  {opt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
