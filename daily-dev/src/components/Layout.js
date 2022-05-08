import styled from "styled-components"
import Header from "./Header"

const Container = styled.div`
  background-color: var(--main-color);
  width: 100%;
  min-height: 100vh;
`

export default function Layout() {
  return (
    <Container>
      <Header />
    </Container>
  )
}
