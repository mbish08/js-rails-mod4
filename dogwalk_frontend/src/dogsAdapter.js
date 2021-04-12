class DogsAdapter {
   
    constructor() {
        this.dogsUrl = "http://localhost:3000/api/v1/dogs"
    }

    fetchDogs() {
        fetch(this.dogsUrl)
        .then(res => res.json())
        .then(dogs => {
            dogs.data.forEach(el => {
                let dog = new Dog({ id: el.id, ...el.attributes })
                // dog.attachToDom(el)
            })
            
        })
    }

}