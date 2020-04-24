import React, { useState, useEffect } from 'react';

export const PlayerOptions = () => {

    let arr = [];
    let arr2 = [1 ,2 ,3];


    const [items, setItems] = useState();

    const listData = () => {
      fetch('/api/players')
        .then(res => res.json())
        .then(json => {
            console.log("playerOptions: ", json);
            arr.push(json);

            return (
                <h1>Hello</h1>
            );

        })
        .catch(err => {
            console.log("err: ", err);
        })
    }

    const seeData = () => {
        console.log("arr: ", arr);
    }

    const seeItems = () => {
        console.log("items: ", items);
    }

    const displayItems = () => {
        
       
        
    }

    useEffect(() => {
        
        listData();

    })
   
    return (
        <div>
            
            <button onClick={listData}>Options</button>
            <button onClick={seeData}>See Data</button>
            <button onClick={seeItems}>See Items</button>
                       
                       <div>
                           {arr.map(item => (
                               <h3 key={item}> {item} </h3>
                           ))}
                       </div>

                       <div>
                           listData
                       </div>

                       <div>
                           {arr2.map(item => (
                               <h3 key={item}> {item} </h3>
                           ))}
                       </div>

        </div>
    );
}