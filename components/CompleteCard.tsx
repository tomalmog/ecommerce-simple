"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface Props {
  title: string;
  description?: string;
  content?: string;
  footer?: string;
  id: string;
}

const CompleteCard = ({
  title,
  description = "Item Information",
  content = "Card Content",
  footer = "Card Footer",
  id,
}: Props) => {
  const addToCart = () => {
    console.log("add to cart");

    fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ id: id }),
    });
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent>
          <p>{content}</p>
        </CardContent>

        <CardFooter>
          <div className="flex items-center justify-between w-full">
            <p className=" ">{footer}</p>

            <Button size="xs" onClick={addToCart}>
              Add To Cart
            </Button>

            {/* <SignedOut>
              <p className="">---</p>
            </SignedOut>
            <SignedIn>
            </SignedIn> */}
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default CompleteCard;
