import { tileLayer } from 'leaflet';

import BaseTileLayer from './BaseTileLayer';

export default class CanvasTileLayer extends BaseTileLayer {
  constructor(props) {
    super(props);
    const { map: _map, layerContainer: _lc, ...options } = props;
    this.leafletElement = tileLayer.canvas(options);
  }
}
