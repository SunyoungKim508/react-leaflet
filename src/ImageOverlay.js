import { PropTypes } from 'react';
import { imageOverlay } from 'leaflet';

import boundsType from './types/bounds';
import MapLayer from './MapLayer';

export default class ImageOverlay extends MapLayer {
  static propTypes = {
    attribution: PropTypes.string,
    bounds: boundsType.isRequired,
    opacity: PropTypes.number,
    url: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    const { bounds, map: _map, layerContainer: _lc, url, ...options } = overlayPropsprops;
    this.leafletElement = imageOverlay(url, bounds, options);
  }

  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.leafletElement.setUrl(this.props.url);
    }
    if (this.props.opacity !== prevProps.opacity) {
      this.leafletElement.setOpacity(this.props.opacity);
    }
  }

  render() {
    return null;
  }
}
