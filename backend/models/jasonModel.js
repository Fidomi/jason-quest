import mongoose from "mongoose";

export const ApplicantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Entrez votre nom",
        index: { unique: Boolean },
    },
    age: {
        type: Number,
        required: "Entrez votre age",
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
        required: "Faites-vous du sport plus de deux fois par semaine?",
    },
    created_date: {
        type: Date,
        default: Date.now(),
    },
});
