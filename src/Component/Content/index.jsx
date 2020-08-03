import React, {Component, Fragment} from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

const listMenu = [
  {
    title: 'Booking Online',
    icon: 'fas fa-book icon',
    link: '/booking'
  },
  {
    title: 'History',
    icon: 'fas fa-notes-medical icon',
    link: '/history'
  },
  {
    title: 'Doctors Schedule',
    icon: 'fas fa-calendar icon',
    link: '/schedule'
  },
  {
    title: 'Info Bed',
    icon: 'fas fa-bed info icon',
    link: '/info-bed'
  },
  {
    title: 'News',
    icon: 'far fa-newspaper icon',
    link: '/news'
  },
  {
    title: 'Call Us',
    icon: 'fas fa-hospital icon',
    link: '/contact'
  },
  {
    title: 'Profile',
    icon: 'fas fa-user-circle icon',
    link: '/profile'
  },
  {
    title: 'Payment',
    icon: 'fas fa-money-bill-wave-alt icon',
    link: '/payment'
  },
  {
    title: 'Logout',
    icon: 'fas fa-sign-out-alt icon',
    link: '/logout'
  },
]

class Content extends Component{
  render(){
    return(
      <Fragment>
        <Container>
          <Row className="mt-5">
            <Col xs={4} sm={4}>
              <center>
                <Link to="/queue" style={{textDecoration:'none'}} className="link">
                  <Row>
                    <Col xs={12} sm={12}>
                      <div className="pembungkus">
                        <img alt="icon" src={require('../../img/add-to-queue.svg')} className="icon-img" />
                      </div>
                    </Col>
                    <Col xs={12} sm={12}>
                      <div className="menu-title">Look at the Queue</div>
                    </Col>
                  </Row>
                </Link>
              </center>
            </Col>

            {
              listMenu.map((data, index) =>
                <Col xs={4} sm={4} key={index}>
                  <center>
                  <Link to={data.link} style={{textDecoration:'none'}} className="link">
                      <Row>
                        <Col xs={12} sm={12}>
                          <div className="pembungkus">
                            <i className={data.icon}></i>
                          </div>
                        </Col>
                        <Col xs={12} sm={12}>
                          <div className="menu-title">{data.title}</div>
                        </Col>
                      </Row>
                    </Link>
                  </center>
                </Col>
              )
            }



          </Row>
        </Container>
      </Fragment>
    )
  }

}

export default Content;
