import {
    addNewApplicant,
    getApplicants,
    getApplicantWithID,
} from "../controllers/jasonControllers";

const routes = (app) => {
    app.route("/applicant")
        .get((req, res, next) => {
            //middleware
            console.log(`Request from :${req.originalUrl}`);
            console.log(`Request type :${req.method}`);
            next();
        }, getApplicants)
        .post(addNewApplicant);
    app.route("/applicant/:applicantID")
        .get(getApplicantWithID)
        .put((req, res) => res.send("PUT request successful!"))
        .delete((req, res) => res.send("DELETE request successful!"));
};

export default routes;
