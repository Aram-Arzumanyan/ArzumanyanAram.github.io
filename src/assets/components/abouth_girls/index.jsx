import "./style.scss";

function Abouth_comp(props) {
    let item = props.item
  return (
    <div className="girls_block">
      <div className="img_girls" style={{backgroundImage: `url('${item.img}')`}}></div>
      <div className="texts">
        <h4 style={{color:'#09c'}}>{item.name}</h4>
        <p style={{color:'#c39'}}>{item.p1}</p>
        <p style={{color:'#626364'}}>{item.p2}</p>
        <div className="icon">
          {item.icon.map((el,i) => {
            console.log(el);
            return (
              <p key={i} className={`icons`} style={{backgroundImage:`url('${el}')`}}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}
export default Abouth_comp;
