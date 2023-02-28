import "./style.scss";
import phone from "../../assets/img/svg/phone.svg";
import envelope from "../../assets/img/svg/envelope.svg";
import insta from "../../assets/img/svg/insta.svg";
import twitter from "../../assets/img/svg/twitter.svg";
import fb from "../../assets/img/svg/fb.svg";
import { useState } from "react";
import Selection from "../../assets/components/selection";

function Contact() {

  const [sell,setSell]= useState(
    [
      {
        id:1,
        name:'1. Fusce eu lorem et dui #09C maximus varius?,',
        text:'#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.',
       
      },
      {
        id:2,
        name:'2. Vestibulum #999 ante ipsum primis in faucibus orci?',
        text:'Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta.',
      
      },
      {
        id:3,
        name:'3. Um erat. Lorem ipsum dolor sit amet consectetur?',
        text:'Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.',
       
      },
      {
        id:4,
        name:'4. Ut ac erat sit amet neque efficitur faucibus et in lectus?',
        text:'Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim.',
        
      },
    ]
  )

  return (
    <section className="section_contatc">
      <div className="titl_contatc">
        <div>
          <h2>Contact Page</h2>
        </div>
        <div>
          <p style={{ color: "gray", fontSize: "19px" }}>
            You may use Simple Contact Form to send email to your inbox. You can
            modify and use this template for your website. Header image has a
            parallax effect. Total 3 HTML pages included in this template.
          </p>
        </div>
      </div>

      <div className="action">
        <div className="form_action">
          <input className="form" type="text" placeholder="Name" />
          <input className="form" type="email" placeholder="Email" />
          <textarea
            className="form"
            name=""
            id=""
            cols="10"
            rows="5"
            placeholder="Message"
          ></textarea>
          <button className="btn">send</button>
        </div>

        <div className="info_action">
          <h1 style={{ color: "#319966" }}>Our Address</h1>
          <p style={{ color: "#626364" }}>
            180 Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus 10550
          </p>

          <div className="svg_tel">
            <div
              className="svg1"
              style={{ backgroundImage: `url('${phone}')` }}
            ></div>
            <a href="tel"> 094025990</a>
          </div>

          <div className="svg_tel2">
            <div
              className="svg2"
              style={{ backgroundImage: `url('${envelope}')` }}
            ></div>
            <a href="email"> info@company.com</a>
          </div>

          <div className="icons">
            <div
              className="ikon1"
              style={{ backgroundImage: `url('${fb}')` }}
            ></div>
            <div
              className="ikon2"
              style={{ backgroundImage: `url('${insta}')` }}
            ></div>
            <div
              className="ikon3"
              style={{ backgroundImage: `url('${twitter}')` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="map">
        <iframe
          style={{ width: "100%", height: "300px" }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29377.956273077227!2d-43.377891!3d-23.014792!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695cd967b7%3A0x171cdd035a6a9d84!2sAv.%20L%C3%BAcio%20Costa%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20Brazil!5e0!3m2!1sen!2sth!4v1674323615309!5m2!1sen!2sth"
        ></iframe>
      </div>

      <div className="titl_contatc">
        <div>
          <h2>FAQs</h2>
        </div>
        <div>
          <p style={{ color: "gray", fontSize: "19px" }}>
            This section comes with Accordion tabs for different questions and
            answers about Simple House HTML CSS template. Thank you. #666
          </p>
        </div>
      </div>

      <div className="selection">

        {sell.map(el=>(<Selection key={el.id} item={el} />))}
      </div>
    </section>
  );
}
export default Contact;
