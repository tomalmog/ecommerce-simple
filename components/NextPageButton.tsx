"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface Props {
  currentPage: number;
  pageChange: number;
  buttonText: string;
}

const NextPageButton = ({ currentPage, pageChange, buttonText }: Props) => {
  const { push } = useRouter();

  const nextPage = () => {
    if (+currentPage + pageChange >= 0) {
      push(`/inventory/${+currentPage + pageChange}`);
    }
  };

  return (
    <>
      <Button size="lg" className="m-4" onClick={nextPage}>
        {buttonText}
      </Button>
    </>
  );
};

export default NextPageButton;
