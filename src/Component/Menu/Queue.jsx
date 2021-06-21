import React, {Fragment, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth:'90%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



const Queue = () => {

  const [state, setState] = useState({
    loading:true,
    age: ''
  });

  useEffect(() => {
    if (state.loading === true) {
      loaderPromise().then(() => setState({...state,loading:false}));
    }
  });

  const loaderPromise = () => {
    return new Promise((resolve) => setTimeout(() => resolve(),1500));
  }

  const classes = useStyles();

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

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
            <span className="title-content">Lihat Antrian</span>
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
                    <span className="loading-text1" style={{left:'32px'}}>Get Queue Data</span>
                  </center>
                </Col>
              </Row>
            </Fragment>
            :
            <Row className="row-content" style={{bottom:'100px'}}>
              <Container>
                  <Col xs={12} sm={12}>
                    <div className="title-content-active mt-3 mb-3">Please choose your poly destination</div>
                  </Col>
                  <Col xs={12} sm={12}>
                    <center>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Choose the poly</InputLabel>
                        <Select
                          native
                          value={state.age}
                          onChange={handleChange}
                          inputProps={{
                            name: 'age',
                            id: 'age-native-simple',
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </Select>
                      </FormControl>
                    </center>

                  </Col>
              </Container>
            </Row>
          }

    </Fragment>
  )
}

export default Queue;
