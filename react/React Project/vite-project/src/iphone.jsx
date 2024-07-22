import React from 'react'

function iphone({productname,price}) {
    //   let frm =document.querySelector("input");
    //   let btn =document.querySelector("btn");
    //   btn.addEventListener("click",function () {
    //       frm.innerText="";
    //   })
    return (
        <div>
            <p>ProductName : {productname}</p>
            <p>Price : {price} AZN</p>
        </div>
  )
}

export default iphone
