import styled from 'styled-components';

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;

  @media (min-width: 834px) and (max-width: 1439px) {
    padding: 0 11px 0 15px;
  }

  @media (min-width: 320px) and (max-width: 833px) {
    padding: 0 15px;
  }

`;

export default ContentWrapper;
