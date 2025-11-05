const $ = document

const firstNameInput = $.querySelector("#first-name")
const firstNameWarn = $.querySelector("#first-name-warn")
const lastNameInput = $.querySelector("#last-name")
const lastNameWarn = $.querySelector("#last-name-warn")
const emailInput = $.querySelector("#email")
const emailWarn = $.querySelector("#email-warn")
const messageTextarea = $.querySelector("#message")
const messageWarn = $.querySelector("#message-warn")
const generalEnquiry = $.querySelector("#general-enquiry")
const supportRequest = $.querySelector("#support-request")
const generalEnquiryDiv = $.querySelector("#general-enquiry-div")
const supportRequestDiv = $.querySelector("#support-request-div")
const queryTypeWarn = $.querySelector("#query-type-warn")
const terms = $.querySelector("#terms")
const termsWarn = $.querySelector("#terms-warn")
const submitButton = $.querySelector("#submit-button")
const successPopup = $.querySelector(".success-popup")

firstNameInput.addEventListener("keyup", checkFirstName)
function checkFirstName() {
    if (firstNameInput.value === "") {
        firstNameWarn.classList.add("show-warn")
        firstNameInput.classList.add("border-warn")
    } else {
        firstNameWarn.classList.remove("show-warn")
        firstNameInput.classList.remove("border-warn")
    }
}

lastNameInput.addEventListener("keyup", checkLastName)
function checkLastName() {
    if (lastNameInput.value === "") {
        lastNameWarn.classList.add("show-warn")
        lastNameInput.classList.add("border-warn")
    } else {
        lastNameWarn.classList.remove("show-warn")
        lastNameInput.classList.remove("border-warn")
    }
}

emailInput.addEventListener("keyup", checkEmail)
function checkEmail() {
    if (validateEmail(emailInput.value)) {
        emailWarn.classList.remove("show-warn")
        emailInput.classList.remove("border-warn")
    } else {
        emailWarn.classList.add("show-warn")
        emailInput.classList.add("border-warn")
    }
}

generalEnquiry.addEventListener("change", checkQueryType)
supportRequest.addEventListener("change", checkQueryType)
function checkQueryType() {
    if (generalEnquiry.checked || supportRequest.checked) {
        queryTypeWarn.classList.remove("show-warn")
        if (generalEnquiry.checked) {
            generalEnquiryDiv.classList.add("query-type-checked")
            supportRequestDiv.classList.remove("query-type-checked")
        } else if (supportRequest.checked) {
            generalEnquiryDiv.classList.remove("query-type-checked")
            supportRequestDiv.classList.add("query-type-checked")
        }
    } else {
        queryTypeWarn.classList.add("show-warn")
    }
}

messageTextarea.addEventListener("keyup", checkMessage)
function checkMessage() {
    if (messageTextarea.value === "") {
        messageWarn.classList.add("show-warn")
        messageTextarea.classList.add("border-warn")
    } else {
        messageWarn.classList.remove("show-warn")
        messageTextarea.classList.remove("border-warn")
    }
}

terms.addEventListener("change", checkTerms)
function checkTerms() {
    if (terms.checked) {
        termsWarn.classList.remove("show-warn")
    } else {
        termsWarn.classList.add("show-warn")
    }
}

// Generated with ChatGPT
function validateEmail(email) {
    const re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    return re.test(email)
}
submitButton.addEventListener("click", submit)
function submit(event) {
    event.preventDefault()
    const isFirstNameFilled = firstNameInput.value
    const isLastNameFilled = lastNameInput.value
    const isEmailFilled = validateEmail(emailInput.value)
    const isQueryTypeChoosed = generalEnquiry.checked || supportRequest.checked
    const isMessageFilled = emailInput.value
    const isTermsAccepted = terms.checked
    const checkAll =
        isFirstNameFilled &&
        isLastNameFilled &&
        isEmailFilled &&
        isQueryTypeChoosed &&
        isMessageFilled &&
        isTermsAccepted

    checkFirstName()
    checkLastName()
    checkEmail()
    checkQueryType()
    checkTerms()
    checkMessage()

    if (checkAll) {
        successPopup.classList.add("success-popup-show")
    }
}

successPopup.addEventListener("click", () =>
    successPopup.classList.remove("success-popup-show")
)
