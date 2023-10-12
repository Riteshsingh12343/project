import mongoose from "mongoose"

export const Connection = async(username, password)=> {
    const URL =`mongodb://${username}:${password}@ac-vdjgi6c-shard-00-00.y4nbhof.mongodb.net:27017,ac-vdjgi6c-shard-00-01.y4nbhof.mongodb.net:27017,ac-vdjgi6c-shard-00-02.y4nbhof.mongodb.net:27017/?ssl=true&replicaSet=atlas-122wvg-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {

       await mongoose.connect(URL,{useNewUrlParser: true});
       console.log('Database Connected Succesfully ');
    }catch(error){
        console.log('Error while Connecting with the database ',error);
    }
};
export default  Connection ;