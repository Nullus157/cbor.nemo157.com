const cbor = import("../build/cbor_nemo157_com")

const diag = document.createElement('textarea')
const diagSubmit = document.createElement('button')
const hex = document.createElement('textarea')
const hexSubmit = document.createElement('button')
const err = document.createElement('textarea')

document.body.appendChild(diag)
document.body.appendChild(diagSubmit)
document.body.appendChild(hex)
document.body.appendChild(hexSubmit)
document.body.appendChild(err)

cbor.then(cbor => {
  diagSubmit
    .addEventListener('click', () => {
      let result = cbor.diag2hex(diag.value)
      if (result.Err) {
        err.textContent = result.Err
      } else {
        hex.textContent = result.Ok
      }
    })

  hexSubmit
    .addEventListener('click', () => {
      let result = cbor.hex2diag(hex.value)
      if (result.Err) {
        err.textContent = result.Err
      } else {
        diag.textContent = result.Ok
      }
    })
})
