import React, { Component } from 'react'
// const MAPS_API_KEY = 'AIzaSyA4CnjqWeGHnG4FyA7_jn7KyHD5h_sQblY'
// import data from '../data.json'
import { Link } from 'react-router'

export default class Restaurants extends Component {
  render () {
    return <div className='rest1'>
      <h1>Restaurants i enjoy</h1>
      <button><Link to='/Header' />Home</button>
      {/* <div className='google-maps'>
        <iframe width='600' height='450' frameBorder='0' style={{border: 0}}
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:${location.mapPlaceId}&key=${MAPS_API_KEY}`} allowFullScreen />
      </div> */}
    </div>
  }
}
