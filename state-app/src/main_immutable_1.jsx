//this function is not pure because it modifes the old memory address 

// function updateProfile(city, profile) {
//     profile.city = city
//     return profile
// }
//the function must return immutable object

function updateProfile(city, profile) {
    //return new object every time
    //pattern 1: plain js object
    // return {
    //     name: profile.name,
    //     city: city
    // }
    //pattern  2: via Object.assign method
    // return Object.assign({}, profile, { city: city })

    //pattern 3: via es 7 spread notation: it is popular
    return {
        ...profile,
        city: city
    }
}
let profile = {
    name: 'Subramanian',
    city: 'Chennai'
}
console.log('Before Update', profile)
const response = updateProfile('Coimbatore', profile)
//purity checking
console.log(profile === response ? "Same Object" : "Different Object")
console.log("After Update", response)

