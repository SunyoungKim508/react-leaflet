import { rectangle } from 'leaflet';

import boundsType from './types/bounds';
import Path from './Path';

export default class Rectangle extends Path {
  static propTypes = {
    bounds: boundsType.isRequired,
  };

  constructor(props) {
    super(props);
    const { bounds, map: _map, layerContainer: _lc, ...options } = props;
    this.leafletElement = rectangle(bounds, options);
  }

  componentDidUpdate(prevProps) {
    if (this.props.bounds !== prevProps.bounds) {
      this.leafletElement.setBounds(this.props.bounds);
    }
    this.setStyleIfChanged(prevProps, this.props);
  }
}
