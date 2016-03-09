'use strict';

import React, { PropTypes } from 'react';

require('styles/shared/MaterialIcon.scss');

class MaterialIconComponent extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <i className="materialicon-component material-icons">
        { name }
      </i>
    );
  }
}

MaterialIconComponent.displayName = 'SharedMaterialIconComponent';

// Uncomment properties you need
MaterialIconComponent.propTypes = {
  name: PropTypes.string.isRequired
};
// MaterialIconComponent.defaultProps = {};

export default MaterialIconComponent;
