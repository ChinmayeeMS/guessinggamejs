let cards = [
    {
        image:"https://i.pinimg.com/originals/77/9d/e9/779de90af7a3e4e92650923949ebcc8f.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/77/9d/e9/779de90af7a3e4e92650923949ebcc8f.jpg",
        value:1,
        status:"closed" 
    },
    {
        image:"https://i.pinimg.com/originals/70/20/b8/7020b8116f833bce825852899b205de4.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/70/20/b8/7020b8116f833bce825852899b205de4.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/736x/f3/10/0c/f3100c7d165dba833efa140bc7e9f73c.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/736x/f3/10/0c/f3100c7d165dba833efa140bc7e9f73c.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://artprojectsforkids.org/wp-content/uploads/2020/05/Parrot.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://artprojectsforkids.org/wp-content/uploads/2020/05/Parrot.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://a-z-animals.com/media/royal-tiger.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://a-z-animals.com/media/royal-tiger.jpg",
        value:5,
        status:"closed"
    }

]
//durnsten algorithm
let temp;
for(let i=cards.length-1; i>=0;i--){

    let j = Math.floor(Math.random()*(1+1));
    temp = cards[i];
    cards[i]=cards[j];
    cards[j] = temp;
}
let cardscopy=cards;

function displaycards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        <div class="card" style="background-image:url('${card.image}')">
           <div class="overlay ${card.status}" onclick="opencard(${index})"></div> 
        </div>
        
         `;
    });

    document.getElementById('cards').innerHTML= cardsString;

}
displaycards(cards);
let cardcount=1;
let val1=null,val2=null;
let score=0;
function opencard(index){
        cards[index].status="opened";
        if(cardcount===1){
            val1=cards[index].value;
            cardcount++;
        }
        else if(cardcount===2){
            val2=cards[index].value;

            if(val1===val2){
                score++;
                document.getElementById('score').innerText=score;
                //reset after one comparision
                val1=null;
                val2=null;
                cardcount=1;
            }
            else{
                alert("GAME OVER");
                location.reload();
            }
        }
        displaycards(cards);
}
