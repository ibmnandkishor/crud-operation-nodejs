express=require('express')
app=express()
port=3000
student=require('./database.js')
app.listen(port,()=>{console.log('server runing')})


app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extends:true}));

app.get('/',async(req,res)=>{
    students=await student.find()
    res.render('index.ejs', {
        title:"Read Update and Delete opereation",
        students:students})
})

app.post('/register',async(req,res)=>{
    const {name,mail,age}=req.body;
    newstudent=new student({
        name,mail,age 
    })
    studentsave=await newstudent.save()
    res.redirect('/')
})

app.get('/register',async(req,res)=>{
  students=await student.find()
    res.render('register.ejs')
})

app.get('/delete/:id',async(req,res)=>{
  const {id}=req.params
   deleteStudent=await student.findByIdAndDelete(req.params.id)
   res.redirect('/')
 })

app.get('/edit/:id',async(req,res)=>{
  id=req.params.id
  editstudent=await student.findById({_id:id})
  if(editstudent==null){res.redirect('/')}
  else{res.render('edit.ejs',{students:editstudent})}
  
})

app.post('/edit/:id',async(req,res)=>{
  id=req.params.id
  const {name,mail,age}=req.body
  updatestudent=await student.findByIdAndUpdate({_id:id},
  {name,mail,age},{new:true})
  res.redirect('/')
})