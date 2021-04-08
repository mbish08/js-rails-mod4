const ownersAdapter = new OwnersAdapter
const dogsAdapter = new DogsAdapter

document.addEventListener('DOMContentLoaded', () => {
    ownersAdapter.fetchOwners()
    // dogsAdapter.fetchDogs()
})

