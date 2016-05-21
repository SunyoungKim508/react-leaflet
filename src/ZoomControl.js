import { PropTypes } from 'react';
import { control } from 'leaflet';

import MapControl from './MapControl';

export default class ZoomControl extends MapControl {
  static propTypes = {
    zoomInText: PropTypes.string,
    zoomInTitle: PropTypes.string,
    zoomOutText: PropTypes.string,
    zoomOutTitle: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.leafletElement = control.zoom(props);
  }
}
