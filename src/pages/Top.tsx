import MainPage from "../components/MainPage";
import Sidebar from "../components/Sidebar";

const Links = () => {
    return (
        <>
            <Sidebar />
            <MainPage />
            <h1>Top{process.env.PUBLIC_URL}</h1>
        </>
    );
};

export default Links;
