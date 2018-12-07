import React from 'react';
import PropTypes from 'prop-types';
import { gettext } from '../../utils/constants';

const propTypes = {
  isShowWikiAdd: PropTypes.bool.isRequired,
  addPosition: PropTypes.object.isRequired,
  onSelectToggle: PropTypes.func.isRequired,
  onCreateToggle: PropTypes.func.isRequired,
};

class WikiAdd extends React.Component {

  render() {
    let style = {};
    let {isShowWikiAdd, addPosition} = this.props;
    if (isShowWikiAdd) {
      style = {position: 'fixed', top: addPosition.top, left: addPosition.left, display: 'block'};
    }
    return (
      <ul className="dropdown-menu" style={style}>
        <li className="dropdown-item" onClick={this.props.onCreateToggle}>{gettext('New Wiki')}</li>
        <li className="dropdown-item" onClick={this.props.onSelectToggle}>{gettext('Choose a library as Wiki')}</li>
      </ul>
    );
  }
}

WikiAdd.propTypes = propTypes;

export default WikiAdd;
