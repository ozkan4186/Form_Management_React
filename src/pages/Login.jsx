import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function BasicExample() {
  const navigate = useNavigate();
  const { user,setUser } = useContext(AuthContext);
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
    <Form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "40rem",
        margin: "0 auto",
        width: "80%",
        boxShadow: "1px 1px 10px 1px black",
        borderRadius: "20px",
        padding: "3rem",
        fontWeight: "bold",
        fontSize:"2rem",
        backgroundColor:"#faf6f655",
        
      }}
    >
      <div>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your Email"
            value={user?.Email}
            onChange={handleChange}
            id="Email"
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
          />
        </Form.Group>
        <Button className="m-3" variant="primary" type="submit">
          Submit
        </Button>
        <Button
          className="m-3"
          onClick={() => navigate("/register")}
          variant="primary"
          type="submit"
        >
          join Us
        </Button>
      </div>
    </Form>
  );
}

export default BasicExample;
