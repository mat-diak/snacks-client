import CopyButton from "./CopyButton";
import Card from "react-bootstrap/Card";
import PremadeTaskOptions from "./PremadeTaskOptions";

const PremadeTask = ({ task, onCopy }) => {
  return (
    <>
    <Card key={task._id} className="premade-card">
      <Card.Body>{task.text}</Card.Body>
      <div className="f-flex flex-row justify-content-end">
        <CopyButton
          className="navbar-button"
          taskId={task._id}
          onCopy={onCopy}
        />
      </div>
    </Card>
    <PremadeTaskOptions task={task}/>
    </>
  );
};

export default PremadeTask;
