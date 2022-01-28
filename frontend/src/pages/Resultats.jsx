import Layout from "../components/Layout/index";
import styled from "styled-components";
import device from "../utils/style/devices";
import axios from "axios";
import React from "react";

const Container = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    width: 85%;
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    z-index: -99;
    @media ${device.tablet} {
        margin: 0 auto;
        margin-top: 80px;
        height: calc(80vh - 80px);
        width: 75%;
    }
    @media ${device.laptopL} {
        margin: 0 auto;
        margin-top: 95px;
        height: calc(80vh - 95px);
        width: 75%;
    }
`;

const Result = styled.p`
    font-size: 1rem;
    padding: 0.25rem;
    @media ${device.laptopL} {
        font-size: 1.2rem;
        padding: 0.5rem;
    }
`;

const Resultats = () => {
    const [list, setList] = React.useState(null);
    React.useEffect(() => {
        axios.get("/api/applicants").then((response) => {
            setList(response.data);
        });
    }, []);
    console.log(list);

    return (
        <Layout>
            <Container>
                {list !== null &&
                    list.map((candidat, index) => {
                        return (
                            <Result key={index}>
                                {index + 1} - {candidat.name}
                            </Result>
                        );
                    })}
            </Container>
        </Layout>
    );
};

export default Resultats;
