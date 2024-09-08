export default function generatePass(){
let password: string= ''
let characters:string='AaCc#$@123456789efgHiJLmNoPq'
let passwordLenght = 8

for(let index=0; index < passwordLenght; index ++){
    password += characters.charAt(
        Math.floor(Math.random() * characters.length)
    )
}

return password
}