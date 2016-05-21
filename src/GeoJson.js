import { PropTypes } from 'react';
import { geoJson } from 'leaflet';

import Path from './Path';

export default class GeoJson extends Path {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    const { data, map: _map, layerContainer: _lc, ...options } = props;
    this.leafletElement = geoJson(data, options);
  }

  componentDidUpdate(prevProps) {
    this.setStyleIfChanged(prevProps, this.props);
  }
}
