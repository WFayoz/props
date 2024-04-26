import React from "react";
import "./styles/storyStyle.scss";
import story1 from '../../../public/story1.png'
import story2 from '../../../public/story2.png'
import story3 from '../../../public/stroy3.png'
import story4 from '../../../public/story4.png'

const Story = () => {
  return (
    <div className="story">
      <div className="story__top">
        <h4>Trending stories</h4>
        <p>
          View all{""}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
          >
            <path
              d="M1 1L5 5.5L1 10"
              stroke="#FB8F1D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </p>
      </div>
      <div className="story__bottom">
        <div className="card">
          <img src={story1} alt="" />
          <h5 className="title">
            {" "}
            The many benefits of taking a healing holiday
          </h5>
          <p className="cardDes">
            ‘Helaing holidays’ are on the rise tohelp maximise your health and
            happines...
          </p>
          <p className="cardRead">Read more</p>
        </div>
        <div className="card">
          <img src={story2} alt="" />
          <h5 className="title">
            The best Kyoto restaurant to try Japanese food
          </h5>
          <p className="cardDes">
            From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
            to visit...
          </p>
          <p className="cardRead">Read more</p>
        </div>
        <div className="card">
          <img src={story3} alt="" />
          <h5 className="title">
            Skip Chichen Itza and head to this remote Yucatan
          </h5>
          <p className="cardDes">
            It’s remote and challenging to get, but braving the jungle and
            exploring these ruins without the...
          </p>
          <p className="cardRead">Read more</p>
        </div>
        <div className="card">
          <img src={story4} alt="" />
          <h5 className="title">
            Surf’s up at these beginner spots around the world
          </h5>
          <p className="cardDes">
            If learning to surf has in on your to- do list for a while, the good
            news is: it’s never too late...
          </p>
          <p className="cardRead">Read more</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
