import { useLottie } from 'lottie-react';

import StyledNoComments from 'src/ui/pages/BookPage/Comments/NoComments/NoComments.styled';

import noComments from 'src/utils/no-comments.json';

const NoComments: React.FC = () => {
  const options = {
    animationData: noComments,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <StyledNoComments>
      {View}
      <p className="text">There are no comments..</p>
    </StyledNoComments>
  );
};

export default NoComments;
