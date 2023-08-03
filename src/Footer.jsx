import styled from 'styled-components';

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const FirstFooter = styled.div`
  background-color: rgb(23, 23, 23);
  color: rgb(154, 160, 166);
  font-size: 14px;
  padding: 15px 20px;
  text-align: left;
`;

const SecondFooter = styled.div`
  background-color: rgb(23, 23, 23);
  color: rgb(154, 160, 166);
  padding: 15px;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterLink = styled.span`
  text-decoration: none;
  margin: 0 8px;
  cursor: pointer;
  background-color: transparent; /* Remove the background color */
  
  &:hover {
    text-decoration: underline;
  }
`;

const SeparatorLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(60, 64, 67);
`;

const ResponsiveFooter = () => {
  return (
    <FooterWrapper>
      <FirstFooter>
        Philippines
      </FirstFooter>
      <SeparatorLine />
      <SecondFooter>
        <span>
          <FooterLink>About</FooterLink>
          <FooterLink>Advertising</FooterLink>
          <FooterLink>Business</FooterLink>
          <FooterLink>How Search Works</FooterLink>
        </span>
        <span>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Terms</FooterLink>
          <FooterLink>Settings</FooterLink>
        </span>
      </SecondFooter>
    </FooterWrapper>
  );
};

export default ResponsiveFooter;
