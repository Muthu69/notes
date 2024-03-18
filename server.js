const express = require('express')
const app = express()
const database=require("./database")
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res) => {
     res.render("index.ejs",{
      noi:50
     })
})

app.get('/notes', (req, res) => {
  const searchterm = req.query.searchterm;
  const notes=database.getNotes(searchterm);
  res.render("notes.ejs",{
    notes
  })
})

app.get('/notes/:id', (req, res) => {
  const id = +req.params.id
  const note=database.getNote(id)
  if(!note){
    res.render("note404.ejs")
    return
  }
  res.render("snote.ejs",{
       note,
  });
})

app.get("/createnote",(req,res) =>{
    res.render("createnote.ejs");
})

app.post("/notes", (req ,res)=>{
  const data= req.body
  database.addNote(data)
  
  res.redirect("/notes")
})

app.post("/notes/:id/delete" ,(req,res)=>{
  const id = +req.params.id
  database.deleteNote(id)
})

app.use(express.static("public"))



const port = 8080
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

