import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import apple from './components/Apple.jfif'
import banana from './components/Banana.jfif'
import dates from './components/Dates.jfif'
import grapes from './components/Grapes(1 cup).jfif'
import noodles from './components/Noodles.jfif'
import Chocolate from './components/Chocolate.jfif'
import orange from './components/Orange.jfif'
import { Header } from './components/header';
import { Searchbar } from './components/searchbar';
import {Food} from './components/food.js'
import { Meallist } from './components/meallist';

const App = () =>{ 
const items_img = [apple, banana, dates, grapes, noodles, Chocolate, orange]
const foodlist = [
  {
    name : 'Apple',
    cal : 81,
    key : 0
  },
  {
    name : 'Banana',
    cal : 105,
    key : 1
  },
  {
    name : 'Dates',
    cal : 228,
    key : 2
  },
  {
    name : 'Grapes(1 cup)',
    cal : 114,
    key : 3
  },
  {
    name : 'Noodles',
    cal : 159,
    key : 4
  },
  {
    name : 'Chocolate',
    cal : 206,
    key : 5
  },
  {
    name : 'Orange',
    cal : 65,
    key : 6
  },
]

const [items, setItems] = useState(foodlist);
let list = items;
console.log("initial items : ");
console.log(items);

const modifyFood = (val) => {
  console.log('search box' + val);
  setItems(items.filter(item => item.name.toLowerCase().includes(val.toLowerCase())));
  if(items.length === 0 || val === '') setItems(foodlist)
  console.log("setList called");
  console.log(list);
  setItems(prev => {return prev})
}

const [foodList, setFoodList] = useState([])
const [totalCalory, setTotalCalory] = useState(0);
//let todayList = [];
const Addfood = (quantity, name) => {
    quantity = parseInt(quantity);
    console.log("quant type : " + typeof(quantity));
    let cal = 0;
    foodlist.map((item) => {
        if(item.name === name) cal = item.cal
    
    })
    cal = quantity*cal;
    setTotalCalory(prev => prev + cal);
    const prevFoods = [...foodList];
    let flag = 0;
    for (let index = 0; index < prevFoods.length; index++) {
        if(prevFoods[index].name === name){
            prevFoods[index].quantity = prevFoods[index].quantity + quantity;
            prevFoods[index].cal += cal;
            flag = 1;
            setFoodList(prevFoods);
            break;
        }
    }

    if(flag === 0){
        const Food = {
            name : name,
            quantity : quantity,
            cal : cal
        }
        const newFoods = prevFoods.concat(Food);
        setFoodList(newFoods);
    }
}

const removeFood = (name) => {
    const prevFoods = [...foodList];
    let newFoods = prevFoods.filter((item) => {return item.name !== name})
    console.log("remove block : ");
    console.log(newFoods);
    setFoodList(newFoods);
}

return(
  <div>
    <Header/>
    <Searchbar modifyFood={modifyFood}/>
    <div className='food_item_list_box'>
      <Food items_img={items_img} list={list} Addfood={Addfood}/>
      <Meallist totalCalory={totalCalory} foodList={foodList} removeFood={removeFood}/>
    </div>
  </div>
)
}

export {App}