import "./style.scss";

function Img_block(props) {
  let item = props.item;
  return (
    <div className="img_block">
      <div
        className="imag"
        style={{ backgroundImage: `url('${item.img}')` }}
      ></div>
      <div className="textimg" >
        <h4 style={{ color: "rgb(26 102 146)" }}>{item.name}</h4>
        <p style={{ color: "#626364" }}>{item.info}</p>
        <p style={{ color: "#2f956d" }}>{item.value}</p>
      </div>
    </div>
  );
}

export default Img_block;
