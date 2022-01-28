import Layout from "../components/Layout/index";
import Argo from "../assets/equipping_argo.jpg";
import styled from "styled-components";
import device from "../utils/style/devices";
import Button from "../components/Button/index";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    & > * {
        width: 100%;
    }
    & > article {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        & > h1 {
            font-size: 2rem;
        }
        & :last-child {
            max-width: 10rem;
            align-self: center;
        }
    }
    & > figure > img {
        width: 90vw;
    }

    @media ${device.laptop} {
        flex-direction: row;
        & > * {
            width: 50%;
            align-items: center;
        }
        & > article {
            & > * {
                width: 75%;
            }
        }
        & > figure > img {
            width: auto;
            max-height: 70vh;
        }
        & > figure > figcaption {
            max-width: 70%;
        }
    }
`;

const Home = () => {
    let navigate = useNavigate();
    const onClick = () => {
        navigate("/questions", {
            replace: true,
        });
    };
    return (
        <Layout>
            <Container>
                <article>
                    <h1>
                        Oyez braves gens! <br /> Le jour est enfin venu pour
                        Jason de venger son père et de récupérer le trône de
                        Iolcos!
                    </h1>
                    <p>
                        Il y a de nombreuses années, Pélias, l’actuel roi
                        illégitime de Iolcos a usurpé le trône de son père.
                        Evidemment, Pélias n’a pas l’intention de céder son
                        titre aussi facilement au jeune Jason.
                    </p>
                    <p>
                        Il lui lance donc un défi : aller récupérer la toison
                        d’or située à plus de 1300 kilomètres, en Colchide. Pour
                        rejoindre Colchide, Jason doit naviguer sur la Mer
                        Noire. Il a fait construire un puissant navire pour
                        l’expédition : l’Argo. Il lui reste maintenant à trouver
                        les équipiers.
                    </p>
                    <p>
                        Si tu es valeureux et que tu veux aider Jason à rétablir
                        la justice, tente ta chance pour obtenir une place sur
                        l'Argo!
                    </p>
                    <p>
                        Les 50 premiers candidats valides partiront avec Jason!
                        Dépêche-toi!
                    </p>
                    <Button
                        type="button"
                        onClick={onClick}
                        buttonTheme="rounded"
                        buttonSize="large"
                        disabled={false}>
                        JE POSTULE
                    </Button>
                </article>
                <figure>
                    <img src={Argo} alt="Equipement de l'Argo" />
                    <figcaption>
                        Bodleian Library. University of Oxford, MS Douce 353,
                        f.31r, top right: equipping of the Argo, Hercules and
                        Jason playing chess
                    </figcaption>
                </figure>
            </Container>
        </Layout>
    );
};

export default Home;
