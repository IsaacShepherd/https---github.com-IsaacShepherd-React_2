import { useState } from "react";


function Card({data,input}) {
    console.log(data,input);
    const currentData = data.filter((element) => element.id === input)
    console.log(currentData);   
    
    let [count, setCount] = useState(1)

    function handleIncrement() {
        setCount(count+1)
    }

    function handleDecrement() {
        setCount(count-1)
    }
    console.log();
    return(
    <div className="cardContainer" key={currentData.id}>
        <p>{currentData[0].name}</p>        
        <p>цена - {currentData[0].price}у.е.</p>
        <div className="counter">
            <button onClick={handleDecrement}>-</button>
            <p>{count}</p>
            <button onClick={handleIncrement}>+</button>
        </div>
    </div>
    )
}

export default Card