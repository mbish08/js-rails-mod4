class Owner {
    static all = []

    constructor({id, name}){
        this.id = id
        this.name = name
        this.element = document.createElement('div')
        this.element.id = `owner-${id}`
        this.ownerList = document.getElementById('owner-list')
        
        Owner.all.push(this)
    }

    fetchOwners() {
        fetch(ownersUrl)
        .then(res => res.json())
        .then(owners => addOwners(owners))
    }
    
    addOwners(resp) {
        console.log(resp)
        let ownerElement = document.getElementById("owner-list")
        // resp.data[0].attributes.name
        resp.data.forEach(owner => {
            const ownerMarkup = `
                <div owner-id=${owner.id}>
                    <h3>${owner.attributes.name}</h3>
                </div>`
    
            ownerElement += ownerMarkup
        })
    }
}