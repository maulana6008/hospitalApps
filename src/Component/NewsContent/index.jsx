import React,{Fragment, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import InfiniteScroll from 'react-infinite-scroll-component';

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


const NewsContent = (props) => {

  // props search
  let newsSearch = newsData;

  if (props.search !== undefined) {
    let searchLabel = props.search.trim().toLowerCase();
    if (props.search.length > 0) {
      newsSearch = newsData.filter((data) => {
        return data.title.toLowerCase().indexOf(searchLabel) !== -1;
      });
    }

  }
  // end props search

  // props bookmark
  let savedNews = [];
  if (localStorage.getItem('bookmark') !== null) {
      let dataSession = JSON.parse(localStorage.getItem('bookmark'));
      dataSession.map((data) => {
        newsData.map((item) => {
          if (item.news_id === data) {
            savedNews.push(item)
          }
          return 0;
        })
        return 0;
      })
    }
    const fetchMoreData2 = () => {

      if (state.newsSave.length >= savedNews.length) {
        setState({
          ...state,
          hasMore:false
        })
      }else{
        if (state.hasMore === false) {
          setState({
            ...state,
            hasMore:true
          })
        }
        let dataNewsAll = [];
        let newsLabel = savedNews;
        for (var i = state.newsSave.length; i < state.newsSave.length+4; i++) {
          if (newsLabel[i] !== undefined) {
            dataNewsAll.push(newsLabel[i])
          }
        }
        setTimeout(() => {
          setState({
            ...state,
            newsSave:state.newsSave.concat(dataNewsAll)
          })
        },1500)
      }

    }
  // end props bookmark


  // props all
  var newsAll = [];
  newsData.map((data,i) => {
    if (i <= 3) {
      newsAll.push(data);
    }
    return 0
  })

  const fetchMoreData = () => {

    if (state.artikel.length >= newsData.length) {
      setState({
        ...state,
        hasMore:false
      })
    }else{
      if (state.hasMore === false) {
        setState({
          ...state,
          hasMore:true
        })
      }
      let dataNewsAll = [];
      for (var i = state.artikel.length; i < state.artikel.length+4; i++) {
        if (newsData[i] !== undefined) {
          dataNewsAll.push(newsData[i])
        }
      }
      setTimeout(() => {
        setState({
          ...state,
          artikel:state.artikel.concat(dataNewsAll)
        })
      },1500)
    }

  }
  // end props all

  // props category
  var newsContent = [];
  newsData.forEach((item,index) => {
    if (item.category === props.label) {
        newsContent.push(item);
    }
  });
  let newsCategory = [];
  newsContent.map((data,index) => {
    if (index <= 3) {
      newsCategory.push(data)
    }
    return 0
  })

  const fetchMoreData1 = () => {
    if (state.category.length >= newsContent.length) {
      setState({
        ...state,
        hasMore:false
      })
    }else{
      if (state.hasMore === false) {
        setState({
          ...state,
          hasMore:true
        })
      }
      let dataNewsAll = [];
      let newsLabel = newsContent;
      for (var i = state.category.length; i < state.category.length+4; i++) {
        if (newsLabel[i] !== undefined) {
          dataNewsAll.push(newsLabel[i])
        }
      }
      setTimeout(() => {
        setState({
          ...state,
          category:state.category.concat(dataNewsAll)
        })
      },1500)
    }

  }
  // end props category


  let bookmarkSession = JSON.parse(localStorage.getItem('bookmark')) || [];
  const [state,setState] = useState({
    artikel:newsAll,
    category:newsCategory,
    redirect:'',
    newsSave:savedNews,
    loading:true,
    bookmark:bookmarkSession,
    hasMore:true
  })

  const handleNews = (e) => {
    e.preventDefault();
    if (e.target.attributes[3] !== undefined) {
        setState({
          ...state,
          redirect:e.target.attributes[3].nodeValue
        })
    }else{
      setState({
        ...state,
        redirect:e.target.attributes[0].nodeValue
      })
    }
  }

  const filterDate = (dataDate) => {

    let date = new Date(dataDate);
    let monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format;
    let longName = monthName(date);

    let tgl = dataDate.substr(8,2);
    let thn = dataDate.substr(0,4);

    return tgl+' '+longName+' '+thn;
  }

  useEffect(() => {
    if (state.loading === true) {
      var myTime = setTimeout(() => setState({
        ...state,
        loading:false
      }),1500)
    }
    return () => {
      if (state.loading === true) {
        clearTimeout(myTime);
      }
    }
  });


  const checkId = (data) => {
    let status = false;
    let dataBookmark = state.bookmark;
    dataBookmark.map((item) => {
      if (item === data) {
        status = true;
      }
      return 0;
    })
    return status;
  }

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
        bookmark:data
      })
    }else{

      let index = JSON.parse(cacheBookmark).indexOf(news_id);
      if (index >= 0) {
        let deleteBookmark = JSON.parse(cacheBookmark);
        if (index === 0) {
          deleteBookmark.shift();
          localStorage.setItem('bookmark', JSON.stringify(deleteBookmark))
        }else{
          deleteBookmark.splice(index);
          localStorage.setItem('bookmark', JSON.stringify(deleteBookmark))
        }
        setState({
          ...state,
          bookmark:deleteBookmark
        })
      }else{
        let newData = JSON.parse(cacheBookmark).concat([news_id]);
        localStorage.setItem('bookmark', JSON.stringify(newData));
        setState({
          ...state,
          bookmark:newData
        })
      }
    }
  }

  return(
    <>
    <Fragment>
      {
        state.loading ?
        <Fragment>
          <Skeleton animation="wave" className="skeleton" />
          <div className="skeleton-text">
            <Skeleton animation="wave" className="skeleton1" />
            <Skeleton animation="wave" className="skeleton2" />
            <Skeleton animation="wave" className="skeleton3" />
            <Skeleton animation="wave" className="skeleton4" />
          </div>
        </Fragment>
        :
        <Fragment>
            <Fragment>
              {
                state.redirect !=='' ?
                <Redirect to={`/artikel/${state.redirect}`} />
                :
                <div />
              }
            </Fragment>
            <Fragment>
              {
                props.search !== undefined && props.search !== '' ?

                <Fragment>
                {
                  newsSearch.map((data,index) =>
                    <Row key={index} className="mb-3">
                        <Col sm={12} xs={12}>
                        {
                          data.type === 'video' ?
                          <img
                              src={`https://img.youtube.com/vi/${data.image_url.split("=")[1].substr(0,11)}/0.jpg`}
                              alt="news"
                              className="img-news shadow-sm"
                          />
                          :
                          <img
                              src={data.image_url}
                              alt="news"
                              className="img-news shadow-sm"
                          />
                        }
                          <Row>
                            <Col sm={12} xs={12}>
                              <div className="card-body shadow-sm bg-white">
                                <Container fluid>
                                  <div className="news-ktg mb-3">
                                    {data.category}
                                    {
                                      checkId(data.news_id) ?
                                      <img onClick={handleBookmark} data-news={data.news_id} className="float-right news-bookmark" src="/img/icons8-bookmark-added.svg" alt="bookmark" />
                                      :
                                      <img onClick={handleBookmark} data-news={data.news_id} className="float-right news-bookmark" src="/img/icons8-bookmark.svg" alt="bookmark" />
                                    }
                                  </div>
                                  <div className="news-title">{data.title}</div>
                                  <div className="news-date mb-2">{filterDate(data.date_created.slice(0,10))}</div>
                                  <div className="news-desc mb-3">{data.short_content}</div>
                                  <Button data-news={data.news_id} onClick={handleNews} variant="contained" color="primary" className="shadow button-news mt-1 mb-2">
                                    <span data-news={data.news_id}>Baca Sekarang</span>
                                  </Button>
                                </Container>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                    </Row>
                  )
                }
                </Fragment>

                :

                <Fragment>
                  {
                    props.label === 'bookmark' ?
                    <Fragment>
                      <Row>
                        <InfiniteScroll
                          dataLength={state.newsSave.length}
                          next={fetchMoreData2}
                          hasMore={state.hasMore}
                          loader={
                            <Fragment>
                               <Container>
                                 <Skeleton animation="wave" className="skeleton" />
                                 <div className="skeleton-text">
                                   <Skeleton className="skeleton1" />
                                   <Skeleton className="skeleton2" />
                                   <Skeleton className="skeleton3" />
                                   <Skeleton className="skeleton4" />
                                 </div>
                               </Container>
                            </Fragment>
                          }
                          endMessage={
                            <p style={{ textAlign: "center" }}>
                              <b>Yay! You have seen it all</b>
                            </p>
                          }
                        >
                      {
                        state.newsSave.map((data,index) =>
                              <Col sm={12} xs={12} key={index} className="mb-3">
                              {
                                data.type === 'video' ?
                                <img
                                    src={`https://img.youtube.com/vi/${data.image_url.split("=")[1].substr(0,11)}/0.jpg`}
                                    alt="news"
                                    className="img-news shadow-sm"
                                />
                                :
                                <img
                                    src={data.image_url}
                                    alt="news"
                                    className="img-news shadow-sm"
                                />
                              }
                                <Row>
                                  <Col sm={12} xs={12}>
                                    <div className="card-body shadow-sm bg-white">
                                      <Container fluid>
                                        <div className="news-ktg mb-2">
                                          {data.category}
                                          {
                                            checkId(data.news_id) ?
                                            <img onClick={handleBookmark} data-news={data.news_id} className="float-right news-bookmark" src="/img/icons8-bookmark-added.svg" alt="bookmark" />
                                            :
                                            <img onClick={handleBookmark} data-news={data.news_id} className="float-right news-bookmark" src="/img/icons8-bookmark.svg" alt="bookmark" />
                                          }
                                        </div>
                                        <div className="news-title">{data.title}</div>
                                        <div className="news-date mb-2">{filterDate(data.date_created.slice(0,10))}</div>
                                        <div className="news-desc mb-3">{data.short_content}</div>
                                        <Button onClick={handleNews} data-news={data.news_id} variant="contained" color="primary" className="shadow button-news mt-1 mb-2">
                                          <span data-news={data.news_id}>Baca Sekarang</span>
                                        </Button>
                                      </Container>
                                    </div>
                                  </Col>
                                </Row>
                              </Col>

                        )
                      }
                        </InfiniteScroll>
                      </Row>
                    </Fragment>

                    :
                    <Fragment>
                      {
                        props.label === 'all' ?
                        <Fragment>
                          <Row>
                          <InfiniteScroll
                            dataLength={state.artikel.length}
                            next={fetchMoreData}
                            hasMore={state.hasMore}
                            loader={
                              <Fragment>
                                 <Container>
                                   <Skeleton animation="wave" className="skeleton" />
                                   <div className="skeleton-text">
                                     <Skeleton className="skeleton1" />
                                     <Skeleton className="skeleton2" />
                                     <Skeleton className="skeleton3" />
                                     <Skeleton className="skeleton4" />
                                   </div>
                                 </Container>
                              </Fragment>
                            }
                            endMessage={
                              <p style={{ textAlign: "center" }}>
                                <b>Yay! You have seen it all</b>
                              </p>
                            }
                          >
                            {
                              state.artikel.map((data,index) =>

                                    <Col sm={12} xs={12} className="mb-3" key={index}>
                                    {
                                      data.type === 'video' ?
                                      <img
                                          src={`https://img.youtube.com/vi/${data.image_url.split("=")[1].substr(0,11)}/0.jpg`}
                                          alt="news"
                                          className="img-news shadow-sm"
                                      />
                                      :
                                      <img
                                          src={data.image_url}
                                          alt="news"
                                          className="img-news shadow-sm"
                                      />
                                    }
                                      <Row>
                                        <Col sm={12} xs={12}>
                                          <div className="card-body shadow-sm bg-white">
                                            <Container fluid>
                                              <div className="news-ktg mb-3">
                                                {data.category}
                                                {
                                                  checkId(data.news_id) ?
                                                  <img onClick={handleBookmark} data-news={data.news_id} className="float-right news-bookmark" src="/img/icons8-bookmark-added.svg" alt="bookmark" />
                                                  :
                                                  <img onClick={handleBookmark} data-news={data.news_id} className="float-right news-bookmark" src="/img/icons8-bookmark.svg" alt="bookmark" />
                                                }
                                              </div>
                                              <div className="news-title">{data.title}</div>
                                              <div className="news-date mb-2">{filterDate(data.date_created.slice(0,10))}</div>
                                              <div className="news-desc mb-3">{data.short_content}</div>
                                              <Button data-news={data.news_id} onClick={handleNews} variant="contained" color="primary" className="shadow button-news mt-1 mb-2">
                                                <span data-news={data.news_id}>Baca Sekarang</span>
                                              </Button>
                                            </Container>
                                          </div>
                                        </Col>
                                      </Row>
                                    </Col>
                              )
                            }
                            </InfiniteScroll>
                          </Row>
                        </Fragment>
                        :
                        <Fragment>
                          <Row>
                          <InfiniteScroll
                            dataLength={state.category.length}
                            next={fetchMoreData1}
                            hasMore={state.hasMore}
                            loader={
                              <Fragment>
                                 <Container>
                                   <Skeleton animation="wave" className="skeleton" />
                                   <div className="skeleton-text">
                                     <Skeleton className="skeleton1" />
                                     <Skeleton className="skeleton2" />
                                     <Skeleton className="skeleton3" />
                                     <Skeleton className="skeleton4" />
                                   </div>
                                 </Container>
                              </Fragment>
                            }
                            endMessage={
                              <p style={{ textAlign: "center" }}>
                                <b>Yay! You have seen it all</b>
                              </p>
                            }
                          >
                          {
                            state.category.map((data,index) =>
                                  <Col sm={12} xs={12} key={index} className="mb-3">
                                  {
                                    data.type === 'video' ?
                                    <img
                                        src={`https://img.youtube.com/vi/${data.image_url.split("=")[1].substr(0,11)}/0.jpg`}
                                        alt="news"
                                        className="img-news shadow-sm"
                                    />
                                    :
                                    <img
                                        src={data.image_url}
                                        alt="news"
                                        className="img-news shadow-sm"
                                    />
                                  }
                                    <Row>
                                      <Col sm={12} xs={12}>
                                        <div className="card-body shadow-sm bg-white">
                                          <Container fluid>
                                            <div className="news-ktg mb-3">
                                              {data.category}
                                              {
                                                checkId(data.news_id) ?
                                                <img onClick={handleBookmark} data-news={data.news_id} className="float-right news-bookmark" src="/img/icons8-bookmark-added.svg" alt="bookmark" />
                                                :
                                                <img onClick={handleBookmark} data-news={data.news_id} className="float-right news-bookmark" src="/img/icons8-bookmark.svg" alt="bookmark" />
                                              }
                                            </div>
                                            <div className="news-title">{data.title}</div>
                                            <div className="news-date mb-2">{filterDate(data.date_created.slice(0,10))}</div>
                                            <div className="news-desc mb-3">{data.short_content}</div>
                                            <Button data-news={data.news_id} onClick={handleNews} variant="contained" color="primary" className="shadow button-news mt-1 mb-2">
                                              <span data-news={data.news_id}>Baca Sekarang</span>
                                            </Button>
                                          </Container>
                                        </div>
                                      </Col>
                                    </Row>
                                  </Col>

                            )
                          }
                            </InfiniteScroll>
                          </Row>
                        </Fragment>
                      }
                    </Fragment>
                  }
                </Fragment>

              }

            </Fragment>
        </Fragment>
      }
    </Fragment>

    </>
  )
}

export default NewsContent;
