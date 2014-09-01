/** @jsx React.DOM */
'use strict';

var React = require('react');

var MapComponent = (function () {
  return React.createClass({

    propTypes: {
      accessToken: React.PropTypes.string.isRequired,
      mapId: React.PropTypes.string.isRequired,      
    },

    componentDidMount: function () {
      // Provide your access token
      L.mapbox.accessToken = this.props.accessToken;
      
      // Create a map in the div #map
      var map = L.mapbox.map('map', this.props.mapId);      
    },

    // Called on initialization and after each change to the components
    // props or state
    render: function () {
      return (
        <div id="map"></div>        
      )
    }
  });
})();

React.renderComponent(<MapComponent accessToken={'pk.eyJ1IjoiZm91cmN1YmUiLCJhIjoiX0FWUTFNdyJ9.8lQfeZEk-_lVkh0qIPXw-w'}
  mapId={'fourcube.jd03l3mn'}/>,
  document.getElementById('content'));