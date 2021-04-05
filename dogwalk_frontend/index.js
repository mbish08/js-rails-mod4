const ownersUrl = "http://localhost:3000/api/v1/owners"
const dogsUrl = "http://localhost:3000/api/v1/dogs"

function fetchOwners() {
    fetch(ownersUrl)
    .then(res => res.json())
    .then(owners => addOwners(owners))
}

function addOwners(resp) {
    console.log(resp)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchOwners()
})

