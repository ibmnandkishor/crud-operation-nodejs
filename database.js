mongoose=require('mongoose')

mongoose.connect("mongodb+srv://aditibm9648:kishor9648103474@cluster0.do7e7sk.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log('connected successfully')
}).catch((error)=>{console.log(error)})


schema=mongoose.Schema({
    name:String,
    mail:String,
    age:Number
})
console.log('schema created')

studentModel=mongoose.model('student',schema)
module.exports=studentModel