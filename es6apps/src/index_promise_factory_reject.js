
function blockMe(message) {
    console.log(message)
}

function getError(){
    return Promise.reject('something bad happened')
}

function main(){
  blockMe('start')
  getError().catch(err=>console.log(err))
  blockMe('end')
}
main()