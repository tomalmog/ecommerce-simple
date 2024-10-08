import React from "react";

interface Props {
  title: string;
}

const Logo = ({ title }: Props) => {
  return (
    <>
      <h1 className="text-2xl font-extrabold text-white">{title}</h1>
    </>
  );
};

export default Logo;
