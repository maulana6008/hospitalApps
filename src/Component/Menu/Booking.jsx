import React, {Fragment, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Booking = () => {

  const [state, setState] = useState({
    loading:true
  });

  useEffect(() => {
    if (state.loading === true) {
      loaderPromise().then(() => setState({...state,loading:false}));
    }

    console.log(state);
  });

  const loaderPromise = () => {
    return new Promise((resolve) => setTimeout(() => resolve(),1500));
  }

  return(
    <Fragment>
        {
          state.loading ?
          <div className="loader" />
          :
          <div />
        }
        <Navbar className="navbar-content sticky-top">
          <Navbar.Brand>
            <Link to="/" style={{textDecoration:'none'}}>
              <i className="fas fa-arrow-left back title-nav"></i>
            </Link>
            <span className="title-content">Booking Online</span>
          </Navbar.Brand>
        </Navbar>
          {
            state.loading ?
            <Fragment>
              <Row style={{height:'400px',width:'100%',overflow:'hidden'}}>
                <Col xs={12} sm={12}>
                  <center>
                    <div className="loading shadow-lg">
                      <i className="fas fa-spinner spin"></i>
                      <span className="loading-text">Loading...</span>
                    </div>
                    <span className="loading-text1">Get Booking Online Data</span>
                  </center>
                </Col>
              </Row>
            </Fragment>
            :
            <Row className="row-content">
              <Container>
                  <Col xs={12} sm={12}>
                    <div className="title-content-booking">Do you already have a Medical Record Number ?</div>
                    <p className="desc-content-booking">
                      Medical Reacord Number is a unique numbering given to patients that is used for the need for recording medical records, administration and other needs
                    </p>
                      <center>
                        <Link to="/medical-record" style={{textDecoration:'none'}}>
                          <Button variant="contained" color="primary" className="button-booking mt-3">
                            Already have no medical record number
                          </Button>
                        </Link>
                        <Link to="/register-medical-record" style={{textDecoration:'none'}}>
                          <Button variant="contained" color="primary" className="button-booking mt-3">
                            Do not have no medical record number
                          </Button>
                        </Link>
                      </center>

                    </Col>
                </Container>
              </Row>
          }

    </Fragment>
  )
}

export default Booking;
