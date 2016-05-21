import { PropTypes } from 'react';
import { multiPolyline } from 'leaflet';

import latlngListType from './types/latlngList';
import Path from './Path';

export default class MultiPolyline extends Path {
  static propTypes = {
    polylines: PropTypes.arrayOf(latlngListType).isRequired,
  };

  constructor(props) {
    super(props);
    const { map: _map, layerContainer: _lc, polylines, ...options } = props;
    this.leafletElement = multiPolyline(polylines, options);
  }

  componentDidUpdate(prevProps) {
    if (this.props.polylines !== prevProps.polylines) {
      this.leafletElement.setLatLngs(this.props.polylines);
    }
    this.setStyleIfChanged(prevProps, this.props);
  }
}
