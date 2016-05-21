import { assign } from 'lodash';
import React, { cloneElement, Children, PropTypes } from 'react';
import { Map } from 'leaflet';

import childrenType from './types/children';
import layerContainerType from './types/layerContainer';

import MapComponent from './MapComponent';

export default class MapLayer extends MapComponent {
  static propTypes = {
    children: childrenType,
  };

  static contextTypes = {
    layerContainer: layerContainerType,
    map: PropTypes.instanceOf(Map),
  };

  componentDidMount() {
    super.componentDidMount();
    this.context.layerContainer.addLayer(this.leafletElement);
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    this.context.layerContainer.removeLayer(this.leafletElement);
  }

  renderChildren() {
    return <div style={{display: 'none'}}>{this.props.children}</div>;
  }
}
