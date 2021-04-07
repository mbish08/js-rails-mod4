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


    }

    ownerRender() {
        // console.log(this)
        // let dogCount = this.id

        this.element.innerHTML += `
        <div>${this.name} </div>`

        return this.element
    }

}