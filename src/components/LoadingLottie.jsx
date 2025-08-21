import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../public/loading.json';

const LoadingLottie = () => (
  <Lottie animationData={loadingAnimation} loop className="w-24 h-24 mx-auto" />
);

export default LoadingLottie;
