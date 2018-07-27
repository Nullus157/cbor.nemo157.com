const cbor = import("../build/cbor_nemo157_com")

const input = <HTMLTextAreaElement>document.getElementById('input')
const submit = document.getElementById('submit')
const hex = document.getElementById('hex')
const diag = document.getElementById('diag')

cbor.then(cbor => {
  submit
    .addEventListener('click', () => {
      let result = cbor.parse_auto(input.value)
      if (result.Err) {
        hex.textContent = result.Err
        diag.textContent = ''
      } else {
        hex.textContent = result.Ok[0]
        diag.textContent = result.Ok[1]
      }
    })
}, err => hex.textContent = err)
