import { PropTypes } from 'react';
import { polygon } from 'leaflet';

import latlngListType from './types/latlngList';
import Path from './Path';

export default class Polygon extends Path {
  static propTypes = {
    positions: PropTypes.oneOfType([
      latlngListType,
      PropTypes.arrayOf(latlngListType),
    ]).isRequired,
  };

  constructor(props) {
    super(props);
    const { map: _map, layerContainer: _lc, positions, ...options } = props;
    this.leafletElement = polygon(positions, options);
  }

  componentDidUpdate(prevProps) {
    if (this.props.positions !== prevProps.positions) {
      this.leafletElement.setLatLngs(this.props.positions);
    }
    this.setStyleIfChanged(prevProps, this.props);
  }
}
