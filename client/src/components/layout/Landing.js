import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = () => {
  return (
    <section>
      <div className="comma-background--black">
        asd
                <div className="comma-landing-cover-content-actions">
          <p>Welcome back Alex</p>
          <div className='x-button--white x-button--large'>
            <Link to='/map' className='btn btn-primary'>
              Let´s get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Landing);
