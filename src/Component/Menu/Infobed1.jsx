import React, {Fragment, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
// import Axios from 'axios';

const bed  = [

    {
      "nama_kamar":"ANGGREK (Anak)",
      "jumlah_bed":10,
      "bed_terisi":0,
      "bed_kosong":10
    },
    {
      "nama_kamar":"ANGGREK (Balita)",
      "jumlah_bed":0,
      "bed_terisi":0,
      "bed_kosong":0
    },
    {
      "nama_kamar":"ANGGREK (ISOLASI)",
      "jumlah_bed":2,
      "bed_terisi":2,
      "bed_kosong":0
    },
    {
      "nama_kamar":"ANGGREK (Observasi Bayi)",
      "jumlah_bed":2,
      "bed_terisi":0,
      "bed_kosong":2
    },
    {
      "nama_kamar":"EDELWEIS (Bayi Baru Lahir)",
      "jumlah_bed":6,
      "bed_terisi":0,
      "bed_kosong":6
    },
    {
      "nama_kamar":"EDELWEIS (ISOLASI)",
      "jumlah_bed":2,
      "bed_terisi":0,
      "bed_kosong":2
    },
    {
      "nama_kamar":"EDELWEIS (Ruang Bersalin)",
      "jumlah_bed":4,
      "bed_terisi":1,
      "bed_kosong":3
    },
    {
      "nama_kamar":"EDELWEIS (Ruang Tindakan)",
      "jumlah_bed":3,
      "bed_terisi":0,
      "bed_kosong":3
    },
    {
      "nama_kamar":"HCU",
      "jumlah_bed":2,
      "bed_terisi":0,
      "bed_kosong":2
    },
    {
      "nama_kamar":"MAWAR",
      "jumlah_bed":19,
      "bed_terisi":4,
      "bed_kosong":15
    },
    {
      "nama_kamar":"MAWAR (ISOLASI)",
      "jumlah_bed":2,
      "bed_terisi":1,
      "bed_kosong":1
    }

]

const InfoBed = () => {



  const [state, setState] = useState({
    loading:true,
    data:bed,
    search:''
  });

  useEffect(() => {
    if (state.loading === true) {
      loaderPromise().then(() => setState({...state,loading:false}));
    }
  });

  const handleChange = (e) => {
    setState({
      ...state,
      search: e.target.value
    })
  }

  const loaderPromise = () => {
    return new Promise((resolve) => setTimeout(() => resolve(),1000));
  }

  let filteredSearch = state.data;
  let clientSearch = state.search.trim().toLowerCase();

  if (clientSearch.length > 0) {
    filteredSearch = state.data.filter((data) => {
      return data.nama_kamar.toLowerCase().indexOf(clientSearch) !== -1;
    });
  }

  return(

    <Fragment>
        {
          state.loading ?
          <div className="loader" />
          :
          <div />
        }
        <Navbar className="navbar-content sticky-top info-bed-v2">
          <Navbar.Brand>
            <Link to="/" style={{textDecoration:'none'}}>
              <i className="fas fa-arrow-left back title-info-bed-v2"></i>
            </Link>
            <span className="title-content title-info-bed-v2">Informasi Kamar</span>
          </Navbar.Brand>
        </Navbar>
          {
            state.loading ?
            <Fragment>
              <Row style={{height:'400px',width:'100%',overflow:'hidden'}}>
                <Col xs={12} sm={12}>
                  <center>
                    <div className="loading-info-bed-v2 shadow-lg">
                      <i className="fas fa-spinner spin"></i>
                      <span className="loading-text">Loading...</span>
                    </div>
                    <span className="loading-text1-info-bed-v2" style={{left:'44px'}}>Get Bed Information</span>
                  </center>
                </Col>
              </Row>
            </Fragment>
            :
              <Row className="row-info-bed-v2">
                <Container>
                <center>
                  <div className="search-nav">
                    <i className="fas fa-search icon-search"></i>
                    <input type="text" placeholder="Search" onChange={handleChange} />
                  </div>
                </center>
                <div className="row-bed-v2">
                  <center>
                    <div className="title-content-active mt-3 mb-3" style={{color:'#3D47DB'}}>Current room availability status</div>
                  </center>
                  {
                    filteredSearch.map((data,index) =>
                    <Fragment>
                      {
                        data.jumlah_bed <= 0 ?
                          <Fragment>
                                <Col sm={12} xs={12} className="col-info-bed-v2 shadow-sm mb-1" key={index}>
                                  <Row>
                                    <Col xs={12} sm={12} className="p-2">
                                        <div className="jml-bed-v2 primary rs-name-v2 float-left">{data.nama_kamar}</div>
                                          <div className="jml-bed-v2 status-bed float-right danger">
                                            Tidak Tersedia
                                          </div>
                                    </Col>
                                  </Row>
                                </Col>
                          </Fragment>
                        :
                        <Fragment>
                              <Col sm={12} xs={12} className="col-info-bed-v2 shadow-sm mb-1" key={index}>
                                <Row>
                                  <Col xs={12} sm={12} className="p-2">
                                      <div className="jml-bed-v2 primary rs-name-v2 float-left">{data.nama_kamar}</div>
                                      {
                                        data.bed_kosong >= 1 ?
                                        <div className="jml-bed-v2 status-bed float-right primary">
                                          Tersedia
                                        </div>
                                        :
                                        <div className="jml-bed-v2 status-bed float-right danger">
                                          Penuh
                                        </div>
                                      }
                                  </Col>
                                </Row>
                              </Col>
                        </Fragment>
                      }
                    </Fragment>

                    )
                  }

                </div>

                </Container>
              </Row>
          }

    </Fragment>
  )
}

export default InfoBed;
