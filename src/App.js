import HeaderContainer from "./Components/HeaderContainer/HeaderContainer";
import MainContainer from "./Components/MainContainer/MainContainer";
import FooterContainer from "./Components/FooterContainer/FooterContainer";

const App = (props) => {
  // debugger;
  return (
      <>
      <HeaderContainer headerData={props.state.headerData}/>
      <MainContainer mainData={props.state.mainData}/>
      <FooterContainer/>
    </>
      );
}

export default App;
