import React from 'react'

const  Food = ({items_img, list, Addfood}) => {

    const foods = list;
    let quantity=1;

    let setQuantity = (e) =>{
        if(quantity !== undefined) quantity = parseInt(e.target.value);
    }

    let handleAdd = (e) => {
        let name = e.target.name;
        Addfood(quantity, name);
        document.getElementById('quant').value = '1';
    }

    return (
        <div>
            <div className='food-item-list'>
                <div>
                    {
                        foods.map((item)=>{
                            return(
                                <div className='item'>
                                    <div><img src={items_img[item.key]} alt = {item.name}></img></div>
                                    <div>
                                        <b>{item.name}</b>
                                        <br></br>
                                        <small>{item.cal}</small>
                                    </div>
                                    <div>
                                        <input type='number' defaultValue={1} id='quant' min={0} onChange={setQuantity}></input>&nbsp;
                                        <button name={item.name} onClick={handleAdd}>+</button>
                                    </div>
                                </div>
                            )
                        })
                        
                    }
                </div>
            </div>
        </div>
    )
}

export {Food}