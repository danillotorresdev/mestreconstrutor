import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

class MyMap extends React.Component {
  constructor () {
    super()
    this.state = {
      lat: 0,
      lng: 0,
      zoom: 16
    }
  }
  componentDidMount(){
      this.setState({
        lat: this.props.lat ? parseFloat(this.props.lat) : -23.6500189,
        lng: this.props.lng ? parseFloat(this.props.lng) : -46.9954319
      })
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution=''
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }

}

export default MyMap