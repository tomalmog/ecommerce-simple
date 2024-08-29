"use server";

import { navigate } from "@/actions/actions";
import { CardGrid } from "@/components/CardGrid";
import NextPageButton from "@/components/NextPageButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IParams {
  pageNumber: number;
}

export default async function Home({ params }: { params: IParams }) {
  const pageNumber = params.pageNumber;

  return (
    <>
      <CardGrid takeAmount={12} skipAmount={12 * pageNumber} />
      <div className="flex justify-center w-full">
        <NextPageButton
          buttonText={"<<<"}
          currentPage={pageNumber}
          pageChange={-1}
        />
        <NextPageButton
          buttonText={">>>"}
          currentPage={pageNumber}
          pageChange={1}
        />
      </div>
    </>
  );
}
