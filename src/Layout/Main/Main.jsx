import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";


const Main = () => {

    

    return (
        <div className="mx-auto   bg-[#FBFFE6]">
            <Header className="mb-10"></Header>
            <Outlet className="pt-10 "></Outlet>
        </div>
    );
};

export default Main;