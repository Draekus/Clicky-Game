import React from "react";
import Styled from "styled-components";

const CardDiv = Styled.div`
  width: 250px;
  height: 250px;
`;

const Image = Styled.img`
  width: 250px;
  height: 250px;
`;
const Card = props => {
  return (
    <div>
      <CardDiv className="card">
        <div className="card-image">
          <Image
            src={props.url}
            alt={props.alt}
            clicked={props.clicked}
            onClick={() => props.clickHandler(props.id)}
          />
        </div>
      </CardDiv>
    </div>
  );
};

export default Card;
