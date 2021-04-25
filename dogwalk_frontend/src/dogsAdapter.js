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
            })
            
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        debugger
        const name = document.getElementById('dog-name').value
        const breed = document.getElementById('dog-breed').value
        const weight = document.getElementById('dog-weight').value
        const allergies = document.getElementById('dog-allergies').value
        const behaviors = document.getElementById('dog-behaviors').value
        const meds = document.getElementById('dog-meds').value
        const vetInfo = document.getElementById('dog-vet-info').value
        const age = document.getElementById('dog-age').value
        const ownerId = document.getElementById('owner_id').value
        // debugger
        console.log(e)
    }

}