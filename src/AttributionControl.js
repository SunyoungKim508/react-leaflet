import { PropTypes } from 'react';
import { control } from 'leaflet';

import MapControl from './MapControl';

export default class AttributionControl extends MapControl {
  static propTypes = {
    prefix: PropTypes.string,
  };

  constructor(props) {
  	super(props);
    this.leafletElement = control.attribution(props);
  }
}
