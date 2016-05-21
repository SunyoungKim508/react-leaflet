import { PropTypes } from 'react';
import { multiPolygon } from 'leaflet';

import latlngListType from './types/latlngList';
import Path from './Path';

export default class MultiPolygon extends Path {
  static propTypes = {
    polygons: PropTypes.arrayOf(latlngListType).isRequired,
  };

  constructor(props) {
    super(props);
    const { map: _map, layerContainer: _lc, polygons, ...options } = props;
    this.leafletElement = multiPolygon(polygons, options);
  }

  componentDidUpdate(prevProps) {
    if (this.props.polygons !== prevProps.polygons) {
      this.leafletElement.setLatLngs(this.props.polygons);
    }
    this.setStyleIfChanged(prevProps, this.props);
  }
}
