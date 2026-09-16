//for loops
for (let i = 0; i < 100; i++) {
   console.log(i);
    
}

//for in loops

let obj = {
    name: "harry",
    role: "programmer",
    company: "codeAi"
}

for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(key, element)
    
    
}