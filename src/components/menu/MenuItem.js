import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  label: PropTypes.string,
  index: PropTypes.number,
  activateIndex: PropTypes.number,
  onSelectItem: PropTypes.func
};

export default class MenuItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  select() {
    const { index, onSelectItem } = this.props;
    onSelectItem(index);
  }

  handleClick() {
    this.select();
  }

  handleKeyDown(event) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.select();
    }
  }

  render() {
    const { label, index, activateIndex } = this.props;
    return (
      <div
        className={classNames({
          'video-react-menu-item': true,
          'video-react-menu-item-selected': index === activateIndex
        })}
        role="menuitem"
        onClick={this.handleClick}
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
      >
        <div
          className={classNames({
            'video-react-menu-item-radio': true,
            'video-react-menu-item-radio-selected': index === activateIndex
          })}
        />
        <p>{label}</p>
      </div>
    );
  }
}

MenuItem.propTypes = propTypes;
MenuItem.displayName = 'MenuItem';
