import axios from "axios"
export default class Api {

 static createPost(title){
        return axios.post("http://localhost:4000/posts", {
            title
        }).then((res)=> {
            return {
                status: true,
                data: res.data
            }
        }).catch(err => {console.error(err) 
            return {
                status: false
            }});
    }

    static getPosts(){
        return axios.get("http://localhost:4000/posts").then((res)=> {
            return {
                status: true,
                data: res.data
            }
        }).catch(err => {console.error(err) 
            return {
                status: false,
                data: []
            }});
    }

    static getCommentsByPost (id){
        return axios.get(`http://localhost:4001/posts/${id}/comments`).then((res)=> {
            console.log(res.data);
            return {
                status: true,
                data: res.data
            }
        }).catch(err => {console.error(err) 
            return {
                status: false,
                data: []
            }});
        }

        static createPostComment (content, id){
            return axios.post(`http://localhost:4001/posts/${id}/comments`, {
                content
            }).then((res)=> {
                console.log(res.data);
                return {
                    status: true,
                    data: res.data
                }
            }).catch(err => {console.error(err) 
                return {
                    status: false
                }});
            }
   
}