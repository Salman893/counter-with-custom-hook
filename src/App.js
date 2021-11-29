import React, { Fragment } from "react"
import BackwardCounter from "./components/BackwardCounter"
import ForwardCounter from "./components/ForwardCounter"

const App = props => {
  return (
      <Fragment>
        <ForwardCounter />
        <BackwardCounter />
      </Fragment>
    )
}

export default App;