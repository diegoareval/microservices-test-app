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
   
}