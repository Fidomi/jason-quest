import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ApplicantSchema = new Schema({
    firstName: {
        type: String,
        required: "Entrez votre nom",
    },
    age: {
        type: Number,
        min: 15,
        max: 50,
        required: "Entrez votre âge",
    },
    height: {
        type: Number,
        required: "Entrez votre taille en cm",
    },
    weight: {
        type: Number,
        required: "Entrez votre poids en kg",
    },
    sport: {
        type: Boolean,
        required: "Faites-vous plus de 2 heures de sport chaque jour?",
    },
    created_date: {
        type: Date,
        default: Date.now(),
    },
});
