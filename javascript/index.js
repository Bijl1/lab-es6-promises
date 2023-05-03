// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks
function printMashedPotatoesStep(step) {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
}

getInstruction('mashedPotatoes', 0, (step0) => {
  printMashedPotatoesStep(step0);
  getInstruction('mashedPotatoes', 1, (step1) => {
    printMashedPotatoesStep(step1);
    getInstruction('mashedPotatoes', 2, (step2) => {
      printMashedPotatoesStep(step2);
      getInstruction('mashedPotatoes', 3, (step3) => {
        printMashedPotatoesStep(step3);
        getInstruction('mashedPotatoes', 4, (step4) => {
          printMashedPotatoesStep(step4);
          getInstruction('mashedPotatoes', 5, (step5) => {
            printMashedPotatoesStep(step5);
            printMashedPotatoesStep("Mashed potatoes are ready!");
          });
        });
      });
    });
  });
});


// Iteration 2 - using promises
// ...

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...