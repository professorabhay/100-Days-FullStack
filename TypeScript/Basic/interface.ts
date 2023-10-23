interface User {
    email: string,
    userID: number,
    googleId?: string,
    // startTrail: () => string, 
    startTrail() : string, // not in type 
}


// You can also re-opening the interface - means you can add more values to it ! LOL 🤣 fancy words

// eg   = 

interface User {
    githubToken:string
}

// Inheritance kind of - 

interface Admin extends User {
    role: 'admin' 
// No it has all the user property with extra defined here
}

const abhay : User = {email: '', userID: 12, 
startTrail:() => {
    return " started "
},
githubToken: "propessor",
} 
abhay.email = 'abhay@gmail.com'



