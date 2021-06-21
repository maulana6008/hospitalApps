import React,{useState, useEffect} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Circle} from 'google-maps-react';

export const MapContainer = (props) => {

  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    directions:null
  })
  useEffect(() => {
    console.log(state.directions);
  })

  const directionsService = new props.google.maps.DirectionsService();

  const origin = { lat: 40.756795, lng: -73.954298 };
  const destination = { lat: 41.756795, lng: -78.954298 };

  directionsService.route(
    {
      origin: origin,
      destination: destination,
      travelMode: props.google.maps.TravelMode.DRIVING
    },
    (result, status) => {
      if (status === props.google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    }
  );


  const onMarkerClick = (props, marker, e) => {
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
        google={props.google}
        onClick={onMapClicked}
        initialCenter={{
          lat: -6.966667,
          lng: 110.416664
        }}
      >
      {/*  <Marker
          onClick={onMarkerClick}
          name={'Current'}
          icon={{
            url: "http://maps.google.com/mapfiles/kml/shapes/library_maps.png",
            scaledSize: new props.google.maps.Size(34,34)
          }}
          position={{lat: -6.966667, lng: 110.416664}}
        />
        <InfoWindow
          marker={state.activeMarker}
          visible={state.showingInfoWindow}
          onClose={onInfoWindowClose}>
            <div>
              <h1>{state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>*/}
        <Circle
          radius={200}
          center={{lat: -6.966667, lng: 110.416664}}
          onMouseover={() => console.log('mouseover')}
          onClick={() => console.log('click')}
          onMouseout={() => console.log('mouseout')}
          strokeColor='transparent'
          strokeOpacity={0}
          strokeWeight={5}
          fillColor='#FF0000'
          fillOpacity={0.2}
        />
      </Map>
    )

}

export default GoogleApiWrapper({
  apiKey: ("blablabla")
})(MapContainer)
