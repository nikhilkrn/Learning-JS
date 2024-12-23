//Immediately Invoked Function Expression (IIFE)
// to  prevent global scope pollution IIFE is used it immediately runs the function


(function db (){ //named IIFE
    console.log(`DATABASE CONNECTED`);
    
})();

//()() // first is function and other is for callinf function

( (Name)=>{ //UNNAMED IIFE
    console.log(`Another DB Connected ${Name}`);
    
})("kamlesh");


