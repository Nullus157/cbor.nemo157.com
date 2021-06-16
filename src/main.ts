const cbor = import("../build")
import copy from 'copy-to-clipboard'

const input = <HTMLTextAreaElement>document.getElementById('input')
const submit = document.getElementById('submit')
const hex = document.getElementById('hex')
const diag = document.getElementById('diag')
const save = document.getElementById('save')
const saved = <HTMLAnchorElement>document.getElementById('saved')
const copyButton = <HTMLButtonElement>document.getElementById('copy-button')
const copied = document.getElementById('copied')

function store(setting: string, value: any) {
  try {
    window.localStorage.setItem(setting, JSON.stringify(value))
  } catch {
  }
}

function load<T>(setting: string): T {
  try {
    return JSON.parse(window.localStorage.getItem(setting))
  } catch {
  }
}

try {
  const dark = window.localStorage.getItem('dark')
  if (dark) {
    store('theme', JSON.parse(dark) ? 'dark' : 'light')
    window.localStorage.removeItem('dark')
  }
} catch {
}

const theme = load<string>('theme') || 'auto';

(<HTMLInputElement>document.querySelector(`input[name="theme"][value="${theme}"]`)).checked = true
document.body.dataset.theme = theme

for (const el of document.querySelectorAll<HTMLInputElement>('input[name="theme"]')) {
  el.addEventListener('click', () => {
    store('theme', el.value)
    document.body.dataset.theme = el.value
  })
}

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
      throw result.Err
    }

    hex.textContent = result.Ok[0]
    diag.textContent = result.Ok[1]
    hex.dataset.bytes = result.Ok[2]
  }

  const process = () => {
    const type = (<HTMLInputElement>document.querySelector('input[name="type"]:checked')).value;
    store('type', type)
    store('value', input.value)
    try {
      parse(type, input.value)
    } catch (err) {
      hex.textContent = err
      diag.textContent = ''
    }
  }

  const tryProcess = () => {
    const type = (<HTMLInputElement>document.querySelector('input[name="type"]:checked')).value;
    try {
      parse(type, input.value)
      store('type', type)
      store('value', input.value)
    } catch (err) {
      console.debug(`Failure while trying: ${err}`)
    }
  }

  submit.addEventListener('click', process)

  save.addEventListener('click', () => {
    const type = (<HTMLInputElement>document.querySelector('input[name="type"]:checked')).value
    let url = new URL(document.location.toString())
    url.searchParams.set("type", type)
    url.searchParams.set("value", input.value)
    saved.href = url.toString()
    saved.text = 'Permalink to the playground'
    copyButton.style.display = 'inline-block'
  })

  let copyTimeout: ReturnType<typeof setTimeout>;
  copyButton.addEventListener('click', () => {
    if (copy(saved.href, { format: 'text/plain' })) {
      copied.style.display = 'inline-block'
      copied.style.transition = 'opacity 0.1s'
      copied.style.opacity = '1'
      clearTimeout(copyTimeout)
      copyTimeout = setTimeout(() => {
        copied.style.transition = 'opacity 5s'
        copied.style.opacity = '0'
        copyTimeout = setTimeout(() => {
          copied.style.display = 'none'
        }, 5000)
      }, 100)
    }
  })

  input.addEventListener('keydown', e => {
    if (e.keyCode == 13 && (e.metaKey || e.ctrlKey)) {
      process()
    }
  })

  input.addEventListener('keyup', () => {
    tryProcess()
  })

  let url = new URL(document.location.toString());
  let type = url.searchParams.get("type");
  let value = url.searchParams.get("value");

  if (!type || !value) {
    type = load('type')
    value = load('value')
  }

  if (!value) {
    type = 'hex'
    value = 'bf6346756ef563416d7421ff'
  }

  if (type && value) {
    (<HTMLInputElement>document.querySelector(`input[name="type"][value="${type}"]`)).checked = true;
    input.value = value;
    parse(type, value);
  }

}, err => hex.textContent = err)
