function rejectAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("slow");
      }, 2000);
    });
}

function rejectAfter1Second() {
    console.log("starting fast promise");
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("fast");
      }, 1000);
    });
}

async function runPromises() {
    console.log("== starting ==");

    const slow = rejectAfter2Seconds();
    const fast = rejectAfter1Second();
    
    try {
      await Promise.all([slow, fast]);
    } catch (e) {
      console.log(`it broke! ${e}`);
    }
    
    console.log("== done ==");
}

runPromises();
