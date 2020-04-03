import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  label: PropTypes.string,
  index: PropTypes.number,
  activateIndex: PropTypes.number,
  onSelectItem: PropTypes.func,
  isCaptionOption: PropTypes.bool
};

export default class MenuItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { index, onSelectItem } = this.props;
    onSelectItem(index);
  }

  render() {
    const { label, index, activateIndex } = this.props;
    const closedCaptionText =
      this.props.isCaptionOption && index !== 0 ? '[CC]' : '';
    return (
      <div
        className={classNames('video-react-menu-item')}
        role="menuitem"
        onClick={this.handleClick}
        tabIndex="0"
      >
        <div
          className={classNames({
            'video-react-menu-item-radio': true,
            'video-react-menu-item-radio-selected': index === activateIndex
          })}
        />
        <p>
          {label} {closedCaptionText}
        </p>
      </div>
    );
  }
}

MenuItem.propTypes = propTypes;
MenuItem.displayName = 'MenuItem';
