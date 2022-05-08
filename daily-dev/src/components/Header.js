import styled from "styled-components"

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  border-bottom: 1px solid #2d323c;
  padding: 0 20px;

  .daily-dev-logo {
    width: 120px;

    img {
      width: 100%;
    }
  }

  .user {
    display: flex;
    align-items: center;
    --size: 40px;
    --radius: 10px;

    .points {
      width: var(--size);
      height: var(--size);
      color: white;
      background-color: #1d1f25;
      border-top-left-radius: var(--radius);
      border-bottom-left-radius: var(--radius);
      font-weight: bold;
      font-size: 18px;
    }

    &__image {
      width: var(--size);
      height: var(--size);
      border-radius: var(--radius);
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`

export default function Header() {
  return (
    <SHeader>
      <div className="daily-dev-logo">
        <img src="/logo.png" alt="Daily.dev logo" />
      </div>
      <div className="user flex">
        <span className="points center">50</span>
        <div className="user__image">
          <img
            src="https://dillionmegida.com/img/deee.jpg"
            alt="Dillion Megida's Avatar"
          />
        </div>
      </div>
    </SHeader>
  )
}
