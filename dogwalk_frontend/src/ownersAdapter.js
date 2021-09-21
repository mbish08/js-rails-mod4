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
        this.initializeOwnerDropDown(ownerData)
    }

    initializeOwnerDropDown(data) {
        const dropDown = document.getElementById('ownerSelect')
        const ownerId = parseInt(data.id)
        const ownerName = data.name
     
        dropDown.innerHTML += `
        <option value="${ownerId}" name="owner_id">${ownerName}</option>
        `
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
            let newOwner = new Owner({ id: owner.id, ...owner})
            newOwner.attachToDom()
            this.initializeOwnerDropDown({id: owner.id, name: name})
        })
        
        ownerForm.reset()
        const newOwnerButton = document.getElementById('new-owner-button')
        const formContainer = document.getElementById('new-owner-form-container')
        formContainer.hidden = true
        newOwnerButton.hidden = false
        newOwnerButton.addEventListener('click', newOwnersForm)
    }

    handleListClick = (e) => {
        let id = e.target.dataset.id
        if (e.target.className === "delete") {
            ownersAdapter.deleteOwner(id)
        }
        else if (e.target.className === "delete-dog") {
            dogsAdapter.deleteDog(id)
        }
    }
}