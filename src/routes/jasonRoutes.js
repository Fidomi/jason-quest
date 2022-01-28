import {
    addNewApplicant,
    getAllApplicants,
    getApplicantWithID,
} from "../controllers/jasonControllers";

export const getAllApplicantsRoute = {
    path: "/api/applicants",
    method: "get",
    handler: async (req, res) => {
        try {
            const applicants = await getAllApplicants();
            if (!applicants) {
                throw new Error("Il n'existe pas de candidats enregistrés.");
            } else {
                res.send(applicants);
            }
        } catch (err) {
            res.status(503).send(err.message);
        }
    },
};

export const getApplicantByIdRoute = {
    path: "/api/applicant/:applicantID",
    method: "get",
    handler: async (req, res) => {
        try {
            if (req.params.applicantID) {
                const applicant = await getApplicantWithID(
                    req.params.applicantID
                );
                if (!applicant) {
                    throw new Error("Cet id ne correspond à aucun candidat");
                } else {
                    res.send(applicant);
                }
            } else {
                throw new Error(
                    "Impossible d'accèder à cette requête : il manque l'id du candidat."
                );
            }
        } catch (err) {
            res.status(503).send(err.message);
        }
    },
};

export const addNewApplicantRoute = {
    path: "/api/applicant",
    method: "post",
    handler: async (req, res) => {
        try {
            console.log("req.body", req.body);
            const { name, age, height, weight, sport } = req.body;
            const newApplicant = await addNewApplicant(
                name,
                age,
                height,
                weight,
                sport
            );
            console.log("newApplicant", newApplicant);
            if (newApplicant) {
                res.send(newApplicant);
            } else {
                throw new Error(
                    "Impossible d'enregistrer ce nouvel utilisateur."
                );
            }
        } catch (err) {
            res.status(503).send(err.message);
        }
    },
};
