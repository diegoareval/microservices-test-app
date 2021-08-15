import React, {useState} from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Button
  } from "@chakra-ui/react"
import Api from '../lib/api';

const CommentCreate = ({postId}) => {
    const [content, setContent] = useState('');

    const create = () => {
        Api.createPostComment(content, postId).then(({status}) => {
            console.log(status);
          if(status){
            setContent('')
          }
        })
    }

    return (
        <FormControl id="content">
        <Input type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
        <Button mt={'6'} onClick={() => create()}>Comment</Button>
      </FormControl>
    )
}

export default CommentCreate
