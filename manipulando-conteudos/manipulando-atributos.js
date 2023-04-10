const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

// console.log(headerID)

// console.log(headerID.getAttribute('id'))

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')
header.removeAttribute('class')

