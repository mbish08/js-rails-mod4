const ownersAdapter = new OwnersAdapter
const dogsAdapter = new DogsAdapter
const newOwnerButton = document.getElementById('new-owner-button')
const ownerForm = document.getElementById('owner-form')

document.addEventListener('DOMContentLoaded', () => {
    ownersAdapter.fetchOwners()
    dogsAdapter.fetchDogs()
    newOwnerButton.addEventListener('click', newOwnerForm)
    ownerForm.addEventListener('submit', ownersAdapter.handleFormSubmit)
})

function newOwnerForm(e) {
    e.target.hidden = true
    const newOwnerForm = document.getElementById('new-owner-form-container')
    newOwnerForm.hidden = false
}