import { PropTypes } from 'react';
import { tileLayer } from 'leaflet';

import BaseTileLayer from './BaseTileLayer';

export default class WMSTileLayer extends BaseTileLayer {
  static propTypes = {
    url: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    const { map: _map, layerContainer: _lc, url, ...options } = props;
    this.leafletElement = tileLayer.wms(url, options);
  }
}
