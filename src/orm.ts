import mongoose from "mongoose";
import {Post} from "./models/post-model"


//FUNZIONE PER INSERIRE POST
export const insertPost = async (nome: string, descrizione: string) => {

    try {
        await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"collezionePosts"})

        let post = new Post();
        post.nome = nome;
        post.descrizione = descrizione;

        return await post.save();

    } catch (error) {
        console.log(error);
        
    }finally{
        await mongoose.disconnect();
    }
}


//FUNZIONE CHE RITORNA TUTTI I POST
export const getPosts = async () => {

    try {
        await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"collezionePosts"})

     return await Post.find()

    } catch (error) {
        console.log(error);
        
    }finally{
        await mongoose.disconnect();
    }
}



//FUNZIONE AGGIORNA POST IN BASE ALL'ID
export const updatePosts = async (id: string) => {

    try {
        await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"collezionePosts"})

        const nuovoNomePost = "Nome post Aggiornato"
        const UpdatedPost = await Post.findByIdAndUpdate(id,{nome: nuovoNomePost}, { new: true, runValidators: true })

     return UpdatedPost;

    } catch (error) {
        console.log(error);
        
    }finally{
        await mongoose.disconnect();
    }
}



//FUNZIONE CHE ELIMINA POST
export const deletePost = async (id: string) => {

    try {
        await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"collezionePosts"})

     return await Post.findByIdAndDelete(id)

    } catch (error) {
        console.log(error);
        
    }finally{
        await mongoose.disconnect();
    }
}