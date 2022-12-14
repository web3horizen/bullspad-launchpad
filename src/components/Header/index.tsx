import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./index.scss"
import { classNames } from "@knownout/lib"

import { BULLSPAD_LOGO } from "../../theme/sources"
import { Button, ProfileButton, SearchBar, SupportMenu } from "../index"
import useHeaderFixed from "../../hooks/useHeaderFixed"

const Header = () => {
  const [loggedIn, isLoggedIn] = useState(false)
  const [walletConnected, setWalletConnected] = useState(false)
  const { scrollUp, animationOn } = useHeaderFixed()


  return (
    <div
      className={classNames(
        "header",
        scrollUp && "fixed",
        animationOn && "animated"
      )}
    >
      <div
        className="left">
        <NavLink to={"/"}>
          <img
            src={BULLSPAD_LOGO}
            alt=""
            className="logo"
          />
        </NavLink>
        <SearchBar />
        <SupportMenu />
      </div>
      <div
        className={classNames(
          "right",
          !walletConnected && "wallet-disconnected",
        )}
      >
        {loggedIn ? (
          <>
            <ProfileButton />
            {!walletConnected && (
              <Button
                size="medium"
                color="green"
                onClick={() => {}}
              >
                Connect wallet
              </Button>
            )}
          </>
        ) : (
          <>
            <Button
              size="medium"
              color="black-n-green"
              onClick={() => {}}
            >
              Log In
            </Button>
            <Button
              size="medium"
              color="black-n-green"
              onClick={() => {}}
            >
              Sign Up
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
