import './style.scss'

function ReadMore(props) {
let item = props.item
    return(

        <div className="feature_child">
            <div className='iconimg'  style={{ backgroundImage:`url(${item.iconImg})`}}></div>
            <p style={{ color: "#1a6692" }}>{item.Rtex}</p>
            <button className={item.btn}>Read More</button>
        </div>
    )
    
}

export default ReadMore