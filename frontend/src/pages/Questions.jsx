import Layout from "../components/Layout/index";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import device from "../utils/style/devices";
import Button from "../components/Button/index";
import { InputField, MyRadiobox } from "../components/FormikInputs";
import {
    InputBox,
    ErrorDiv,
    SuccessDiv,
} from "../components/FormikInputs/FormikInputs.style";

const Container = styled.div`
    width: 90%;
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-center: center;
    & h1 {
        text-align: center;
        margin: 2rem 0;
    }
    @media ${device.laptop} {
        width: 70%;
    }
`;

const EndContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 3rem;
    & > * {
        margin: 1rem auto;
    }
    @media ${device.laptop} {
        width: 25%;
    }
`;
const ContainerRadio = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.35rem;
    max-width: 16rem;
    font-size: 1.2rem;
    margin: 0 auto;
    & > :first-child {
        flex: 1 0 100%;
    }
`;

const QuestionsSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Trop court!")
        .max(16, "Trop long!")
        .required("Exigé"),
    age: Yup.number()
        .min(18, "Les mineurs ne peuvent pas postuler!")
        .integer("Veuillez entrer un entier.")
        .required("Exigé"),
    height: Yup.number()
        .min(100, "Les enfants ne peuvent pas postuler!")
        .max(240, "Seriez-vous une girafe?")
        .required("Exigé"),
    weight: Yup.number()
        .min(40, "Les enfants ne peuvent pas postuler!")
        .max(150, "Trop lourd! Vous allez faire couler l'Argo!")
        .integer("Veuillez entrer un entier.")
        .required("Exigé"),
    sport: Yup.boolean().required("Veuillez répondre à cette question!"),
});

const Questions = () => {
    const [error, setError] = useState("");
    const [status, setStatus] = useState(false);
    let navigate = useNavigate();
    const onClick = () => {
        navigate("/resultats", {
            replace: true,
        });
    };
    return (
        <Layout>
            <Container>
                <h1>Pour postuler, veuillez remplir ce formulaire :</h1>
                <Formik
                    initialValues={{
                        name: "",
                        age: 18,
                        height: 140,
                        weight: 40,
                        sport: false,
                    }}
                    validationSchema={QuestionsSchema}
                    onSubmit={async (values, actions) => {
                        setStatus(false);
                        setError("");
                        const { name, age, height, weight, sport } = values;
                        try {
                            const resp = await axios.post("/api/applicant", {
                                name: name,
                                age: age,
                                height: height,
                                weight: weight,
                                sport: sport,
                            });
                            if (resp.data.name) {
                                console.log(resp.data);
                                setStatus(true);
                            } else {
                                throw new Error(resp.data);
                            }
                            actions.setSubmitting(false);
                        } catch (err) {
                            if (err.message.match(/(404)/g)) {
                                let msg = "Cet utilisateur n'existe pas!";
                                setError(msg);
                            } else if (err.message.match(/(403)/g)) {
                                let msg = "Mauvais mot de passe!";
                                setError(msg);
                            } else {
                                setError(err.message);
                            }
                        }
                    }}>
                    {(props) => (
                        <Form>
                            <InputField
                                name="name"
                                id="name"
                                placeholder=""
                                label="Nom"
                                type="text"
                            />
                            <InputField
                                name="age"
                                id="age"
                                placeholder=""
                                label="Age."
                                type="number"
                            />
                            <InputField
                                name="height"
                                id="height"
                                placeholder=""
                                label="Taille en cm"
                                type="number"
                            />
                            <InputField
                                name="weight"
                                id="weight"
                                placeholder=""
                                label="Poids en kg"
                                type="number"
                            />
                            <ContainerRadio>
                                <p>
                                    Faites-vous plus de 2 heures de sport par
                                    jour?
                                </p>
                                <MyRadiobox
                                    name="sport"
                                    id="Oui"
                                    placeholder=""
                                    label="Oui"
                                    type="radio"
                                    value="true"
                                />
                                <MyRadiobox
                                    name="sport"
                                    id="Non"
                                    placeholder=""
                                    label="Non"
                                    type="radio"
                                    value="false"
                                />
                            </ContainerRadio>
                            <InputBox>
                                <Button
                                    type="submit"
                                    buttonTheme={"roundedOutline"}
                                    buttonSize={"medium"}
                                    disabled={false}>
                                    Validation
                                </Button>
                            </InputBox>
                        </Form>
                    )}
                </Formik>
                {error && <ErrorDiv>{error}</ErrorDiv>}
                {status && (
                    <EndContainer>
                        <SuccessDiv>
                            Votre participation est enregistrée
                        </SuccessDiv>
                        <Button
                            type="button"
                            onClick={onClick}
                            buttonTheme="rounded"
                            buttonSize="large"
                            disabled={false}>
                            VOIR LE CLASSEMENT
                        </Button>
                    </EndContainer>
                )}
            </Container>
        </Layout>
    );
};

export default Questions;
