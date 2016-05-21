import { PropTypes } from 'react';
import { layerGroup } from 'leaflet';

import MapLayer from './MapLayer';

export default class LayerGroup extends MapLayer {
	static childContextTypes = {
    layerContainer: PropTypes.object,
  };

  constructor(props) {
  	super(props);
    this.leafletElement = layerGroup();
  }

  getChildContext() {
    return {
      layerContainer: this.leafletElement,
    };
  }

  render() {
    return this.props.children;
  }
}
