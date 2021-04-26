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
        // debugger
        // error on owner_id:  dogsAdapter.js:30 Uncaught TypeError: Cannot read property 'value' of null
        const name = document.getElementById('dog-name').value
        const breed = document.getElementById('dog-breed').value
        const weight = document.getElementById('dog-weight').value
        const allergies = document.getElementById('dog-allergies').value
        const behaviors = document.getElementById('dog-behaviors').value
        const meds = document.getElementById('dog-meds').value
        const vetInfo = document.getElementById('dog-vet-info').value
        const age = document.getElementById('dog-age').value
        const ownerId = document.getElementById('ownerSelect').selectedIndex
        // debugger
        // console.log(e)

        let newDogObj = {
            name, 
            breed,
            weight,
            allergies,
            behaviors,
            meds,
            vetInfo,
            age,
            ownerId
        }

        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newDogObj)
        }

        // I need to double check what I am passing into Dog
        // also need to check everything from here down to make sure it works properly after fixing owner_id issue
        fetch(this.dogsUrl, configObj)
        .then(res => res.json())
        .then(json => {
            const dog = new Dog(json.data.attributes)
        })

        dogForm.reset()
        const newDogForm = document.getElementById('new-dog-form-container')
        const newDogButton = document.getElementById('new-dog-button')
        newDogForm.hidden = true
        newDogForm.hidden = false
        newDogButton.addEventListener('click', newDogsForm)
    }

}