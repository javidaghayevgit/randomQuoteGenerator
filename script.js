let text = document.querySelector('.text')
const generatorButton = document.querySelector('.btn')
const api = "https://type.fit/api/quotes"
async function randomQuote(){
    try{
        const response = await fetch(api)
        const data  = await response.json();
        const index = Math.floor(Math.random() * data.length)
        const randomQuote = data[index]
        text.innerHTML = 'Loading..'
        let timeOut =  setTimeout(()=>{
            text.innerHTML = randomQuote.text
            generatorButton.removeAttribute('disabled');
        },1000)
        generatorButton.setAttribute('disabled', true);
    }
    catch(error){
        text.innerHTML = error.message;
    }
} 
generatorButton.addEventListener('click', ()=>{
randomQuote();
})