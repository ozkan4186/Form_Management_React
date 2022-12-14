import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function BasicExample() {
  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthContext);
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
    console.log(user);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      login: true,
    });
    navigate("/teams");
    console.log(user);
  };

  return (
    <Form onSubmit={handleSubmit} className="w-50 m-auto">
      <Form.Group className="mb-3">
        <Form.Label>FirstName</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your FirstName"
          id="Firstname"
          value={user?.FirstName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>LastName</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your FirstName"
          value={user?.LastName}
          id="Lastname"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>PhoneNumber</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your PhoneNumber"
          value={user?.PhoneNumber}
          onChange={handleChange}
          id="PhoneNumber"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your City"
          value={user?.City}
          onChange={handleChange}
          id="City"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your Email"
          value={user?.Email}
          onChange={handleChange}
          id="Email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your Password"
          value={user?.Password}
          onChange={handleChange}
          id="Password"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;
