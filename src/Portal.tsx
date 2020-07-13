import React from 'react';
import ReactDOM from 'react-dom';

interface IPortal {
  getContainer: any;
  ref: any;
}

export default class Portal extends React.Component<IPortal> {
  private _container: any;
  componentDidMount() {
    this.createContainer();
  }

  componentWillUnmount() {
    this.removeContainer();
  }

  createContainer() {
    this._container = this.props.getContainer();
    this.forceUpdate();
  }

  removeContainer() {
    if (this._container) {
      this._container.parentNode.removeChild(this._container);
    }
  }

  render() {
    if (this._container) {
      return ReactDOM.createPortal(this.props.children, this._container);
    }
    return null;
  }
}
