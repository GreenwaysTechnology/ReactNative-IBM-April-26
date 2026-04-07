
function createElement() {
    const headingElement= document.createElement('h1')
    console.log(headingElement)
    headingElement.innerHTML = 'Hello React!'
    headingElement.style.color='blue'
    console.dir(headingElement)
    //get the div element
    const RootElement=document.getElementById('root')
    console.dir(RootElement)
    RootElement.appendChild(headingElement)

}

function main() {
    createElement()
}
main()