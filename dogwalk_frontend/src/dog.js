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

        Dog.all.push(this)
    }

    attachToDom() {
        this.dogList.append(this.dogRender())
    }

    dogRender() {
        
    }
}