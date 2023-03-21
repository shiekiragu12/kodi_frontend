import { useState } from 'react'
import './Register.css';
import { Form, Button,Row,Col } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';


function Register() {
    // restricting the user to only enter 10 digits
    const [value, setValue] = useState("");
    const digitCount = value.replace(/[^0-9]/g, "").length; // Count only digits
  
    function handleChange(event) {
      const inputValue = event.target.value;
      // Allow only digits and limit to 10 characters
      const newValue = inputValue.replace(/[^0-9]/g, "").slice(0, 10);
      setValue(newValue);
    }
    // end of restriction function 

  return (
    <div>
        <h2>Create an account with Kodi</h2>
        <p className='text-muted'>Best tool to manage your property</p>
        <Form>
         {/* Full names */}
        <Form.Group className="mb-3" controlId="formFullName">
        <Form.Control type="text" placeholder="Full Name"  style={{ 
          paddingLeft: '30px', 
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/></svg>')`,
          backgroundPosition: 'left center', 
          backgroundRepeat: 'no-repeat' 
        }} />
           
        </Form.Group>
        {/* email */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" style={{ 
          paddingLeft: '30px', 
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%23${encodeURIComponent('currentColor')}" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg>')`,
          backgroundPosition: 'left center', 
          backgroundRepeat: 'no-repeat' 
        }}/>  
        </Form.Group>
        {/* phone number */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="tel" placeholder="Phone Number" value={value} onChange={handleChange} style={{ 
          paddingLeft: '30px', 
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone- fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z"/></svg>')`,
          backgroundPosition: 'left center', 
          backgroundRepeat: 'no-repeat' 
        }}/>  
        <p style={{ fontSize: "12px", marginRight: "8px",float:'right',marginTop:"1rem",}}>
        {digitCount}/10
      </p>
      </Form.Group>
      <Row className='mt-5'>
          <Col md={6}>
            <Form.Group controlId="formBasicEmail">
                <label>Male</label>
             <Form.Control type="radio" placeholder="Male"/>

            </Form.Group>   
          </Col>
          <Col md={6}>
            <Form.Group controlId="formBasicPassword">
            <label>Female</label>
              <Form.Control type="radio" placeholder="Female" />
            </Form.Group>
          </Col>
        </Row>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Register