import { useLottie } from 'lottie-react';

import StyledLoading from 'src/ui/components/Loading/Loading.styled';

import loader from 'src/utils/loading.json';

const Loading: React.FC = () => {
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
