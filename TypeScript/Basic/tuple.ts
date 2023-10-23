// not available in JS

// const user: (string | number )[] = [1, 'hc']
let user: [string, number, boolean] 
// user = [true, 'hc', 131] // give error because tuples follow order also !
user = ['hc', 131, true]

let rgb: [number, number, number] = [0, 0, 0]
// let rgb: [number, number, number] = [0, 0, 0, 0] // not allowed to add one more but -
rgb.push(0) // not giving error ! we use the array . method to bypass it 🤣


