const ownersAdapter = new OwnersAdapter
const dogsUrl = "http://localhost:3000/api/v1/dogs"

document.addEventListener('DOMContentLoaded', () => {
    ownersAdapter.fetchOwners()
    
})

