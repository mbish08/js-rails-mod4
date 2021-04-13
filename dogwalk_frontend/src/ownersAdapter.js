class OwnersAdapter {
    constructor() {
        this.ownersUrl = "http://localhost:3000/api/v1/owners"
    }

    fetchOwners() {
        fetch(this.ownersUrl)
        .then(res => res.json())
        .then(owners => {
            owners.data.forEach(owner => {
                this.initializeOwner(owner)
            })
        })
    }

    initializeOwner(data) {
        // NEW stuff - owners.data.length
        // console.log(data)
        let ownerData = new Owner({id: data.id, name: data.attributes.name, ...data.relationships}) 
        // let ownerArray = data
        ownerData.attachToDom()
        ownerData.addOwnersDogs()
    }

    handleFormSubmit = (e) => {
        e.preventDefault
        const name = document.getElementById('owner-name').value

        let newOwnerObj = {
            name
        }

        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newOwnerObj)
        }

        fetch(this.ownersUrl, configObj)
        .then(res => res.json())
        // .then(owner => {
            // console.log(owner)
        //     let newOwner = new Owner(owner)
        //     newOwner.attachToDom()
        // })
    }

    deleteOwners(id) {
        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
        fetch(this.ownersUrl + `/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
        Owner.all = Owner.all.filter(owner => owner.id != id)

        let owner = document.getElementById(`owner-${id}`)
        owner.remove()
    }

}