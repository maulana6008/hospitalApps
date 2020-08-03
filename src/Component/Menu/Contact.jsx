import React, {Fragment, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
//
// const data = [
//     {
//       icon: 'fas fa-map-marker-alt',
//       title: 'Jl. Madu No.10 Kel. Mangga Besar Kec Tamansari, Jakarta Barat'
//     },
//     {
//       icon: 'fas fa-envelope',
//       title: 'humas.rsuktamansari@gmail.com'
//     },
//     {
//       icon: 'fas fa-envelope',
//       title: 'humas.rsuktamansari@gmail.com'
//     },
//     {
//       icon: 'fas fa-phone-alt',
//       title: '(021) - 26564276'
//     },
//     {
//       icon: 'fas fa-tty',
//       title: 'Fax : (021) - 22681516'
//     },
//     {
//       icon: 'fab fa-firefox',
//       title: 'http://rsudtamansari.jakarta.go.id'
//     }
// ]
//
// const sosmed = [
//   {
//     icon: 'fab fa-youtube',
//     title: 'Youtube'
//   },
//   {
//     icon: 'fab fa-twitter',
//     title: 'Twitter'
//   },
//   {
//     icon: 'fab fa-facebook',
//     title: 'Facebook'
//   },
//   {
//     icon: 'fab fa-instagram',
//     title: 'Instagram'
//   }
// ]

const Contact = () => {

  const [state, setState] = useState({
    loading:true
  });

  useEffect(() => {
    if (state.loading === true) {
      loaderPromise().then(() => setState({...state,loading:false}));
    }
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
            <span className="title-content">Pusat Bantuan</span>
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
                    <span className="loading-text1">Get Contact Information</span>
                  </center>
                </Col>
              </Row>
            </Fragment>
            :
            <Row className="row-content">
              <Container>
                <Row>
                  <Col sm={6} xs={6}>
                    saf
                  </Col>
                  <Col sm={6} xs={6}>
                    saf
                  </Col>
                </Row>
              </Container>
            </Row>
          }

    </Fragment>
  )
}

export default Contact;
