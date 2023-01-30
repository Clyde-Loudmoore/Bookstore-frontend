import { useLottie } from 'lottie-react';

import StyledComments from './Comments.styled';

import prod from '../../../utils/production.json';

const Comments: React.FC = () => {
  const options = {
    animationData: prod,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <StyledComments>
      {View}
      <p>Comments in development...</p>
    </StyledComments>
  );
};

export default Comments;
