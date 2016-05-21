import { PropTypes } from 'react';
import { tileLayer } from 'leaflet';

import BaseTileLayer from './BaseTileLayer';

export default class TileLayer extends BaseTileLayer {
  static propTypes = {
    url: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    const { map: _map, layerContainer: _lc, url, ...options } = props;
    this.leafletElement = tileLayer(url, options);
  }

  componentDidUpdate(prevProps) {
    super.componentDidUpdate(prevProps);
    const { url } = this.props;
    if (url !== prevProps.url) {
      this.leafletElement.setUrl(url);
    }
  }
}
