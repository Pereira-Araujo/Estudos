

const exec = (fn,a,b) =>{
    return fn(a,b)
}

const sum =(x,y)=> console.log(x+y)
const sub =(x,y)=> console.log(x-y)

exec(sum,1,2)
exec(sub,2,1)