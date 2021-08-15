import React, {useState, useEffect} from 'react'
  import {  Text, Heading, Box } from "@chakra-ui/react"
import Api from '../lib/api';

const CommentList = ({postId}) => {
    const [comments, setComments] = useState({});
   
    const fetchPosts = () => {
        Api.getCommentsByPost(postId).then(({status, data}) => {
            console.log(status);
            if(status) {
                setComments(data);
            }
        })
    }
    useEffect(() => {
        fetchPosts();
    }, []);
  
    
    const renderedComments = Object.values(comments).map(comment => {
        return (
            <Box key={comment.id} mt={"5"} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" /*_hover={styles.boxStyles}*/>
              <Text m="5" mt="0">
                 {comment.content}
              </Text>
            </Box>
        )
    })
   
    return (
         <>
           <Heading>
              Comments
            </Heading>
            {renderedComments}
            </>
    )
}

export default CommentList
