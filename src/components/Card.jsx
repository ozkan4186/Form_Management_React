import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function BasicExample({item}) {
  return (
    <Card   style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title> {item.title} </Card.Title>
        <Card.Text>{item.email}</Card.Text>

        <a href={item.linkedin}>
          <Button variant="primary">View Profile</Button>{" "}
        </a>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
