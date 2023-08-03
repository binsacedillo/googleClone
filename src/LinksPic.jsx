import styled from 'styled-components';
import profile from './images/profile.jpg';

const Container = styled.div`

  background-color: #202124;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  padding-top: 10px;
`;

const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
`;

const LinkContainer = styled.div`
  margin-right: 20px;
  margin-bottom: 2px;
`;

const Link = styled.a`
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const DotsIconContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

const DotsIcon = () => (
  <DotsIconContainer>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="4" r="2" />
      <circle cx="10" cy="4" r="2" />
      <circle cx="16" cy="4" r="2" />

      <circle cx="4" cy="10" r="2" />
      <circle cx="10" cy="10" r="2" />
      <circle cx="16" cy="10" r="2" />

      <circle cx="4" cy="16" r="2" />
      <circle cx="10" cy="16" r="2" />
      <circle cx="16" cy="16" r="2" />
    </svg>
  </DotsIconContainer>
);

const Button = styled.button`

  background-color: #202124;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <Container>
      <LinkContainer>
        <Link href="#">Gmail</Link>
      </LinkContainer>
      <LinkContainer>
        <Link href="#">Images</Link>
      </LinkContainer>
      <DotsIcon />
      <Button>
        <ProfilePic src={profile} alt="Profile Picture" />
      </Button>
    </Container>
  );
};

export default TopBar;
