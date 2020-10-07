import React,{Component} from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'
import './contact-body.scss'

class Map extends Component{
    constructor(){
        super();
       
    }

 



    render() {
        const WrappedMap = withScriptjs(withGoogleMap((props) =>
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{lat:6.606215 , lng:3.303693}}
            >
            <Marker position={{lat:6.606215 , lng:3.303693}}
                />
            </GoogleMap> ))
        
        return(
            <div className='contact-body'>
        <WrappedMap
  isMarkerShown
  googleMapURL= {"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBpS4JYAXPpFQtnWKuEt6i9wfZmtvq-rj8"}
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
             </div>
        )
    }
}



 
export default Map