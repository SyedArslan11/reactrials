import "./Nav.css"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export const Nav = () => {
  return (
    <div>
      <nav>
        
        <a href="">Home</a>
        <a href="">Services</a>
        <a href="">Products</a>
        <a href="">About Us</a>
        
         <div className="btn"> 
          <input type="text" placeholder="Search" />
          <button>Login</button><Button variant="light">Light</Button> <Button variant="dark">Dark</Button>
          </div>
      </nav>
    </div>
  );
};
