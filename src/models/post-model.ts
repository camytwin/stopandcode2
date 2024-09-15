import mongoose from "mongoose";

//definisco schema dei post
const postSchema = new mongoose.Schema({

    nome: {type: String, required: true},
    descrizione: {type: String, default: "Nessuna descrizione fornita"},
    dataCreazione: {type: Date, default: Date.now},
    attivo: {type: Boolean, default: true}
})


//creo modello

export const Post = mongoose.model("Post", postSchema, "posts");