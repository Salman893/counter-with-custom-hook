import React from "react";
import useCounter from "../hooks/use-counter"
import Card from "./Card";

const ForwardCounter = props => {
   const counter = useCounter(true);

    return (
        <Card>{counter}</Card>
    )
}

export default ForwardCounter;