<script lang="ts">
  import { totalmessages } from "./stores/messagescounter";
  import { messagesData } from "./assets/messagesList";

  let randomnumber : number   
  totalmessages.set(messagesData.length)

  let checked: number[] = []
  fillchecked()
  $: message = messagesData[randomnumber]

 //get a random number but not the same as the last one 
  const getRandom = () =>{
    let max = $totalmessages
    let random : number = randomnumber 
    while(random == randomnumber && !(checked[random] <= 2) ){
      random = Math.floor(Math.random() * (max))
    }
    checked[random] += 1 
    randomnumber = random

  }
  
  function fillchecked(){
    for(let i = 0; i<$totalmessages; i++){
      checked[i] = 0
      console.log(checked , checked.length)
    }
  }
  
  getRandom()

</script>
<div class="container">
  <header class="header">
    <h1>Mis mensajes de amor para ti corazón</h1>
    <h3>Actualmente {$totalmessages} mensajitos disponibles lucesita</h3>
  </header>
  <main class="messages">
      <div class="next">
        <button class="btn" on:click={getRandom}>Nuevo mensajito</button>
      </div>
      <div class="mess glass">
        {#if message}
        <h2>{message.title}</h2>
        <h3>mensaje #{message.id}</h3>
        <p>{message.description}</p> 
        {/if}
      </div>
  </main>
</div>

<style>
  .container{
    height: 100vh;
    min-width: 100vw;
    display: grid;
    grid-template-rows: auto 1fr ; 
    gap: 1rem;
    background:linear-gradient(to right, rgb(213, 111, 192), rgb(49, 128, 133)); 
  
  }
  .header{
    text-align: center;
    padding: 3rem 8vw; 
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 5vh;
    max-height: 50vh;
  }
  .messages{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0px auto;
    gap: 2rem;
  }
  .mess{
    width: 70%;
    height: 80%;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border: 1px solid gray;
    border-radius: 15px;
  }
  .btn{
    padding: 1rem;
    margin-bottom: 2rem; 
    background-color: rgb(184, 97, 167);
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: .2s ease;
  }
  .btn:hover{
    transform: scale(1.01);
    transition: .2s ease;
  }
  .glass{
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(50px);
    border-radius: 1rem;
    border: 1px solid  rgba(255,255,255,0.18);
    box-shadow: 0 8px 32px 0  rgba(0,0,0,0.37);
  }    
  p{
    max-width: 50ch;
    text-align: justify;
    word-spacing: 0.25rem;
  }
  h1,h2,h3,p{
    font-family: 'Roboto Condensed', sans-serif;
  }
  h1{
    font-size: 4rem;
  }
  h2{
    font-size: 2rem;
    text-align: center;
  }
  h3{
    font-size: 1.5rem;
    text-align: center;
  }
  @media (max-width : 800px){
    h1{
      font-size: 2.5rem;
    }
    h2{
      font-size: 1.6rem;
    }
    h3{
      font-size: 1rem;
    }
    .mess{
      width: 100%;
    }
    p{
      font-size: 1.2rem;
    }
  }
  @media (max-width : 600px){
    h1{
      font-size: 2rem;
    }
    p{
      font-size: 1rem;
    }
  }
  @media (min-width : 800px){
    p{
      font-size: 1.4rem;
    }
  }

</style>
