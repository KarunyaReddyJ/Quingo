const email=document.getElementsByName('email')
const password=document.getElementsByName('password')
const login =document.querySelector('input[type="submit"]')


login.addEventListener('click',async(e)=>{
    e.preventDefault()
    try {
        const response=await fetch('http://localhost:5000/api/auth/login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'karunyareddy1418@gmail.com',
                password: 'karunya',
            }),
        })
        console.table(response)
    } catch (error) {
        console.error("error undhi",error)
    }
})  