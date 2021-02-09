import React from "react";

export default function AboutCard(post) {
  const imageBackground = {
    backgroundImage: `url("${
      require(`../../assets/images/mama3.jpg`).default
    }")`,
  };
  const style = { ...imageBackground, ...post.style };

  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-cover" style={style}></div>
      </div>
      <div className="about-body">
        <div>
          <h2 className="about-title">Monika Maciejczuk</h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ullamcorper tortor nec sapien aliquet condimentum. Nam ultricies,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ullamcorper tortor nec sapien aliquet condimentum. Nam ultricies,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ullamcorper tortor nec sapien aliquet condimentum. Nam ultricies,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ullamcorper tortor nec sapien aliquet condimentum. Nam ultricies,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ullamcorper tortor nec sapien aliquet condimentum. Nam ultricies,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ullamcorper tortor nec sapien aliquet condimentum. Nam ultricies,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ullamcorper tortor nec sapien aliquet condimentum. Nam ultricies,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ullamcorper tortor nec sapien aliquet condimentum. Nam ultricies,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ullamcorper tortor nec sapien aliquet condimentum. Nam ultricies,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ullamcorper tortor nec sapien aliquet condimentum. Nam ultricies,
          </p>
        </div>
      </div>
    </div>
  );
}
