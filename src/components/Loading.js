import React from 'react';
import Loader from "react-loader-spinner";

// [References](https://github.com/mhnpd/react-loader-spinner)
function Component(props) {
  const { type, color, height, width } = props;

  return (
    <Loader
      type={type}
      color={color}
      height={height}
      width={width}
    />
  );
}

const Loading = Component;
Loading.defaultProps = {
  type : "Puff", 
  color : "#00BFFF", 
  height : "100", 
  width : "100"
};

export default Loading;