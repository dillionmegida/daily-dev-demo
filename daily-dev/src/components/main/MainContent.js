import styled from "styled-components"
import { DEMO_DATA } from "../../constants"
import ContentCard from "./ContentCard"

const Main = styled.main`
  padding-top: calc(40px + var(--header-size));
  width: 100%;

  .content {
    max-width: 1000px;
    margin: 0 auto;
  }

  h1 {
    font-size: 18px;
    color: white;
  }

  .cards {
    margin-top: 30px;
    grid-gap: 25px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

export default function MainContent() {
  return (
    <Main>
      <div className="content">
        <h1>My feed</h1>
        <div className="cards">
          {DEMO_DATA.map((d) => {
            return (
              <ContentCard
                key={d.name}
                image={d.image}
                logo={d.logo}
                title={d.name}
                reactions={d.reactions}
                date={d.date}
                readTime={d.readTime}
                sponsored={d.sponsored}
              />
            )
          })}
        </div>
      </div>
    </Main>
  )
}
