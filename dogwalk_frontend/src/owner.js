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
        this.ownerList.append(this.addOwnersDogs())
    }

    ownerRender() {
        this.element.innerHTML = `
        <div>${this.name} </div>`

        return this.element
    }

    get dogs() {
        return Dog.all.filter(d => d.owner_id == this.id)
    }

    addOwnersDogs = () => {
        const dogsList = document.getElementById("dog-list")
        dogsList.element = document.createElement('div')
        
        this.dogs.forEach(d => {
            console.log(d.name)
            // debugger
            
            dogsList.innerHTML = `
            ${this.name}'s dog(s):
                <h4>${d.name}</h4>
                <ul>
                    <li>Breed: ${d.breed}</li>
                    <li>Weight: ${d.weight}</li>
                    <li>Allergies: ${d.allergies}</li>
                    <li>Behaviors: ${d.behaviors}</li>
                    <li>Meds: ${d.meds}</li>
                    <li>Vet Info: ${d.vet_info}</li>
                    <li>Age: ${d.age}</li>
                </ul>

            `
            dogsList.element.className = "dogs"
            this.ownerList.appendChild(dogsList)
        })
    }
}