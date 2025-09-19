import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledDiv = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledDiv>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Hello World!</Heading>
            <div>
              <Heading as="h2">Hello World!</Heading>
              <Heading as="h3">Hello World!</Heading>
              <Button
                variation="primary"
                size="small"
              >
                Farah
              </Button>

              <Button
                variation="secondary"
                size="medium"
              >
                Farah
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">form</Heading>
            <form>
              <Input type="number" />
              <Input type="number" />
            </form>
          </Row>
        </Row>
      </StyledDiv>
    </>
  );
}

export default App;
