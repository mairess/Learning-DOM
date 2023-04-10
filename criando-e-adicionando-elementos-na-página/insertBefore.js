const div = document.createElement('div');
div.innerText = 'Olá Devs!'

// const body = document.querySelector('body')
// const script = body.querySelector('script')
// body.insertBefore(div, script)

const body = document.querySelector('body')
const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling)