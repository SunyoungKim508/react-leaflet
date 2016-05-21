import { PropTypes } from 'react';
import { featureGroup } from 'leaflet';

import Path from './Path';

export default class FeatureGroup extends Path {
  static childContextTypes = {
    layerContainer: PropTypes.object,
    popupContainer: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.leafletElement = featureGroup();
  }

  getChildContext() {
    return {
      layerContainer: this.leafletElement,
      popupContainer: this.leafletElement,
    };
  }

  componentDidMount() {
    super.componentDidMount();
    this.setStyle(this.props);
  }

  componentDidUpdate(prevProps) {
    this.setStyleIfChanged(prevProps, this.props);
  }

  render() {
    return this.renderChildren();
  }
}
