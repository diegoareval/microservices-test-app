import React, {useState, useEffect} from 'react'
  import {  Text, Heading, Box } from "@chakra-ui/react"
import Api from '../lib/api';
import CommentCreate from './CommentCreate';
import CommentList from './CommentsList';

// const styles =  {
//  boxStyles: {
//     background: "teal.500",
//     color: "white",
//   }
// }
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
            <Box key={post.id} mt={"5"} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" /*_hover={styles.boxStyles}*/>
              <Text m="5" mt="0">
                 {post.title}
              </Text>
              <CommentCreate postId={post.id}/>
              <CommentList postId={post.id} />
            </Box>
        )
    })
   
    return (
         <>
            {renderedPost}
            </>
    )
}

export default PostList
