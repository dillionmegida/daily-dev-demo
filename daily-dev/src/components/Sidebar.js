import styled from "styled-components"
import { Link } from "react-router-dom"
import Home from "./icons/Home"
import Filter from "./icons/Filter"
import Fire from "./icons/Fire"
import Comment from "./icons/Comment"
import ArrowTop from "./icons/ArrowTop"
import Search from "./icons/Search"
import Settings from "./icons/Settings"
import Eye from "./icons/Eye"
import Bookmark from "./icons/Bookmark"
import File from "./icons/File"
import Terminal from "./icons/Terminal"
import Feedback from "./icons/Feedback"
import UserInvite from "./icons/UserInvite"
import Stack from "./icons/Stack"

const Aside = styled.aside`
  padding-top: 40px;
  width: 250px;
  border-right: 1px solid #2d323c;
  height: calc(100vh - var(--header-size));
  position: sticky;
  top: var(--header-size);

  .link {
    align-items: center;
    padding: 5px 15px;
    text-decoration: none;
    color: #a7b2ce;

    &:hover,
    &.active {
      background-color: #2d323c;
      color: white;
    }

    &__label {
      margin-left: 10px;
      flex: 1;
    }

    .filter-btn {
      width: 14px;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    height: 100%;

    .footer {
      margin-top: auto;
    }
  }

  .section {
    margin-top: 10px;
    &__title {
      padding-left: 15px;
      font-size: 14px;
      font-weight: bold;
      color: #70788d;
    }

    ul {
      margin-top: 15px;
    }
  }

  .status {
    border: 1px solid white;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    align-items: center;
    margin: 25px 15px 10px;

    &__icon {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 15px;
      border: 1px solid white;
    }

    &__text {
      &__title {
        font-weight: bold;
        color: white;
      }

      &__next {
        font-size: 14px;
        color: #70788d;
        display: block;
        margin-top: 3px;
      }
    }
  }
`

const discoverLinks = [
  {
    Icon: Fire,
    label: "Popular",
  },
  {
    Icon: ArrowTop,
    label: "Most upvoted",
  },
  {
    Icon: Comment,
    label: "Best discussions",
  },
  {
    Icon: Search,
    label: "Search",
  },
]

const manageLinks = [
  {
    Icon: Bookmark,
    label: "Bookmarks",
  },
  {
    Icon: Eye,
    label: "Reading history",
  },
  {
    Icon: Settings,
    label: "Customize",
  },
]

const footerLinks = [
  {
    Icon: File,
    label: "Docs",
  },
  {
    Icon: Terminal,
    label: "Changelog",
  },
  {
    Icon: Feedback,
    label: "Feedback",
  },
  {
    Icon: UserInvite,
    label: "Invite people",
  },
]

export default function Sidebar() {
  return (
    <Aside>
      <nav>
        <Link className="link flex active" to="">
          <Home color="#fff" size={18} />
          <span className="link__label">My feed</span>
          <button className="filter-btn">
            <Filter color="rgba(255, 255, 255, 0.5)" size={14} />
          </button>
        </Link>

        <div className="section">
          <span className="section__title">Discover</span>
          <ul>
            {discoverLinks.map((link) => (
              <Link key={link.label} to="" className="flex link">
                <link.Icon color="#fff" size={18} />
                <span className="link__label">{link.label}</span>
              </Link>
            ))}
          </ul>
        </div>

        <div className="section">
          <span className="section__title">Manage</span>
          <ul>
            {manageLinks.map((link) => (
              <Link key={link.label} to="" className="flex link">
                <link.Icon color="#fff" size={18} />
                <span className="link__label">{link.label}</span>
              </Link>
            ))}
          </ul>
        </div>

        <div className="footer">
          <div className="section">
            <ul>
              {footerLinks.map((link) => (
                <Link key={link.label} to="" className="flex link">
                  <link.Icon color="#fff" size={18} />
                  <span className="link__label">{link.label}</span>
                </Link>
              ))}
            </ul>
          </div>

          <div className="status">
            <div className="status__icon center">
              <Stack color="#70788d" />
            </div>
            <div className="status__text">
              <span className="status__text__title">Silver</span>
              <span className="status__text__next">Next level: Gold</span>
            </div>
          </div>
        </div>
      </nav>
    </Aside>
  )
}
