import { Dna } from 'react-loader-spinner';

import StyledLoading from './StyledLoading';

const Loading = () => {
  return (
    <StyledLoading>
      <Dna visible
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      <p className="loading__paragraph">Loading...</p>
    </StyledLoading>
  );
};

export default Loading;
