import { useState } from "react";
import "./style.scss";

function Selection(props) {
  let item = props.item;
  const [content, setContent] = useState(false);

  return (
    <div className="sel_block">
      <div className="s_block" onClick={()=>{setContent(!content)}}>
        <p>{item.name}</p>
        <div className="icon"></div>
      </div>
      <div className={content?'text_block':'text_none'} >{item.text}</div>
    </div>
  );
}
export default Selection;
