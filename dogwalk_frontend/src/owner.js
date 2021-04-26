class Owner {
    static all = []

    constructor({id, name}){
        this.id = id
        this.name = name
        this.element = document.createElement('div')
        this.element.id = `owner-${id}`
        this.ownerList = document.getElementById('owner-list')
        this.element.className = "owner"
     
        Owner.all.push(this)
    }
    
    attachToDom() {
        this.ownerList.append(this.ownerRender())
    }

    ownerRender() {
        this.element.innerHTML += `
        <div><h3>${this.name}</h3></div>
        <!-- delete owner button disabled and set for future add -->
        <!-- <button class="delete" data-id="${this.id}">Delete ${this.name}</button> -->
        `

        return this.element
    }

    get dogs() {
        return Dog.all.filter(d => d.owner_id === parseInt(this.id))
    }

    addOwnersDogs = () => {
        const dogsList = document.getElementById(`owner-${this.id}`)
        dogsList.element = document.createElement('div')
        dogsList.element.className = "dogs"
        this.dogs.forEach(dog => {
            dogsList.innerHTML += `
            <div id="dog-${dog.id}">
                <h4>${dog.name}</h4>
                <button class="delete-dog" data-id="${dog.id}">Delete ${dog.name}</button>
                <ul>
                    <li>Breed: ${dog.breed ? dog.breed : 'none'}</li>
                    <li>Weight: ${dog.weight ? dog.weight : 'none'}</li>
                    <li>Allergies: ${dog.allergies ? dog.allergies : 'none'}</li>
                    <li>Behaviors: ${dog.behaviors ? dog.behaviors : 'none'}</li>
                    <li>Meds: ${dog.meds ? dog.meds : 'none'}</li>
                    <li>Vet Info: ${dog.vet_info ? dog.vet_info : 'none'}</li>
                    <li>Age: ${dog.age ? dog.age : 'none'}</li>
                </ul>
            </div>
            `
            
            this.ownerList.appendChild(dogsList)
        })
    }
    
}