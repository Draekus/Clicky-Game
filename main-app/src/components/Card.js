import React, { Component } from "react";
import images from "../images";

class Card extends Component {
  state = {
    images: images,
  };

  buildCards = () => {
    const cardVar = images.map((image, index) => (
      <div>
        <div className="row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src={image.url} alt={image.alt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        {cardVar}
      </div>
    )
  };

  render() {
    return <div>{this.buildCards()}</div>;
  }
}

export default Card;
