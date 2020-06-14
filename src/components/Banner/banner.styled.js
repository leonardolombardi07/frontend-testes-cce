import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 600px;
  background-size: cover;
  background-position: center center;
  background-image: url(${(p) => p.backgroundImage});
  background-color: rgba(255, 255, 255, 0.3);
  transform: translate3d(0px, 50px, 0px);
  opacity: 0.85;
  display: flex;
  align-items: center;
  justify-content: center;
`;
