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
        let ownerData = new Owner({id: data.id, name: data.attributes.name, ...data.relationships}) 
        ownerData.attachToDom()
        ownerData.addOwnersDogs()
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
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
        .then(owner => {
            let newOwner = new Owner(owner)
            newOwner.attachToDom()
        })

        const newOwnerButton = document.getElementById('new-owner-button')
        const ownerForm = document.getElementById('owner-form')
        newOwnerButton.hidden = false
        ownerForm.hidden = true
        newOwnerButton.addEventListener('click', newOwnersForm)
    }

    handleListClick = (e) => {
        let id = e.target.dataset.id
        if (e.target.className === "delete") {
            ownersAdapter.deleteOwner(id)
        }
    }

    deleteOwner(id) {
        // console.log(id)
        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(id)
        }
        
        fetch(this.ownersUrl + `/${id}`, configObj)
        // debugger
        // .then(res => res.json())
        // .then(resp => {
        //     console.log(resp)
        // })

        Owner.all = Owner.all.filter(owner => owner.id != id)

        let owner = document.getElementById(`owner-${id}`)
        owner.remove()
    }

        

}