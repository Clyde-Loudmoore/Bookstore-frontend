/* eslint-disable react/jsx-no-useless-fragment */
import { useLottie } from 'lottie-react';

import StyledLoading from './StyledLoading';

import loader from './loading.json';

const Loading = () => {
  const options = {
    animationData: loader,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <StyledLoading>
      {View}
    </StyledLoading>
  );
};

export default Loading;
