import React from "react";
import './Expanseitem.css';

function Expanseitem(props) {
    
    const mounth= props.date.toLocaleString('en-US',{mounth: 'long'});
    const day=props.date.toLocaleString('en-US',{day: '2-digit'});
    const year= props.date.getFullYear();

    return(
        <div className="expense-item">
            <div>
                <div>{mounth}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    )
}

export default Expanseitem;