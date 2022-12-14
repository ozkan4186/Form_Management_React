import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample() {
  return (
    <Form className=" d-flex  w-25 m-auto  ">
      <div>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" placeholder="Enter your FirstName" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>LastName</Form.Label>
          <Form.Control type="text" placeholder="Enter your FirstName" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
      <div>
        <img className="w-75 h-75 rounded" src="https://picsum.photos/200/300" alt="" />
        <br /> <br />
        <Button variant="primary" type="submit">
          join Us
        </Button>
      </div>
    </Form>
  );
}

export default BasicExample;
