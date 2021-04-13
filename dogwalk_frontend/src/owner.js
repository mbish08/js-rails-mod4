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
        // console.log(this)
        this.ownerList.append(this.ownerRender())
        // this.ownerList.append(this.addOwnersDogs())
    }

    addEventListeners() {
        this.element.addEventListener('click', this.handleListClick)
    }

    ownerRender() {
        this.element.innerHTML += `
        <div><h3>${this.name}</h3></div>
        <button class="delete" data-id="${this.id}">Delete ${this.name}</button>
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
            // console.log(dog.name)
            // debugger
            
            dogsList.innerHTML += `
            <div>
                <h4>${dog.name}</h4>
                <ul>
                    <li>Breed: ${dog.breed}</li>
                    <li>Weight: ${dog.weight}</li>
                    <li>Allergies: ${dog.allergies}</li>
                    <li>Behaviors: ${dog.behaviors}</li>
                    <li>Meds: ${dog.meds}</li>
                    <li>Vet Info: ${dog.vet_info}</li>
                    <li>Age: ${dog.age}</li>
                </ul>
            </div>
            `
            
            this.ownerList.appendChild(dogsList)
        })
    }

    handleListClick = (e) => {
        let id = e.target.dataset.id
        if (e.target.className === "delete") {
            ownersAdapter.deleteOwner(id)
        }
    }
}