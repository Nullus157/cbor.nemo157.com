const cbor = import("../build/cbor_nemo157_com")

const input = <HTMLTextAreaElement>document.getElementById('input')
const submit = document.getElementById('submit')
const hex = document.getElementById('hex')
const diag = document.getElementById('diag')
const save = document.getElementById('save')
const dark = document.getElementById('dark')
const saved = <HTMLTextAreaElement>document.getElementById('saved')

function store(setting: string, value: any) {
  try {
    window.localStorage.setItem(setting, JSON.stringify(value))
  } catch {
  }
}

function load(setting: string) {
  try {
    return JSON.parse(window.localStorage.getItem(setting))
  } catch {
  }
}

dark.addEventListener('click', () => {
  store('dark', document.body.classList.toggle('dark'))
})

document.body.classList.toggle('dark', load('dark') || false)

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
    store('type', type)
    store('value', input.value)
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

  if (!type || !value) {
    type = load('type')
    value = load('value')
  }

  if (type && value) {
    (<HTMLInputElement>document.querySelector(`input[name="type"][value="${type}"]`)).checked = true;
    input.value = value;
    parse(type, value);
  }

}, err => hex.textContent = err)
