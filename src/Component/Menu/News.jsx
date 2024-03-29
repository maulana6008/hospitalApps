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
import NewsContent from '../NewsContent';
import Axios from 'axios';

const newsData = [
  {
    "news_id": "F4885C0D-8D29-51DA-F1BA-C4E8938FF5C0",
    "title": "HIPERTENSI",
    "short_content": "A. PENGERTIAN HIPERTENSI\r\n\r\nHipertensi adalah nama ....",
    "category": "Berita Kesehatan",
    "date_created": "2020-05-18 09:44:45",
    "image_url": "https://rsudtamansari.com/images/berita/NW-20180509444537.jpg",
    "type": "text"
  },
  {
    "news_id": "2C801717-15EC-C76F-A87A-97439CB12863",
    "title": "ASMA",
    "short_content": "ASMA\r\n\t\r\n\tAsma?adalah penyakit sukar bernapas yang ....",
    "category": "Berita Kesehatan",
    "date_created": "2020-05-15 14:53:19",
    "image_url": "https://rsudtamansari.com/images/berita/NW-20150502531989.jpg",
    "type": "text"
  },
  {
    "news_id": "EA87B9DA-C208-4623-063D-9B1E7F744C7A",
    "title": "INSOMNIA",
    "short_content": "A. DEFINISI INSOMNIA\r\n\r\nMenurut The International  ....",
    "category": "Berita Kesehatan",
    "date_created": "2020-05-14 09:25:32",
    "image_url": "https://rsudtamansari.com/images/berita/NW-20140509253249.jpg",
    "type": "text"
  },
  {
    "news_id": "E6F19B64-0C4A-BC78-2B53-88C9B2E4849F",
    "title": "PNEUMONIA",
    "short_content": "A.   DEFINISI\r\n\r\nSecara klinis pneumonia didefinis ....",
    "category": "Berita Kesehatan",
    "date_created": "2020-05-12 13:35:52",
    "image_url": "https://rsudtamansari.com/images/berita/NW-20120501355229.png",
    "type": "text"
  },
  {
    "news_id": "1371FF81-6A8E-36F7-FEC5-C995679E7464",
    "title": "LEPTOSPIROSIS",
    "short_content": "A.  DEFINISI LEPTOSPIROSIS\r\n\r\nPenyakit zoonosis ya ....",
    "category": "Berita Kesehatan",
    "date_created": "2020-05-11 14:50:12",
    "image_url": "https://rsudtamansari.com/images/berita/NW-20110502501265.jpg",
    "type": "text"
  },
  {
    "news_id": "70A5D9C2-58EA-FD59-200B-6893E2E44297",
    "title": "Tunda Ke Dokter Gigi Selama Pandemi COVID-19",
    "short_content": "Dimasa COVID-19, Kita harus lebih menjaga kesehata ....",
    "category": "Berita Kesehatan",
    "date_created": "2020-05-05 10:48:33",
    "image_url": "https://rsudtamansari.com/images/berita/NW-20050510483315.jpg",
    "type": "text"
  },
  {
    "news_id": "67752324-ED55-507E-D49A-0BC63378C001",
    "title": "Aplikasi Nasional Peduli Lindungi",
    "short_content": "Assalamualaikum.\r\n\r\nPemerintah dalam hal ini Kemen ....",
    "category": "Berita Kesehatan",
    "date_created": "2020-04-15 20:49:20",
    "image_url": "https://rsudtamansari.com/images/berita/NW-20150408492066.jpg",
    "type": "text"
  },
  {
    "news_id": "45234627-BEA4-48B8-99FD-DBA518F403B3",
    "title": "DIARE AKUT",
    "short_content": "DEFINISI\r\n\r\nDiare adalah buang air besar yang tida ....",
    "category": "Berita Kesehatan",
    "date_created": "2020-02-24 10:33:15",
    "image_url": "https://rsudtamansari.com/images/berita/NW-20240210331533.jpg",
    "type": "text"
  },
  {
    "news_id": "626AD92B-DB76-0713-181C-EFC207742B68",
    "title": "4 Hal Sepele Ini Sering Diabaikan Tapi Sangat Mempengaruhi Kesehatan",
    "short_content": "Liputan6.com, Jakarta Hal-hal yang sifatnya sepele ....",
    "category": "Berita Kesehatan",
    "date_created": "2019-09-21 15:03:43",
    "image_url": "https://rsudtamansari.com/images/berita/NW-19210903034346.jpg",
    "type": "text"
  },
  {
    "news_id": "D34C96B6-FA14-1B59-A813-969319E0B55C",
    "title": "Penyebab Sakit Maag dan Gejalanya, Dilengkapi Cara Mengatasi dengan Tepat",
    "short_content": "Liputan6.com, Jakarta Penyebab sakit maag bisa ber ....",
    "category": "Berita Kesehatan",
    "date_created": "2019-09-07 14:05:40",
    "image_url": "https://rsudtamansari.com/images/berita/NW-19070902054095.jpg",
    "type": "text"
  },
  {
    "news_id": "925EF46E-F900-FE0E-7EB8-E6599B1B500F",
    "title": "4 Cara Membersihkan Kotoran Hidung Bayi yang Aman",
    "short_content": "DokterSehat.Com ? Kotoran pada hidung bayi yang ti ....",
    "category": "Berita Kesehatan",
    "date_created": "2019-09-06 08:25:08",
    "image_url": "https://rsudtamansari.com/images/berita/NW-19060908250810.jpg",
    "type": "text"
  },
  {
    "news_id": "91C5EBFB-6817-8630-393E-872AB7EF21C3",
    "title": "Sama-sama Nyeri pada Bagian Perut, Kenali Beda Maag dan GERD",
    "short_content": "Jakarta, CNN Indonesia -- Banyak orang yang mengan ....",
    "category": "Berita Kesehatan",
    "date_created": "2019-09-02 09:43:06",
    "image_url": "https://rsudtamansari.com/images/berita/NW-19020909430611.jpg",
    "type": "text"
  },
  {
    "news_id": "6D6F72F6-EDAE-CCCB-923F-11D1FF0D8101",
    "title": "5 Kombinasi Buah dan Manfaatnya Bila Dikonsumsi di Pagi Hari",
    "short_content": "Jakarta - Buah adalah jenis makanan sempurna, kare ....",
    "category": "Berita Kesehatan",
    "date_created": "2019-08-29 14:41:17",
    "image_url": "https://rsudtamansari.com/images/berita/NW-19290802411743.jpg",
    "type": "text"
  },
  {
    "news_id": "F03F18E9-48E6-A452-20A3-5F6BAAF4F821",
    "title": "TUTORIAL MOBA ALIANDOS",
    "short_content": "Moba Aliandos aplikasi Mobile Rumah Sakit Umum Dae ....",
    "category": "Kegiatan Rumah Sakit",
    "date_created": "2019-08-26 16:13:37",
    "image_url": "https://www.youtube.com/watch?v=TO_1YscTT_0&feature=youtu.be",
    "type": "video"
  },
  {
    "news_id": "372438C9-F7FA-5EB3-B897-5C338583C86D",
    "title": "HUT RSUD Tamansari",
    "short_content": "HUT RSUD TAMANSARI ke 3 ....",
    "category": "Kegiatan Rumah Sakit",
    "date_created": "2019-08-26 11:34:52",
    "image_url": "https://www.youtube.com/watch?v=cd4Y_2onFVc",
    "type": "video"
  },
  {
    "news_id": "7321CF1C-5DE7-7B47-A61B-1150B86D12D9",
    "title": "Pingsan: Penyebab, Gejala, Cara Mengatasi",
    "short_content": "DokterSehat.Com ? Seseorang dapat kehilangan kesad ....",
    "category": "Berita Kesehatan",
    "date_created": "2019-08-08 14:54:52",
    "image_url": "https://rsudtamansari.com/images/berita/NW-19080802545277.jpg",
    "type": "text"
  },
  {
    "news_id": "03A83C67-07CF-CC80-91E9-6885E9E40F2A",
    "title": "PERUBAHAN JAM PENDAFTARAN POLI SPESIALIS",
    "short_content": "PENGUMUMAN\r\n\r\nTENTANG\r\nPERUBAHAN JADWAL\r\nPENDAFTAR ....",
    "category": "Kegiatan Rumah Sakit",
    "date_created": "2019-08-05 17:12:59",
    "image_url": "https://rsudtamansari.com/images/berita/NW-19070801323454.jpg",
    "type": "text"
  },
  {
    "news_id": "5EABD910-A214-79EB-E244-4FE5EA698D2F",
    "title": "10 Penyakit pada Ibu Hamil yang Harus Diwaspadai",
    "short_content": "DokterSehat.Com\r\n- Selain perubahan bentuk tubuh,  ....",
    "category": "Kegiatan Rumah Sakit",
    "date_created": "2019-07-15 10:15:55",
    "image_url": "https://rsudtamansari.com/images/berita/NW-19150710155522.jpg",
    "type": "text"
  },
  {
    "news_id": "3E8EF0CB-9A85-78D0-65BB-EFA404C28181",
    "title": "menangani diabetes",
    "short_content": "Jakarta - Selain gaya hidup, penyakit diabetes jug ....",
    "category": "Kegiatan Rumah Sakit",
    "date_created": "2019-07-15 09:18:21",
    "image_url": "https://rsudtamansari.com/images/berita/NW-19150709182173.jpg",
    "type": "text"
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
  const resetSearch = () => {
    if (state.search !== '') {
      setState({
        ...state,
        search:''
      })
    }
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
                    <input type="text" placeholder="Search" value={state.search} onChange={handleChange} />
                  </div>
                </center>
                  <Col sm={12} xs={12} className="mt-2 mb-3 row-bed">
                    <center>
                      <div className="title-content-active mt-3 mb-3">Recently News</div>
                    </center>
                      <Slider {...settings} className="mb-3">
                        <div className="change-slider-style ">
                            <Link to={`${url}`} className="link">
                              <div onClick={resetSearch} className="news-filter-nav shadow-sm mb-3 mt-2">All</div>
                            </Link>
                        </div>
                        {
                          state.label.map((data,index) =>
                            <div className="change-slider-style" key={index}>
                              <Link to={`${url}/${data.split(' ').join('')}`} className="link">
                                <div onClick={resetSearch} className="news-filter-nav shadow-sm mb-3 mt-2">{data}</div>
                              </Link>
                            </div>
                          )
                        }
                        <div className="change-slider-style ">
                            <Link to={`${url}/bookmark`} className="link">
                              <div onClick={resetSearch} className="news-filter-nav shadow-sm mb-3 mt-2">Bookmark/Saved</div>
                            </Link>
                        </div>
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
                          <Route path={`${path}/bookmark`}>
                            <NewsContent label='bookmark' />
                          </Route>
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
