import { useState } from "react";
import "./style.scss";
import img01 from "../../assets/img/01.jpg";
import img02 from "../../assets/img/02.jpg";
import img03 from "../../assets/img/03.jpg";
import img04 from "../../assets/img/04.jpg";
import img05 from "../../assets/img/05.jpg";
import img06 from "../../assets/img/06.jpg";
import img07 from "../../assets/img/07.jpg";
import img08 from "../../assets/img/08.jpg";
import Img_block from "../../assets/components/img_block";

function Block() {
  const [food, setFood] = useState([
    {
      id: 1,
      img: img01,
      name: "Fusce dictum finibus",
      info: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
      value: "$45 / $55",
      category: "salad",
    },
    {
      id: 2,
      img: img02,
      name: "Aliquam sagittis",
      info: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
      value: "$65 / $70",
    },
    {
      id: 3,
      img: img03,
      name: "Sed varius turpis",
      info: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
      value: "$30.50",
      category: "salad",
    },
    {
      id: 4,
      img: img04,
      name: "Aliquam sagittis",
      info: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
      value: "$25.50",
      category: "noodle",
    },
    {
      id: 5,
      img: img05,
      name: "Maecenas eget justo",
      info: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
      value: "$80.25",
      category: "noodle",
    },
    {
      id: 6,
      img: img06,
      name: "Quisque et felis eros",
      info: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
      value: "$20 / $40 / $60",
      category: "salad",
    },
    {
      id: 7,
      img: img07,
      name: "Sed ultricies dui",
      info: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
      value: "$94",
      category: "noodle",
    },
    {
      id: 8,
      img: img08,
      name: "Donec porta consequat",
      info: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
      value: "$15",
      category: "noodle",
    },
  ]);
  const [product, setProduct] = useState(food);
  const [active, setActive] = useState(0);
  return (
    <section className="section">
      <div className="titl_block">
        <div>
          <h2>Welcome to Simple House</h2>
        </div>
        <div>
          <p style={{ color: "gray", fontSize: "19px" }}>
            Total 3 HTML pages are included in this template. Header image has a
            parallax effect. You can feel free to download, edit and use this
            TemplateMo layout for your commercial or non-commercial websites.
          </p>
        </div>
        <div className="block_btn">
          <button
            className={`btn_1 ${active == 0 ? "activebtn" : ""}`}
            onClick={() => {
              setProduct(food);
              setActive(0)
            }}
          >
            Pizza
          </button>
          <button
            className={`btn_1 ${active == 1 ? 'activebtn' : ""}`}
            onClick={() => {
              setProduct(food.filter((el) => el.category === "salad"));
              setActive(1)
            }}
          >
            Salad
          </button>
          <button
            className={`btn_1 ${active == 2 ? 'activebtn' : ""}`}
            onClick={() => {
              setProduct(food.filter((el) => el.category === "noodle"));
              setActive(2)
            }}
          >
            Noodle
          </button>
        </div>
      </div>

      <div className="block_images">
        {product.map((el) => (
          <Img_block key={el.id} item={el} />
        ))}
      </div>

      <div className="botom_block">
        <div className="avokado"></div>
        <div className="info_avokado">
          <h3 style={{ color: "#1a6692" }}>Maecenas nulla neque</h3>
          <p style={{ color: "#626364" }}>
            Redistributing this template as a downloadable ZIP file on any
            template collection site is strictly prohibited. You will need to
            talk to us for additional permissions about our templates. Thank
            you.
          </p>
          <button className="btn_readMore">Read More</button>
        </div>
      </div>
    </section>
  );
}

export default Block;
