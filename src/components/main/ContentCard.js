import styled from "styled-components"
import ArrowTop from "../icons/ArrowTop"
import Bookmark from "../icons/Bookmark"
import Comment from "../icons/Comment"

const Card = styled.article`
  border: 1px solid #2d323c;
  border-radius: 10px;
  height: 420px;
  width: 100%;
  padding: 12px 7px;
  background-color: #1d1f25;

  .card {
    &__title {
      height: 190px;
      padding: 0 15px;
      color: white;
      font-size: 20px;
      line-height: 1.5;
      display: flex;
      flex-direction: column;

      &__logo {
        width: 25px;
        margin-bottom: 20px;
        height: 25px;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &__date {
        margin-top: auto;
        color: #a1abc6;
        font-size: 14px;
      }
    }

    &__image {
      margin-top: 5px;
      height: 150px;
      border-radius: 10px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__reactions,
    &__sponsor {
      height: 70px;
    }

    &__reactions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      color: #a8b3cf;
      font-size: 15px;

      &__reaction {
        display: flex;
        align-items: center;
        font-weight: bold;

        .reaction-count {
          margin-left: 10px;
        }
      }
    }
  }
`

const SponsoredCard = styled(Card)`
  padding-top: 12px;
  .card {
    &__sponsor {
      color: #757d92;
      display: flex;
      align-items: center;
      padding: 0 15px;
      font-size: 14px;
    }
  }
`

export default function ContentCard({
  sponsored = {},
  title,
  image,
  logo,
  date,
  readTime,
  reactions,
}) {
  if (sponsored.by) {
    return (
      <SponsoredCard>
        <div className="card__title">
          <span>{title}</span>
        </div>

        <div className="card__image">
          <img src={image} alt="" />
        </div>
        <div className="card__sponsor">
          <span>Promoted by {sponsored.by}</span>
        </div>
      </SponsoredCard>
    )
  }

  const reactionList = [
    {
      Icon: ArrowTop,
      label: reactions.likes > 0 ? reactions.likes : "",
    },
    {
      Icon: Comment,
      label: reactions.comments > 0 ? reactions.comments : "",
    },
    {
      Icon: Bookmark,
      label: reactions.bookmarks > 0 ? reactions.bookmarks : "",
    },
  ]

  return (
    <Card>
      <div className="card__title">
        <div className="card__title__logo">
          <img src={logo} alt="" />
        </div>
        <span>{title}</span>
        <div className="card__title__date">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
      </div>
      <div className="card__image">
        <img src={image} alt="" />
      </div>
      <div className="card__reactions">
        {reactionList.map((reaction) => (
          <div className="card__reactions__reaction" key={reaction.Icon}>
            <reaction.Icon color="#a8b3cf" size={20} />
            <span className="reaction-count">{reaction.label}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
