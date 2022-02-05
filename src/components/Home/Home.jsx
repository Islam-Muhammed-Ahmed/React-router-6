import React from "react";
import { FaMugHot } from "react-icons/fa";
import {
  HomeSection,
  TextCenter,
  Paragraph,
  Span,
  Para,
} from "./HomeStyle.jsx";
import Nav from "../Nav/Nav";

function Home() {
  return (
    <>
      <Nav />
      <HomeSection>
        <div className="text">
          <TextCenter>
            <Paragraph>
              Coffee Time{" "}
              <Span>
                {" "}
                <FaMugHot />
              </Span>{" "}
            </Paragraph>
            <Para>Smell it </Para>
            <Para>taste it</Para>
          </TextCenter>
        </div>
      </HomeSection>
    </>
  );
}

export default Home;
