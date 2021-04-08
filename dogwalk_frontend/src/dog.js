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
        this.dogList = document.getElementById("dog-list")
        this.element = document.createElement('div')
        this.element.className = "dogs"

        Dog.all.push(this)
    }

    attachToDom() {
        this.dogList.append(this.dogRender())
    }

    dogRender() {
        this.element.innerHTML = `
        <h4>${this.name}</h4>
        <ul>
            <li>Breed: ${this.breed}</li>
            <li>Weight: ${this.weight}</li>
            <li>Allergies: ${this.allergies}</li>
            <li>Behaviors: ${this.behaviors}</li>
            <li>Meds: ${this.meds}</li>
            <li>Vet Info: ${this.vet_info}</li>
            <li>Age: ${this.age}</li>
        </ul>
        `
        return this.element
    }
}