/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const outputLengthEl = document.getElementById("output-length-el")
const outputVolumeEl = document.getElementById("output-volume-el")
const outputMassEl = document.getElementById("output-mass-el")
const convertBtn = document.getElementById("convert-btn")


function converterLength() {
    const value = inputEl.value
    const meterTOfeet = value * 3.281
    const feetTOmeter = inputEl.value / 3.281
    return `
        ${value} meters = ${meterTOfeet.toFixed(3)} feet | ${value} feet = ${feetTOmeter.toFixed(3)} meters`
}

function converterVolume() {
    const value = inputEl.value
    const litersTOgallons = value * 0.264172
    const gallonsTOliters = value * 3.78541
    return `
        ${value} liters = ${litersTOgallons.toFixed(3)} gallons | ${value} gallons = ${gallonsTOliters.toFixed(3)} liters`
}

function converterMass() {
    const value = inputEl.value
    const kilosTOpounds = value * 2.204
    const poundsTOkilos = value / 2.204
    return `
        ${value} kilos = ${kilosTOpounds.toFixed(3)} pounds | ${value} pounds = ${poundsTOkilos.toFixed(3)} kilos`
}

function renderContent() {
    if (inputEl.value === "") {
        outputLengthEl.textContent = "Please type in number you twat."
        outputVolumeEl.textContent = "Please type in number you moron."
        outputMassEl.textContent = "Please type in number you idiot."
    } else {
    const outputL = converterLength()
    outputLengthEl.textContent = outputL
    const outputV = converterVolume()
    outputVolumeEl.textContent = outputV
    const outputM = converterMass()
    outputMassEl.textContent = outputM
    }
}

convertBtn.addEventListener("click", function() {
        renderContent()
})