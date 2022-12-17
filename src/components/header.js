import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      backgroundColor: `#646db5`
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `3rem`,
        textDecoration: `none`,
        color: `#e6dfd1`
      }}
    >
      {siteTitle}
    </Link>
  </header>
)

export default Header
