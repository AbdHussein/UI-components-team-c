import { LogoImage } from "./styles";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router";

const Index = (  ) => {
  const navigate= useNavigate();

  return <LogoImage
            src={logo}
            alt="Logo"
            title="M-UI"
            onClick={()=> navigate('/')}
        />;
};

export default Index;
