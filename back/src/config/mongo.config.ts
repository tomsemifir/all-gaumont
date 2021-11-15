import mongoose from "mongoose";

export const setMongoConnection = () => {
    mongoose.connect('mongodb://db:27017', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if(err) {
            console.error(err);
        } else {
           console.log("Connecté à la base de données"); 
        }
        
    })
} 