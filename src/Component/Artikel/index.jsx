import React, {Fragment, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Iframe from 'react-iframe';

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


const Artikel = ( {match} ) => {

  // how delete array
  // let cobaArray = ["3E8EF0CB-9A85-78D0-65BB-EFA404C28181","EA87B9DA-C208-4623-063D-9B1E7F744C7A"];
  // let index = cobaArray.indexOf("EA87B9DA-C208-4623-063D-9B1E7F744C7A");
  //
  // cobaArray.shift();
  // console.log(cobaArray);

  const filterNews = (data) => {
    return data.news_id === match.params.news_id;
  }

  const newsDetails = newsData.find(filterNews)

  if (localStorage.getItem('bookmark') !== null) {
    let checkBookmark = JSON.parse(localStorage.getItem('bookmark')).indexOf(match.params.news_id);
    var bookmark = false;
    if (checkBookmark >= 0) {
      bookmark = true
    }else{
      bookmark = false
    }
  }

  const [state, setState] = useState({
    loading:true,
    news:newsDetails,
    bookmark:bookmark
  });




  const handleBookmark = (e) => {
    e.preventDefault();
    let cacheBookmark = localStorage.getItem('bookmark');
    let news_id = e.target.attributes[0].nodeValue;
    if (cacheBookmark === null || cacheBookmark === undefined) {

      let data = [
        news_id
      ];
      
      localStorage.setItem('bookmark', JSON.stringify(data));
      setState({
        ...state,
        bookmark:true
      })
    }else{

      let index = JSON.parse(cacheBookmark).indexOf(news_id);
      if (index >= 0) {
        if (index === 0) {
          let deleteBookmark = JSON.parse(cacheBookmark);
          deleteBookmark.shift();
          localStorage.setItem('bookmark', JSON.stringify(deleteBookmark))
        }else{
          let deleteBookmark = JSON.parse(cacheBookmark);
          deleteBookmark.splice(index);
          localStorage.setItem('bookmark', JSON.stringify(deleteBookmark))
        }

        setState({
          ...state,
          bookmark:false
        })
      }else{
        let newData = JSON.parse(cacheBookmark).concat([news_id]);
        localStorage.setItem('bookmark', JSON.stringify(newData));
        setState({
          ...state,
          bookmark:true
        })
      }

    }



  }

  useEffect(() => {
    console.log(localStorage.getItem('bookmark'));
    if (state.loading === true) {
      loaderPromise().then(() => setState({...state,loading:false}));
    }
  });

  const loaderPromise = () => {
    return new Promise((resolve) => setTimeout(() => resolve(),1000));
  }

  return(
    <Fragment>
        {
          state.loading ?
          <div className="loader" />
          :
          <div />
        }
        <Fragment>
          <div className="navbar-sendiri">
            {
              state.news.type === "video" ?
                <img
                  src={`https://img.youtube.com/vi/${state.news.image_url.split("=")[1].substr(0,11)}/0.jpg`}
                  alt="DetailsNews"
                  className='img-detail-news'
                />
              :
                <img src={state.news.image_url} alt="DetailsNews" className='img-detail-news' />
            }

            <div className="bg-for-opacity"></div>
            <Link to="/news" style={{textDecoration:'none'}}>
              <i className="fas fa-arrow-left detail-arrow"></i>
            </Link>
            {
              state.bookmark ?
              <div onClick={handleBookmark}>
                <img data-news={state.news.news_id} src="/img/icons8-bookmark1.svg" className="detail-arrow1" alt="DetailsNews" />
              </div>
              :
              <div onClick={handleBookmark}>
                <img data-news={state.news.news_id} src="/img/icons8-bookmark-add.svg" className="detail-arrow1" alt="DetailsNews" />
              </div>
            }

          </div>
        </Fragment>

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
                    <span className="loading-text1" style={{left:'35px'}}>Get Details News</span>
                  </center>
                </Col>
              </Row>
            </Fragment>
            :
            <Fragment>
              {
                  <Row className="detail-row-content">
                    <Col sm={12} xs={12}>
                      <Container>
                        <div className="news-ktg-tgl">
                          <div className="float-left">{state.news.category}</div>
                          <div className="float-right">15 July 2019</div>
                        </div>
                      </Container>
                      <div className="detail-news-title mt-4 mb-1">{state.news.title}</div>
                    </Col>
                    <Container>
                        <Col sm={12} xs={12} className="mt-4">
                        {
                          state.news.type === 'video' ?
                          <Iframe
                            url={`https://www.youtube.com/embed/${state.news.image_url.split("=")[1].substr(0,11)}`}
                            className="video-news"
                            display="initial"
                            position="relative"/>
                            :
                            <img src={state.news.image_url} alt="DetailsNews" className='img-detail-news mb-4' />
                        }

                          <div className="detail-news-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </div>
                        </Col>
                    </Container>
                  </Row>
              }
            </Fragment>
          }
    </Fragment>
  )
}

export default Artikel;
