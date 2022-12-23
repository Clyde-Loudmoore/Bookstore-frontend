import styled from 'styled-components';

const SingUpWrapper = styled.main`
  padding:50px 0 154px 0;
  display: flex;
  justify-content: space-between;

.form__container{
  display: flex;
  flex-direction: column;
}

p{
  font-weight: 500;
  font-size: 14px;
  line-height:28px;
  color: #344966;
  margin: 9px 0 30px 0;
}

.SyngUpBG {
  max-width: 612px;
  height: 552px;
}
  
.sing-up__header{
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  margin-bottom: 60px;
}

.sing-up__button{
  max-width: 166px;
  width: 100%;
  height: 44px;
  margin: 30px 0 0 0;
}

@media (min-width: 834px) and (max-width: 1439px) {
  padding: 55px 0 104px 0;

.sing-up__header{
  font-size: 32px;
  line-height: 48px;
  margin: 0 0 50px 0;
}

p{
  line-height:24px;
}

.SyngUpBG {
  max-width: 390px;
  height: 333px;
  margin-left: 20px;
}
}

@media (min-width: 320px) and (max-width: 833px) {
  padding:0 0 70px 0;
  flex-direction: column;

.sing-up__header{
  font-size: 18px;
  line-height: 27px;
  margin: 0 0 20px 0;
}

p{
  font-size: 12px;
  line-height:18px;
  margin: 5px 0 20px 0;
}

.sing-up__button{
margin: 40px 0 60px 0;
}

.SyngUpBG {
  max-width: 290px;
  height: 247px;
  margin-left: 0;
}
}

`;

export default SingUpWrapper;
