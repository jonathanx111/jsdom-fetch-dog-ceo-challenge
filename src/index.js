console.log('%c HI', 'color: firebrick')
let breedsArray = []
// Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
function fetchDogImg() {
    return fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderDogsImg(json))
}

function renderDogsImg(dogs) {
    const imgDiv = document.querySelector('#dog-image-container')
    dogs.message.forEach( dog => {
        const div = document.createElement('div')
        const img = document.createElement('img')
        img.src = dog
        img.height = 100
        img.width = 100
        div.append(img)
        imgDiv.append(div)
    })
}

document.addEventListener('DOMContentLoaded', function () {
    fetchDogImg()
    fetchDogBreed()
}) 

// Challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogsUl = document.querySelector('#dog-breeds')

function fetchDogBreed() {
    return fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => renderDogBreed(json))
}

function renderDogBreed(breeds) {
    breedsArray = Object.keys(breeds.message)

    breedsArray.forEach(breed => {
        const li = document.createElement('li')
        li.dataset.type = "breedLi"
        li.style.cursor = 'pointer'
        li.innerText = breed;
        dogsUl.append(li)
    })

    dogsUl.addEventListener('click', function(e) {
        if (e.target.dataset.type === "breedLi") {
            color = e.target.style.color
            e.target.style.color = color === "pink" ? "skyblue" : "pink"
        }
    } )

    const breedDropdown = document.querySelector('#breed-dropdown')
    breedDropdown.addEventListener('change', function(event) {
        newBreedsArray = breedsArray.filter(breed => breed.startsWith(event.target.value))
        dogsUl.innerHTML = ""
            newBreedsArray.forEach(breed => {
                const li = document.createElement('li')
                li.dataset.type = "breedLi"
                li.style.cursor = 'pointer'
                li.innerText = breed;
                dogsUl.append(li)
            })
    })
}



