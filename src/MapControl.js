import { Component, PropTypes } from 'react';

import controlPositionType from './types/controlPosition';

export default class MapControl extends Component {
  static propTypes = {
    // map: PropTypes.object,
    position: controlPositionType,
  };

  static contextTypes = {
    map: PropTypes.object,
  };

  componentDidMount() {
    this.leafletElement.addTo(this.context.map);
  }

  componentDidUpdate(prevProps) {
    if (this.props.position !== prevProps.position) {
      this.leafletElement.setPosition(this.props.position);
    }
  }

  componentWillUnmount() {
    this.leafletElement.removeFrom(this.context.map);
  }

  getLeafletElement() {
    return this.leafletElement;
  }

  render() {
    return null;
  }
}
