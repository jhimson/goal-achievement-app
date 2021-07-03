import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Spinner = ({ loading }) =>
  loading ? (
    <Loader
      type="ThreeDots"
      color="#00BFFF"
      height={200}
      width={200}
      timeout={3000} // 3 secs
    />
  ) : null;

export default Spinner;
