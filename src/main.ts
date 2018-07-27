const cbor = import("../build/cbor_nemo157_com")

const input = <HTMLTextAreaElement>document.getElementById('input')
const submit = document.getElementById('submit')
const hex = document.getElementById('hex')
const diag = document.getElementById('diag')
const save = document.getElementById('save')
const saved = <HTMLTextAreaElement>document.getElementById('saved')

cbor.then(cbor => {
  function parse(type: string, value: string) {
    let result

    switch (type) {
      case 'auto':
        result = cbor.parse_auto(value)
        break;

      case 'hex':
        result = cbor.parse_hex(value)
        break;

      case 'diag':
        result = cbor.parse_diag(value)
        break;
    }

    if (result.Err) {
      hex.textContent = result.Err
      diag.textContent = ''
    } else {
      hex.textContent = result.Ok[0]
      diag.textContent = result.Ok[1]
    }
  }

  submit.addEventListener('click', () => {
    const type = (<HTMLInputElement>document.querySelector('input[name="type"]:checked')).value;
    parse(type, input.value)
  })
  save.addEventListener('click', () => {
    const type = (<HTMLInputElement>document.querySelector('input[name="type"]:checked')).value;
    let url = new URL(document.location.toString());
    url.searchParams.set("type", type);
    url.searchParams.set("value", input.value);
    saved.value = url.toString();
  })

  let url = new URL(document.location.toString());
  let type = url.searchParams.get("type");
  let value = url.searchParams.get("value");

  if (type && value) {
    (<HTMLInputElement>document.querySelector(`input[name="type"][value="${type}"]`)).checked = true;
    input.value = value;
    parse(type, value);
  }

}, err => hex.textContent = err)
