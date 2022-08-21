import React from "react";

interface Props {
  name: string
}
const Header: React.FC<Props> = ({name}) => {
  return <div>Header {name}</div>;
};

export default Header;
