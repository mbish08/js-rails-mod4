class Dog {
    static all = []

    constructor({id, name, breed, weight, allergies, behaviors, meds, vet_info, age, owner_id}) {
        this.id = id
        this.name = name
        this.breed = breed
        this.weight = weight
        this.allergies = allergies
        this.behaviors = behaviors
        this.meds = meds
        this.vet_info = vet_info
        this.age = age
        this.owner_id = owner_id
        // this.dogList = document.getElementById("dog-list")
        // this.element = document.createElement('div')
        // this.element.className = "dogs"

        Dog.all.push(this)
    }

    dogToDom = () => {
        // console.log(this)
        // debugger
        const dogsList = document.getElementById(`owner-${this.owner_id}`)
        dogsList.element = document.createElement('div')
        dogsList.element.className = "dogs"


            dogsList.innerHTML += `
            <div id="dog-${this.id}">
                <h4>${this.name}</h4>
                <button class="delete-dog" data-id="${this.id}">Delete ${this.name}</button>
                <ul>
                    <li>Breed: ${this.breed ? this.breed : 'none'}</li>
                    <li>Weight: ${this.weight ? this.weight : 'none'}</li>
                    <li>Allergies: ${this.allergies ? this.allergies : 'none'}</li>
                    <li>Behaviors: ${this.behaviors ? this.behaviors : 'none'}</li>
                    <li>Meds: ${this.meds ? this.meds : 'none'}</li>
                    <li>Vet Info: ${this.vet_info ? this.vet_info : 'none'}</li>
                    <li>Age: ${this.age ? this.age : 'none'}</li>
                </ul>
            </div>
            `
            
            // this.ownerList.appendChild(dogsList)
        
    }

}