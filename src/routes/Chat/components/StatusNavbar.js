import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./StatusNavbar.scss";


let StatusNavbar = ({ title_status_navbar }) => {
  return <div className='title-status-navbar'>{title_status_navbar}</div>;
};

const mapStateToProps = state => ({
  title_status_navbar: state.chat.title_status_navbar
});

const mapDispatchToProps = dispatch => {
  return {};
};

StatusNavbar.propTypes = {
  title_status_navbar: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusNavbar);
