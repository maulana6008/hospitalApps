import React, {Fragment, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {Link, useRouteMatch, Switch, Route} from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsContent from '../Component/NewsContent';

const newsData = [
  {
    news_id:	"F4885C0D-8D29-51DA-F1BA-C4E8938FF5C0",
    title:	"HIPERTENSI",
    short_content:	"A. PENGERTIAN HIPERTENSI\r\n\r\nHipertensi adalah nama ....",
    category:	"Berita Kesehatan",
    date_created:	"2020-05-18 09:44:45",
    image_url:	"https://rsudtamansari.com/images/berita/NW-20180509444537.jpg",
    type:	"text"
  },
  {
    news_id:	"2C801717-15EC-C76F-A87A-97439CB12863",
    title:	"ASMA",
    short_content:	"ASMA\r\n\t\r\n\tAsma?adalah penyakit sukar bernapas yang ....",
    category:	"Berita Kesehatan",
    date_created:	"2020-05-15 14:53:19",
    image_url:	"https://rsudtamansari.com/images/berita/NW-20150502531989.jpg",
    type:	"text"
  },
  {
    news_id:	"EA87B9DA-C208-4623-063D-9B1E7F744C7A",
    title:	"INSOMNIA",
    short_content:	"A. DEFINISI INSOMNIA\r\n\r\nMenurut The International  ....",
    category:	"Berita Kesehatan",
    date_created:	"2020-05-14 09:25:32",
    image_url:	"https://rsudtamansari.com/images/berita/NW-20140509253249.jpg",
    type:	"text"
  },
  {
    news_id:	"3E8EF0CB-9A85-78D0-65BB-EFA404C28181",
    title:	"menangani diabetes",
    short_content:	"Jakarta - Selain gaya hidup, penyakit diabetes jug ....",
    category:	"Kegiatan Rumah Sakit",
    date_created:	"2019-07-15 09:18:21",
    image_url:	"https://rsudtamansari.com/images/berita/NW-19150709182173.jpg",
    type:	"text"
  }
]

let labelData = [];

newsData.forEach((item) => {
  if (labelData.indexOf(item.category) === -1) {
    labelData.push(item.category)
  }
});

const News = (value) => {
  let {path, url} = useRouteMatch();

  const [state, setState] = useState({
    loading:true,
    search:'',
    redirect : false,
    artikel:'',
    label:labelData
  });

  useEffect(() => {
    if (state.loading === true) {
      loaderPromise().then(() => setState({...state,loading:false}));
    }
  });


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
                      <Slider {...settings} className="mb-3">
                        <div className="change-slider-style ">
                            <Link to={`${url}`} className="link">
                              <div className="news-filter-nav shadow-sm mb-3 mt-2">All</div>
                            </Link>
                        </div>
                        {
                          state.label.map((data,index) =>
                            <div className="change-slider-style" key={index}>
                              <Link to={`${url}/${data.split(' ').join('')}`} className="link">
                                <div className="news-filter-nav shadow-sm mb-3 mt-2">{data}</div>
                              </Link>
                            </div>
                          )
                        }
                      </Slider>
                      <Switch>
                      {
                        state.search === '' ?
                        <Fragment>
                          <Route exact path={`${path}`}>
                            <NewsContent label="all" />
                          </Route>

                          {
                            state.label.map((data,index) =>
                            <Route path={`${path}/${data.split(' ').join('')}`} key={index}>
                              <NewsContent label={data} />
                            </Route>
                            )
                          }
                        </Fragment>
                        :
                        <Fragment>
                          <NewsContent label="all" search={state.search} />
                        </Fragment>
                      }

                      </Switch>

                  </Col>
              </Container>
            </Row>
          }

    </Fragment>
  )
}

export default News;
