const express= require('express');
const mongoose= require('mongoose');
const connectDB= require('./config/db');
const Book = require('./models/Book');
const Author = require('./models/Author');


const app= express();
const PORT= process.env.PORT||3000;

app.use(express.json());

connectDB();

app.get('/',(req,res)=>{
    res.send('Express server is running')
})

app.post('/books',async (req,res)=>{
    try{

     const {title,authorName,genre}=req.body;
     let author = await Author.findOne({ name: authorName });
     if (!author) {
        author = new Author({ name: authorName });
        await author.save();
      }
      const newBook = new Book({ title, author: author._id, genre });
      await newBook.save()
      res.status(201).json(newBook);

    }catch(err){
      res.status(500).json({message:'Error creating book', error: err.message});
    }
});

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT} `)
})