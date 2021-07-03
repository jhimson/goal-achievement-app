import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Spinner = ({ loading, type, height, width, color }) =>
  loading ? (
    <Loader
      type={type || 'ThreeDots'}
      color={color || '#00BFFF'}
      height={height || 50}
      width={width || 100}
      timeout={5000} // 3 secs
    />
  ) : null;

export default Spinner;
