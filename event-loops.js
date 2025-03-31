
console.log("first task");
console.time();
for (let i = 0; i < 1000000000; i++) {
    const h3 = document.querySelector("h3");
    if (h3) {
        h3.textContent = `Hey, everyone is waiting on me`;
    }
}
console.timeEnd();
console.log("next task");