let Total = 0 ;
function card(target){
    const productName = target.childNodes[3].childNodes[7].innerText ;
    const productPrice = parseFloat(target.childNodes[3].childNodes[9].innerText);
    const productNameContainer = document.getElementById('product-Name');
    const ol =document.createElement('ol');
    const li = document.createElement('li');
    li.innerHTML = productName;
    ol.appendChild(li);
    productNameContainer.appendChild(ol);
     Total =  Total + productPrice ;
    document.getElementById('total').innerText = Total;
    if(Total > 200){
    console.log(discount);
    }
    
  
}

let main = 500;
    let discount = main - 30 / 100 * main ;
    console.log(discount);