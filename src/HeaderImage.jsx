import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import centeredImage from './images/googleheaderimage.png';
import image1 from './images/voice.png';
import image2 from './images/image.png';

const CenteredImageWrapper = styled.div`
  display: flex;
  background-color: #202124;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 70px;
  min-height: 20vh;
`;

const CenteredImage = styled.img`
  max-width: 100%;
  max-height: calc(100% - 40px);
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: none;
  padding: 10px 20px;
  border-radius: 20px;
  margin-top: 20px;
  border: 1px solid rgb(87, 90, 95);
  width: 520px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  color: rgb(131, 136, 141);
  background: none;
  margin-right: 10px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  color: white; /* Change the color of the text to white */

  /* Remove the blinking cursor outline when clicked */
  &:focus {
    outline: none;
    caret-color: white; /* Change the color of the blinking cursor to white */
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AdditionalImage = styled.img`
  width: 23px;
  height: 23px;
  margin-left: 10px;
`;

const AdditionalImage2 = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: rgb(48, 49, 52);
  border: none;
  color: white;
  border-radius: 5px;
  padding: 12px 20px;
  font-size: 14px;
  margin: 0 5px;
  cursor: pointer;
  outline: none;
`;

const TextLinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

const Text = styled.p`
  color: rgb(169, 173, 177);
  font-size: 13px;
  margin: 0 5px;
`;

const Link = styled.a`
  color: rgb(124, 180, 248);
  font-size: 13px;
  text-decoration: none;
  margin: 0 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const CenteredImageComponent = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <CenteredImageWrapper>
      <CenteredImage src={centeredImage} alt="Centered Image" />
      <SearchBarWrapper>
        <SearchIcon icon={faSearch} />
        {/* Remove the placeholder and add the autoFocus attribute */}
        <SearchInput
          type="text"
          placeholder=""
          value={value}
          onChange={handleChange}
          autoFocus
        />
        <ImageContainer>
          <AdditionalImage src={image1} alt="Image 1" />
          <AdditionalImage2 src={image2} alt="Image 2" />
        </ImageContainer>
      </SearchBarWrapper>
      <ButtonsWrapper>
        <Button>Google Search</Button>
        <Button>I&rsquo;m Feeling Lucky</Button>
      </ButtonsWrapper>
      <TextLinksContainer>
        <Text>Google offered in:</Text>
        <Link href="#">Filipino</Link>
        <Link href="#">Cebuano</Link>
      </TextLinksContainer>
    </CenteredImageWrapper>
  );
};

export default CenteredImageComponent;
