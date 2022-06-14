import React from "react";
import './Expanseitem.css';
import ExpanseDate from "./Expansedate";

function Expanseitem(props) {
 

    return(
        <div className="expense-item">
          <ExpanseDate></ExpanseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    )
}

export default Expanseitem;