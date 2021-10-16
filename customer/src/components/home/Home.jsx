import Navbar from "../Navbar";
import Category from "../Category";
import Menu from "../Menu";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background-color:white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Category />
      <Menu />
    </Container>
  );
};
export default Home;
