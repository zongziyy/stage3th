import  {post} from "./index"


export default  {
    register:(info)=>{
        return  post("/api/users/register",info);
    },
    login:(info)=>{
        return  post("/api/users/login",info);
    }

}