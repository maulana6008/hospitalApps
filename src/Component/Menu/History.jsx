import React, {Fragment, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

const History = () => {

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
            <span className="title-content">History</span>
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
                    <span className="loading-text1" style={{left:'32px'}}>Get History Data</span>
                  </center>
                </Col>
              </Row>
            </Fragment>
            :
            <Row className="row-content" style={{bottom:'44px'}}>
              <Container>
              <center>
                <div className="search-nav">
                  <i className="fas fa-search icon-search"></i>
                  <input type="text" placeholder="Search" />
                </div>
              </center>
                  <Col xs={12} sm={12}>
                    kosong
                  </Col>
              </Container>
            </Row>
          }

    </Fragment>
  )
}

export default History;
