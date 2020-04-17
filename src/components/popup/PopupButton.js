import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import ClickableComponent from '../ClickableComponent';
import Popup from './Popup';

const propTypes = {
  inline: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string
};

const defaultProps = {
  inline: true
};

export default function PopupButton(props) {
  const { inline, className, buttonClassName } = props;
  const ps = { ...props };
  delete ps.children;
  delete ps.inline;
  delete ps.className;

  return (
    <div
      className={classNames(className, 'video-react-popup-button-container')}
    >
      <ClickableComponent
        className={classNames(
          buttonClassName,
          {
            'video-react-menu-button-inline': !!inline,
            'video-react-menu-button-popup': !inline
          },
          'video-react-control video-react-button video-react-menu-button'
        )}
        {...ps}
      />
      <Popup {...props} />
    </div>
  );
}

PopupButton.propTypes = propTypes;
PopupButton.defaultProps = defaultProps;
PopupButton.displayName = 'PopupButton';
