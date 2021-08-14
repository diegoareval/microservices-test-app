import React, {useState} from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Button
  } from "@chakra-ui/react"
import Api from '../lib/api';

const PostCreate = () => {
    const [title, setTitle] = useState('');

    const create = () => {
        Api.createPost(title).then(({status}) => {
            console.log(status);
          if(status){
            setTitle('')
          }
        })
    }

    return (
        <FormControl id="title">
        <FormLabel>title</FormLabel>
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <Button mt={'6'} onClick={() => create()}>Create Post</Button>
      </FormControl>
    )
}

export default PostCreate
