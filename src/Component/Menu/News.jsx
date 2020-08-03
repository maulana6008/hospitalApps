import React, {Fragment, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {GlobalConsumer} from '../../Context';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import {Redirect} from 'react-router-dom';

const News = (value) => {

  const [state, setState] = useState({
    loading:true,
    search:'',
    redirect : false,
    artikel:''
  });

  useEffect(() => {
    if (state.loading === true) {
      loaderPromise().then(() => setState({...state,loading:false}));
    }
    localStorage.setItem('artikel', state.artikel)
  });

  const handleNews = (e) => {
    e.preventDefault();
    setState({
      artikel:'asd'
    })
  }

  const loaderPromise = () => {
    return new Promise((resolve) => setTimeout(() => resolve(),1000));
  }

  const handleChange = (e) => {
    return setState({
      ...state,
      search:e.target.value
    })

  }

  const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1.5,
      slidesToScroll: 1
    };

  return(
    <Fragment>
      {
        state.artikel !== '' ?
        <Redirect to="/artikel" />
        :
        <Fragment />
      }

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
            <span className="title-content">Berita</span>
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
                    <span className="loading-text1" style={{left:'28px'}}>Get News Data</span>
                  </center>
                </Col>
              </Row>
            </Fragment>
            :
            <Row className="row-content" style={{bottom:'50px'}}>
              <Container>
                <center>
                  <div className="search-nav">
                    <i className="fas fa-search icon-search"></i>
                    <input type="text" placeholder="Search" onChange={handleChange} />
                  </div>
                </center>
                  <Col sm={12} xs={12} className="mt-2 mb-3 row-bed">
                    <center>
                      <div className="title-content-active mt-3 mb-3">Recently News</div>
                    </center>
                    <Tab.Container defaultActiveKey="first">
                      <Slider {...settings} className="mb-3">
                        <div className="change-slider-style ">
                            <Nav.Link eventKey="first" className="navlink">
                              <div className="news-filter-nav shadow-sm mb-3 mt-2">All</div>
                            </Nav.Link>
                        </div>

                        <div className="change-slider-style">
                            <div className="news-filter-nav shadow-sm mb-3 mt-2">Berita Kesehatan</div>
                        </div>

                        <div className="change-slider-style">
                            <div className="news-filter-nav shadow-sm mb-3 mt-2">Kegiatan Rumah Sakit</div>
                        </div>

                        <div className="change-slider-style">
                            <div className="news-filter-nav shadow-sm mb-3 mt-2">Berita Kesehatan</div>
                        </div>
                      </Slider>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Row>

                              <Col sm={12} xs={12} onClick={handleNews}>
                                <img src="/img/gigi.jpg" alt="news" className="img-news shadow-sm" />
                                <Row>
                                  <Col sm={12} xs={12}>
                                    <div className="card-body shadow-sm bg-white">
                                      <Container fluid>
                                        <div className="news-ktg mb-3">
                                          Berita Kesehatan <i className="fas fa-circle news-icon ml-2 mr-2"></i> <span className="news-date">2020 Feb 19</span>
                                        </div>
                                        <div className="news-title mb-2">Tunda Ke Dokter Gigi Selama Pandemi COVID-19</div>
                                        <div className="news-desc mb-3">Dimasa COVID-19, Kita harus lebih menjaga kesehatan gigi dan rongga mulut. Kita...</div>
                                      </Container>
                                    </div>
                                  </Col>
                                </Row>
                              </Col>

                          </Row>
                        </Tab.Pane>
                      </Tab.Content>

                    </Tab.Container>
                  </Col>
              </Container>
            </Row>
          }

    </Fragment>
  )
}

export default GlobalConsumer(News);
