const $ = document
const input = $.querySelector(".input")
const isNotValidText = $.getElementById("is-not-valid-text")
const inputDiv = $.querySelector(".input-div")

input.addEventListener("keypress", (event) => {
    // TODO: Email validation
    const value = event.target.value
    if (value === "") {
        input.classList.add("is-not-valid")
        isNotValidText.classList.add("show")
        inputDiv.classList.add("not-valid")
    }
})
