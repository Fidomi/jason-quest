import { CenterContainer } from "../components/Footer/Footer.style";
import Layout from "../components/Layout/index";

const Error = () => {
    return (
        <Layout>
            <h1
                style={{
                    marginTop: "10rem",
                    textAlign: "center",
                }}>
                Oups! La page demandée n'existe pas...
            </h1>
        </Layout>
    );
};

export default Error;
