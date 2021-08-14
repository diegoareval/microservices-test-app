import React, {useState, useEffect} from 'react'
  import {  ListItem, OrderedList, Text, Heading, Box } from "@chakra-ui/react"
import Api from '../lib/api';
const PostList = () => {
    const [posts, setPosts] = useState({});
   
    const fetchPosts = () => {
        Api.getPosts(posts).then(({status, data}) => {
            console.log(status);
            if(status) {
                setPosts(data);
            }
        })
    }
    useEffect(() => {
        fetchPosts();
    }, []);
    
    const renderedPost = Object.values(posts).map(post => {
        return (
            <Box mt={"5"} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Text m="5" mt="0">
                 {post.title}
              </Text>
            </Box>
        )
    })
   
    return (
         <>
           <Heading>
           Post List
            </Heading>
               {renderedPost}
            </>
    )
}

export default PostList
