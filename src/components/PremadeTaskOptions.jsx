import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./PremadeTaskOptions.css";
import OptionButton from "./OptionButton";

function PremadeTaskOptions({task}) {
  return (
    <Card className="premade-option">
      <ListGroup variant="flush">
        {task.options && task.options.map((recipe) => (
        <ListGroup.Item className="premade-option">{recipe} <OptionButton taskOptions={task.options}/></ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default PremadeTaskOptions;