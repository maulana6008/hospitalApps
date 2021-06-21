import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import '../style/style.css';

export const MapContainer = (props) => {


  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  })


  const onMarkerClick = (props, marker, e) => {
    console.log(e);
    console.log(marker);
    setState({
      ...state,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }


  const onMapClicked = (props) => {
    if (state.showingInfoWindow) {
      setState({
        ...state,
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  const onInfoWindowClose = () => {
    setState({
      ...state,
      showingInfoWindow: false,
      activeMarker: null
    })
  }

    return (
          <Map
            containerStyle={{position:'absolute',width:'100%',height:'100%'}}
            google={props.google}
            onClick={onMapClicked}
            initialCenter={{
              lat: -7.01224,
              lng: 109.9151474
            }}
            zoom={16}
          >
          <Marker
              onClick={onMarkerClick}
              name={'Warung Makan Pizzu'}
              title={'sadsad'}
              icon={{
                url: "http://maps.google.com/mapfiles/kml/shapes/library_maps.png",
                scaledSize: new props.google.maps.Size(34,34),
                anchor: new props.google.maps.Point(12,12)
              }}
              position={{lat: -7.01224, lng: 109.9151474}}
            />
            <InfoWindow
              marker={state.activeMarker}
              visible={state.showingInfoWindow}
              onClose={onInfoWindowClose}
              className={"info-window"}
            >
                <Row>
                  <Container fluid>
                    <Col sm={12} xs={12}>
                      <span className="text-mark">{state.selectedPlace.name}</span>
                    </Col>
                  </Container>
                </Row>
            </InfoWindow>

          </Map>
    )

}

export default GoogleApiWrapper({
  apiKey: ("blablabla")
})(MapContainer)
