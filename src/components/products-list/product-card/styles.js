import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 100%;
  background-color: white;
  margin-bottom: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const Text = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-left: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;

export const Banner = styled.div`
  position: absolute;
  top: 8%;
  left: 0;
  width: 35%;
  background: ${(props) => props.theme.colors.primaryBlue};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  transform: skewY(-14deg);
  transform-origin: top left;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;


export const Size = styled.p`
  font-size: 0.9rem;
  margin: 0px;
  padding: 6px;
  color: #777777;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
