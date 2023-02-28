import { useState } from "react";
import "./style.scss";
import Abouth_comp from "../../assets/components/abouth_girls";
import img1 from "../../assets/img/about-01.jpg";
import img2 from "../../assets/img/about-02.jpg";
import img3 from "../../assets/img/about-03.jpg";
import img4 from "../../assets/img/about-04.jpg";
import fb from "../../assets/img/svg/fb.svg";
import yt from "../../assets/img/svg/yt.svg";
import insta from "../../assets/img/svg/insta.svg";
import twitter from "../../assets/img/svg/twitter.svg";
import papper from "../../assets/img/svg/pepper.svg";
import mug from "../../assets/img/svg/mug.svg";
import coctel from "../../assets/img/svg/coctel.svg";
import ReadMore from "../../assets/components/readmore";

function About() {
  const [girls, setGirls] = useState([
    {
      id: 1,
      img: img1,
      name: "Jennifer Soft",
      p1: "Founder and CEO",
      p2: "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
      icon: [fb, twitter, insta],
    },
    {
      id: 2,
      img: img2,
      name: "Daisy Walker",
      p1: "Executive Chef",
      p2: "Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.",
      icon: [fb, twitter],
    },
    {
      id: 3,
      img: img3,
      name: "Florence Nelson",
      p1: "Kitchen Manager",
      p2: "Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.",
      icon: [fb, insta],
    },
    {
      id: 4,
      img: img4,
      name: "Valentina Martin",
      p1: "Culinary Director",
      p2: "Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.",
      icon: [fb, twitter, insta, yt],
    },
  ]);

  const [read, SetRead] = useState([
    {
      id: 1,
      iconImg: coctel,
      Rtex:"Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus euante.",
      btn: "btn1",
    },
    {
      id: 2,
      iconImg: mug,
      Rtex: " Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.",
      btn: "btn2",
    },
    {
      id: 3,
      iconImg: papper,
      Rtex: "Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenaspretium rutrum molestie. Duis dignissim egestas turpis sit.",
      btn: "btn3",
    },
  ]);

  return (
    <section className="section_about">
      <div className="titl_block_about">
        <div>
          <h2>About Simple House</h2>
        </div>
        <div>
          <p style={{ color: "gray", fontSize: "19px" }}>
            This is about page of simple house template. You can modify and use
            this HTML template for your website. Total 3 HTML pages included in
            this template. Header image has a parallax effect.
          </p>
        </div>
      </div>

      <div className="girl_images">
        {girls.map((el) => (
          <Abouth_comp key={el.id} item={el} />
        ))}
      </div>

      <div className="bg_attachment"></div>

      <div className="feature">
        {read.map((el) => (
          <ReadMore key={el.id} item={el} />
        ))}
      </div>

      <div className="history">
        <div className="bg_kitchen"></div>
        <div className="history_info">
          <h3 style={{ color: "#1a6692" }}>History of our restaurant</h3>

          <p style={{ color: "#626364" }}>
            Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit
            amet justo. Maecenas posuere lorem id augue interdum vehicula.
            Praesent sed leo eget libero ultricies congue.
          </p>

          <p style={{ color: "#626364" }}>
            Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus.
            Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas interdum porttitor imperdiet. Integer
            facilisis.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
