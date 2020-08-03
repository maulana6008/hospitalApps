import React, {Component, Fragment} from 'react';
import '../../style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Menu extends Component{
  render(){
    return(
      <Fragment>
        <Row className="p-2 logo bg-white">
          <Col xs={12} className="ml-4">
          <center>
            <img src="/img/logo_rsud.png" width={50} alt="logo" />
            <span className="t-up">RSUD</span>
            <span className="t-bottom">TAMAN SARI</span>
          </center>
          </Col>
        </Row>

      </Fragment>
    )
  }

}

export default Menu;
