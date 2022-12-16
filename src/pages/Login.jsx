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
    <Form  onSubmit={handleSubmit} className=" d-flex  w-25 m-auto  ">
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
        <Button
       
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </div>
      <div>
        <img
          className="w-75 h-75 rounded"
          src="https://picsum.photos/200/300"
          alt=""
        />
        <br /> <br />
        <Button
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
