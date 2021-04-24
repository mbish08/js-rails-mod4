const ownersAdapter = new OwnersAdapter
const dogsAdapter = new DogsAdapter
const newOwnerButton = document.getElementById('new-owner-button')
const ownerForm = document.getElementById('owner-form')
const ownerList = document.getElementById("owner-list")
const newDogButton = document.getElementById('new-dog-button')

document.addEventListener('DOMContentLoaded', () => {
    ownersAdapter.fetchOwners()
    dogsAdapter.fetchDogs()
    newOwnerButton.addEventListener('click', newOwnersForm)
    ownerForm.addEventListener('submit', ownersAdapter.handleFormSubmit)
    ownerList.addEventListener('click', ownersAdapter.handleListClick)
    newDogButton.addEventListener('click', newDogsForm)
})

function newOwnersForm(e) {
    e.target.hidden = true
    const newOwnerForm = document.getElementById('new-owner-form-container')
    newOwnerForm.hidden = false
}

function newDogsForm(e) {
    e.target.hidden = true
    const newDogForm = document.getElementById('new-dog-form-container')
    newDogForm.hidden = false
    const ownerSelect = document.getElementById('ownerSelect')
}