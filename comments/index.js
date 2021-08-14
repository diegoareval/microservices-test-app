const express = require('express');
const app = express();
const cors = require('cors');
const {randomBytes} = require('crypto')
app.use(express.json())
app.use(cors())

const commentByPostId = {}
app.get('/posts/:id/comments', (req, res) => {
    const comments =  commentByPostId[req.params.id] || [];
  res.send(comments)
})

app.post('/posts/:id/comments', (req, res) => {
    const postId = req.params.id;
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;
   const comments =  commentByPostId[postId] || [];
   comments.push({commentId, content});
   commentByPostId[postId] = comments
    res.status(201).send(comments);
})

app.listen(4001, () => {
    console.log('listening on 4001')
})