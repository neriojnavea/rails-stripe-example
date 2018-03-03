import React from 'react';
import PropTypes from 'prop-types';

const Card = ({title, children}) => (
  <div className="row mt-2">
    <div className="col-md">
      <div className="card">
        <div className="card-header text-center">
          {title}
        </div>
        <div className="card-body">
          <div className="row">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

Card.defaultProps = {};

Card.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
