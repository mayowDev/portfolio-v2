import './css/style.css'

let tabs = document.querySelector('#tabs').getElementsByTagName('a');
let card = document.querySelector('.container').children

console.log(card)
for(let i=0; i<tabs.length; i++){
    tabs[i].addEventListener('click', function(){
        // console.log(this.getAttribute("data-filter"))
        for(let j=0; j<tabs.length; j++){
            tabs[j].classList.remove("active");
        }
        this.classList.add("active");
        const target = this.getAttribute("data-filter")
        for(let k=0; k<card.length; k++){
            card[k].style.display="none"
            if(card[k].getAttribute("data-id") === target || target === "all"){
                card[k].style.display="block"
                // card[k].style.transform="scale(1)"
            }
            // if(target === "all"){
            //     card[k].style.display="block"
            // }
        }

    })
    
}