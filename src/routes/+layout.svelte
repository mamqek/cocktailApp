<script>
	import Header from '../UI/layout/Header.svelte';
	import Footer from '../UI/layout/Footer.svelte';
  //   import { updateStore } from '$lib/stores/session';

  export let data
 
  $: user  = data.user

  // $: {
  //   const { user } = data
  //   updateStore({user : user})
  // }
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="/favicon.png" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script src="//unpkg.com/alpinejs" defer></script>
  <script src="https://cdn.tailwindcss.com"></script>

  <link rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/2.0.0/modern-normalize.min.css" 
        integrity="sha512-4xo8blKMVCiXpTaLzQSLSw3KFOVPWhm/TRtuPVc4WG6kUgjH6J03IBuG7JZPkcWMxJ5huwaBpOpnwYElP/m6wg==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer" 
  />

  <title>Coctail maker</title>
</svelte:head>

<body> 
  
  <Header {user}/>

  <main>
    <slot />
  </main>

  <Footer />
  
</body>

<style>
  body {
    background-color: #272b34;
  }
  :root{
    --link-clr: #0aa1ff; 
    --button-clr: #C49292;  /*c2bab5*/
    --button-clr2: #770e07;
    --disabled-button-clr: #999;
    --background-clr: #272b34;
    --second-background-clr: #29313c;
    --light-text-clr: antiquewhite;
    --dark-text-clr: #1c2630;
  }
  main {
    display: flex;
    flex-direction: column;
    height: 75vh;
  }
</style>