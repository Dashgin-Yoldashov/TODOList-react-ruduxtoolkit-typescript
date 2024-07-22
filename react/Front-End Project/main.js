"use strict"


//Add to Basket:
let addtobasket=document.querySelectorAll(".line2 .products .addbasket");
if (localStorage.getItem("productbasket")=== null) {
    localStorage.setItem("productbasket","[]");
}
for (const item of addtobasket) {
    
    item.addEventListener("click", function () {
        
        let productbasket=JSON.parse(localStorage.getItem("productbasket"));
        let equalprod = productbasket.find(prod => {
                return prod.id===item.parentNode.getAttribute("data-id");
            })
            if(equalprod){
                equalprod.count++;
            }
            else{
                let product={
                    id: item.parentNode.getAttribute("data-id"),
                    img: item.parentNode.querySelector("img").getAttribute("src"),
                    name: item.parentNode.querySelector("p.product-name").innerText,
                    price: item.parentNode.querySelector(".price").innerText,
                    count: 1
                };
                
                productbasket.push(product);
            }
            localStorage.setItem("productbasket",JSON.stringify(productbasket));
        })
    }
    
    
    
    //for change product of price and "add to cart" when hover to product:
    for (const item of addtobasket) {
        let originalText=item.innerText;
        item.parentNode.addEventListener("mouseover", function () {
            item.innerText = "Add to Basket";
        });
        
        item.parentNode.addEventListener("mouseout", function () {
            item.innerText = originalText; 
        });
        
    }

    $(document).on("click",".all",function () {
        let products=$(".products .img-border");
        for (const product of products) {
            $(product).show("slow");
        }
        
    })

    $(document).on("click",".cactuses",function () {
        let products=$(".products .img-border");
        for (const product of products) {
            $(product).hide("slow");
            let showprod=$(product).attr("data-id");
            if (showprod==1 || showprod==3 ||showprod==6) {
                $(product).show("slow");
            }
        }
        
    })

    $(document).on("click",".exotic",function () {
        let products=$(".products .img-border");
        for (const product of products) {
            $(product).hide("slow");
            let showprod=$(product).attr("data-id");
            if (showprod==4 || showprod==5 ||showprod==8) {
                $(product).show("slow");
            }
        }
        
    })
    $(document).on("click",".greens",function () {
        let products=$(".products .img-border");
        for (const product of products) {
            $(product).hide("slow");
            let showprod=$(product).attr("data-id");
            if (showprod==7 || showprod==1 ||showprod==4) {
                $(product).show("slow");
            }
        }
        
    })
    $(document).on("click",".popular",function () {
        let products=$(".products .img-border");
        for (const product of products) {
            $(product).hide("slow");
            let showprod=$(product).attr("data-id");
            if (showprod==2 || showprod==1 ||showprod==3 ||showprod==4||showprod==5) {
                $(product).show("slow");
            }
        }
        
    })
    $(document).on("click",".various",function () {
        let products=$(".products .img-border");
        for (const product of products) {
            $(product).show("slow");
        }
        
    })
    $(document).on("click",".winter",function () {
        let products=$(".products .img-border");
        for (const product of products) {
            $(product).hide("slow");
            let showprod=$(product).attr("data-id");
            if (showprod==2 || showprod==1 ||showprod==3) {
                $(product).show("slow");
            }
        }
        
    })