import styled from "styled-components";
export const SkillsCardStyle = styled.div`
  padding: 16px 16px;
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-basis: 30%;
  border-radius: 16px;
  box-shadow: 0 3px 1px -2px #00b388, 0 2px 2px 0 #00b388, 0 1px 5px 0 #00b388;
  h2 {
    padding: 16px;
    border-radius: 16px;
    font-size: 24px;
    font-weight: 700;
    box-shadow: 4px 4px 0px 2px #00b388;
  }
  h3 {
    padding: 16px;
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.Light};
  }
  span {
    color: #00b388;
    font-weight: 600;
    font-size: 13px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
  }
`;