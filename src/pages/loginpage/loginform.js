import React from 'react';
import Background from '../../assets/image/background.png'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import social from '../../assets/image/social.png'

const loginform = () => {

  return (
    <MDBContainer fluid class="form_background">
      <MDBRow>
        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5 justify-content-center'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0"><img className='form_logo' src={social}/></span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px', color:'white', fontSize:'40px'}}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5  email_address' label='Email address' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 password_o' label='Password' id='formControlLg' type='password' size="lg"/>

            <MDBBtn className="mb-4 px-5 mx-5 lb" size='lg'>Login</MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted1" href="#!">Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <a href="#!" class="link-info1">Register here</a></p>

          </div>

        </MDBCol >

        <MDBCol sm='6' className='d-none d-sm-block px-01'>
            <img src={Background}/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default loginform