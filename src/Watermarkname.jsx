import styled from 'styled-components';

const WatermarkName = styled.div`
  position: absolute;
  left: 50%;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.2);
  pointer-events: none;
  /* Add any other styling properties you want for the watermark name */
`;

const Watermark = () => {
  return <WatermarkName>&copy; MADE BY VINCE 2023</WatermarkName>;
};

export default Watermark;
