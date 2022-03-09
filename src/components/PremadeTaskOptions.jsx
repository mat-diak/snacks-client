import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./PremadeTaskOptions.css";

function PremadeTaskOptions({task}) {
  console.log(task.options)
  return (
    <Card className="premade-option">
      <ListGroup variant="flush">
        {task.options && task.options.map((recipe) => (

        <ListGroup.Item className="premade-option">{recipe}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default PremadeTaskOptions;