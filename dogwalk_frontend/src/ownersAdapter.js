class OwnersAdapter {
    constructor() {
        this.ownersUrl = "http://localhost:3000/api/v1/owners"
    }

    fetchOwners() {
        fetch(this.ownersUrl)
        .then(res => res.json())
        // .then(owners => {
        //     this.initializeOwner(owners.data)
        // })
        .then(owners => {
            owners.data.forEach(owner => {
                this.initializeOwner(owner)
            })
        })
    }

    initializeOwner(data) {
        // NEW stuff - owners.data.length
        // console.log(data)
        let ownerData = new Owner({id: data.id, ...data.attributes}) 
        // let ownerArray = data
        ownerData.attachToDom()
    }
}