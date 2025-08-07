export const notEmpty = (r, v, cb)=>{
    if(v.trim() === ''){
        cb(new Error('不能为空'))
    }else{
        cb()
    }
}