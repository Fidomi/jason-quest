import mongoose from "mongoose";
import { ApplicantSchema } from "../models/jasonModel";

const Applicant = mongoose.model("Applicant", ApplicantSchema);

export const addNewApplicant = (req, res) => {
    let newApplicant = new Applicant(req.body);
    newApplicant.save((err, applicant) => {
        if (err) {
            res.send(err);
        }
        res.json(applicant);
    });
};

export const getApplicants = (req, res) => {
    Applicant.find({}, (err, applicant) => {
        if (err) {
            res.send(err);
        }
        res.json(applicant);
    });
};

export const getApplicantWithID = (req, res) => {
    Applicant.findById(req.params.applicantID, (err, applicant) => {
        if (err) {
            res.send(err);
        }
        res.json(applicant);
    });
};
