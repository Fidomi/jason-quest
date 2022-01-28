import mongoose from "mongoose";
import { ApplicantSchema } from "../models/jasonModel";
import "babel-polyfill";

const Applicant = mongoose.model("Applicant", ApplicantSchema);

export const getAllApplicants = async () => {
    try {
        const allApplicants = await Applicant.find({});
        if (!allApplicants) {
            throw new Error("Impossible");
        } else {
            return allApplicants;
        }
    } catch (err) {
        return err;
    }
};

export const getApplicantWithID = async (id) => {
    try {
        const applicant = await Applicant.findById(id).exec();
        if (!applicant) {
            throw new Error("Cet id ne correspond à aucun candidat");
        } else {
            return applicant;
        }
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const findApplicantByName = async (name) => {
    try {
        if (name) {
            const applicant = await Applicant.findOne({
                name: name,
            }).exec();
            if (!applicant) {
                return false;
            } else {
                return applicant;
            }
        } else {
            throw new Error("Il manque le nom du candidat.");
        }
    } catch (err) {
        console.error(err.message);
        return err.message;
    }
};

export const addNewApplicant = async (name, age, height, weight, sport) => {
    try {
        const alreadyExists = await findApplicantByName(name);
        if (!alreadyExists) {
            let newApplicant = new Applicant({
                name: name,
                age: age,
                height: height,
                weight: weight,
                sport: sport,
            });
            const result = await newApplicant.save();
            if (!result) {
                throw new Error(
                    "Impossible d'enregistrer ce nouvel utilisateur."
                );
            } else {
                return result;
            }
        } else {
            throw new Error("Cet utilisateur existe déjà.");
        }
    } catch (err) {
        console.error(err.message);
        return err.message;
    }
};
