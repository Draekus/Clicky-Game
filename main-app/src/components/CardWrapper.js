import React from "react";
import Card from "./Card";
import Styled from "styled-components";

const WrapperDiv = Styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: center;
  align-items: center;
  max-width: 80%;
  margin: 30px auto;
`;
  
const CardWrapper = props => {
  const renderCards = () =>
    props.images.map((image, index) => (
      <Card
        url={image.url}
        alt={image.alt}
        key={index}
        id={index}
        clicked={image.clicked}
        clickHandler={props.clickHandler}
      />
    ));
  return <WrapperDiv>{renderCards()}</WrapperDiv>;
};

export default CardWrapper;
