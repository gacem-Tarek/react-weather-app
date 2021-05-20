import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
//import Autocomplete from 'react-google-autocomplete';
import apiKeys, { GoogleMapsAPI } from '../apiKeys';
//import apiKeys from '../apiKeys';
//import axios from "axios";

Geocode.setApiKey( GoogleMapsAPI );
Geocode.enableDebug();

class Map extends Component{

/* Google mapsApi is not free so i couldent finish all the fonctionalities


	constructor( props ){
		super( props );
		this.state = {
			
			markerPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			},
		
		}
	}
	
	
	


    onInfoWindowClose = (e) => {

    }

	onMarkerDragEnd = ( event ) => {
		let newLat = event.latLng.lat(),
		    newLng = event.latLng.lng();

		Geocode.fromLatLng( newLat , newLng ).then(
			response => {
				 console.log("response", response)
				this.setState( {
					
					markerPosition: {
						lat: newLat,
						lng: newLng
					},
				
				} )
			},
			error => {
				console.error(error);
			}
		);
	};
	onPlaceSelected = async ( place ) => {
		console.log( 'plc', place );
        await axios
      .get(`${apiKeys.base}weather?q=${place.name}&units=metric&APPID=${apiKeys.key}`)
      .then((response) => {
		 
        this.setState({
			
			markerPosition: {
				lat: response.data.coord.lat,
				lng: response.data.coord.lon
			},
			
		})
      })
      .catch(function (error) {
        console.log(error);
      });

		
		
	};
	*/



	render(){
		const AsyncMap = withScriptjs(
			withGoogleMap(
				props => (
					<GoogleMap google={ this.props.google }
					           defaultZoom={ this.props.zoom }
					           defaultCenter={this.props.center}
					>
						{/* InfoWindow on top of marker */}
						<InfoWindow
							onClose={this.onInfoWindowClose}
							position={{lat: (this.props.center.lat +0.3 ), lng : this.props.center.lng} }
                            
						>
							<div>
							<span style={{ padding: 0, margin: 0 }}>{this.props.city}</span>
							</div>
						</InfoWindow>
						{/*Marker*/}
						<Marker google={this.props.google}
						       
						        
						      onDragEnd  ={ this.onMarkerDragEnd }
								draggable={true}
								name="current place"
						        position={this.props.center}
						/>
						<Marker />
						{/* For Auto complete Search Box	
						<Autocomplete
							style={{
								width: '100%',
								height: '40px',
								float:"right",
								paddingLeft: '16px',
								marginTop: '10px',
								marginBottom: '10px'
							}}
							onPlaceSelected={ this.onPlaceSelected }
							types={['
					(regions)']}
						/> */}
					</GoogleMap>
				)
			)
		);
		let map;
		if( this.props.center.lat !== undefined ) {
			map = <div>
				

				<AsyncMap
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GoogleMapsAPI}&libraries=places`}
					loadingElement={
						<div style={{ height: `100%`, width:`100%`,float:"right" }} />
					}
					containerElement={
						<div style={{boxShadow: "1px 1px 5px 1px ",
    
							marginTop: "25px",marginLeft:" 50px",
							marginRight: "50px",height: this.props.height , width: this.props.width,float:"right" }} />
					}
					mapElement={
						<div style={{ height: `100%` , width:`100%`,float:"right"}} />
					}
				/>
			</div>
		} else {
			map = <div style={{height: this.props.height}} />
		}
		return( map )
	}
}
export default Map