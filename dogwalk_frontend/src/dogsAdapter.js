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
        const name = document.getElementById('dog-name').value
        const breed = document.getElementById('dog-breed').value
        const weight = parseInt(document.getElementById('dog-weight').value)
        const allergies = document.getElementById('dog-allergies').value
        const behaviors = document.getElementById('dog-behaviors').value
        const meds = document.getElementById('dog-meds').value
        const vet_info = document.getElementById('dog-vet-info').value
        const age = parseInt(document.getElementById('dog-age').value)
        const owner_id = document.getElementById('ownerSelect').value

        let newDogObj = {
            name, 
            breed,
            weight,
            allergies,
            behaviors,
            meds,
            vet_info,
            age,
            owner_id
        }

        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newDogObj)
        }

        fetch(this.dogsUrl, configObj)
        .then(res => res.json())
        // .then(json => {
        //     console.log(json)
        //     const dog = new Dog(json.data.attributes)
        // }
        // )
        // const newDogForm = document.getElementById('dog-form')

        dogForm.reset()
        const newDogButton = document.getElementById('new-dog-button')
        const dogFormContainer = document.getElementById('new-dog-form-container')
        
        dogFormContainer.hidden = true
        newDogButton.hidden = false
        newDogButton.addEventListener('click', newDogsForm)
    }

}