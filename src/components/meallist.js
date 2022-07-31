import React from "react";

const Meallist = ({totalCalory, foodList, removeFood}) => {
    const food = foodList;
    console.log("meallist fn");
    console.log("food : ");
    console.log(food);

    let handleRemove = (e) => {
        let name = e.target.name;
        removeFood(name);
    }

    return(
        <div>
            <div className='food-list'>
                <b>Today's Food {totalCalory} cal</b>
            </div>
            <div>
            {
                food.map((item) => {
                    console.log("map fn");
                    return(
                        <div className="todays-list">
                            <div>{item.quantity} {item.name} = {item.cal} cal</div>
                            <div><button name={item.name} onClick={handleRemove}>X</button></div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export {Meallist}