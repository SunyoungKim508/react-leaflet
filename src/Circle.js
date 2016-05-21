import { PropTypes } from 'react';
import { circle } from 'leaflet';

import latlngType from './types/latlng';
import Path from './Path';

export default class Circle extends Path {
  static propTypes = {
    center: latlngType.isRequired,
    radius: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    const { center, map: _map, layerContainer: _lc, radius, ...options } = props;
    this.leafletElement = circle(center, radius, options);
  }

  componentDidUpdate(prevProps) {
    if (this.props.center !== prevProps.center) {
      this.leafletElement.setLatLng(this.props.center);
    }
    if (this.props.radius !== prevProps.radius) {
      this.leafletElement.setRadius(this.props.radius);
    }
    this.setStyleIfChanged(prevProps, this.props);
  }
}
