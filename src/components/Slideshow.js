import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./Slideshow.css";
import "react-slideshow-image/dist/styles.css";

class Slideshow extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 2000,
      autoplay: true,
      transitionDuration: 500,
      arrows: true,
      infinite: true,
      easing: "ease",
      indicators: (i) => <div className="indicator">{i + 1}</div>
    };
    const slideImages = [
      "https://sites.psu.edu/siowfa16/files/2016/09/baby-seal-29vsgyf.jpg",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-baby-animals-1558535060.jpg?crop=0.752xw:1.00xh;0.125xw,0&resize=640:*",
      "https://i0.wp.com/cuethat.com/wp-content/uploads/2017/12/cute-animal-pictures-wow.jpg?resize=533%2C800",
      "https://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-10.jpg",
      "https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1619032302/shape/mentalfloss/62012-gettyimages-652385142.jpg?itok=gmp8svWe",
      "https://assets.afcdn.com/album/D20170523/phalbm25176407_w320.jpg",
      "https://pbs.twimg.com/profile_images/477022793142267904/UTHgo6G7_400x400.jpeg",
      "https://hips.hearstapps.com/prima.cdnds.net/assets/16/01/1280x853/gallery-1451910359-hamster-playing-tennis.jpg?resize=480:*"
    ];
    return (
      <div className="App">
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each} alt="sample" />
              </div>
            ))}
          </Slide>
        </div>

        {/* <div className="slide-container buttons">
          <button onClick={this.back} type="button">
            Back
          </button>
          <button onClick={this.next} type="button">
            Next
          </button>
        </div> */}
      </div>
    );
  }
}

export default Slideshow;