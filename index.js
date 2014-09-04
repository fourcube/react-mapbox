/** @jsx React.DOM */
'use strict';

var React = require('react');
var MapComponent = require('./lib/react-mapbox.js');

React.renderComponent(<MapComponent accessToken={'pk.eyJ1IjoiZm91cmN1YmUiLCJhIjoiX0FWUTFNdyJ9.8lQfeZEk-_lVkh0qIPXw-w'}
  mapId={'fourcube.jd03l3mn'}/>,
  document.getElementById('content'));
