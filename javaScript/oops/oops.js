class animal {
    constructor(name) {
        this.name = name
        console.log("object is created")
    }
    eats() {
        console.log(" is eating")

    }

    jumps() {
        console.log("is jumping")
    }
}

class lion extends animal{
    constructor(name) {
        super(name)
        console.log("i am king of the jungle")
    }
}
let a = new animal("bunny");
console.log(a)

let l = new lion("sher")
console.log(l)