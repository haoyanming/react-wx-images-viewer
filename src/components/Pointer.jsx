import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Pointer extends PureComponent {
  static propTypes = {
    length: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    changeIndex: PropTypes.func,
    bottomComponentsType: PropTypes.string
  }

  renderBottom() {
    const {
      length,
      changeIndex,
      index,
      bottomComponentsType
    } = this.props
    if (bottomComponentsType === 'pointer') {
      let i = 0, items = [];
      for (i; i < length; i++) {
        if (i === index) {
          items.push(<span onClick={changeIndex.bind(null, i)} key={i} className="pointer on"></span>);
        } else {
          items.push(<span onClick={changeIndex.bind(null, i)} key={i} className="pointer"></span>);
        }
      }
      return items
    } else if (bottomComponentsType === 'number') {
      return (
          <span style={{"color": '#fff'}}>
          {index + 1}/{length}
          </span>
      )
    }


  }

  render() {

    return (
        <div className="viewer-image-pointer">
          {
            this.renderBottom()
          }
        </div>
    );
  }
}

export default Pointer;
