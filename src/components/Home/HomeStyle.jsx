/* @import url('https://fonts.googleapis.com/css2?family=Comforter&display=swap'); */

//  @import url('https://fonts.googleapis.com/css2?family=Comforter&family=Sedgwick+Ave&display=swap');

import styled from "styled-components";

export const HomeSection = styled.div`
  background-image: url("images/Home-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100% 100%;
  width: 100%;
  height: 100vh;
  filter: brightness(0.8);
  -webkit-filter: brightness(0.8);
`;

export const TextCenter = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 7vw;
  /* font-family: 'Comforter', cursive; */
  font-family: "Sedgwick Ave", cursive;
  font-weight: 900;
`;

export const Span = styled.span`
  color: #582306;
`;

export const Para = styled.p`
  font-size: 2.5rem;
  color: #fff;
`;
