import React from "react";
import VerticalCard from "./VerticalCard";
import HorizontalCard from "./HorizontalCard";
import NormalCard from "./NormalCard";

const CardType = (type, props) => {
  if (type === "1") return <VerticalCard {...props}/>;
  if (type === "2") return <HorizontalCard {...props}/>;
  if (type === "3") return <NormalCard {...props}/>;
};

export default function Card(props) {

  return <>{CardType(props.type, {...props})}</>;
}
