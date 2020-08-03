import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

const Test = () => {
  return(
    <Tab.Container defaultActiveKey="first">
      <Row>
        <Col sm={3}>

              <Nav.Link eventKey="first">Tab 1</Nav.Link>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>

        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              {localStorage.getItem('artikel')}
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              tab2
            </Tab.Pane>
          </Tab.Content>
        </Col>
        <Col>
          <Link to="/news">
          back
          </Link>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default Test;
