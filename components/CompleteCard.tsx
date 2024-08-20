import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
  key?: string;
}

const CompleteCard = ({
  title = "Item",
  description = "Item Information",
  content = "Card Content",
  footer = "Card Footer",
  key,
}: Props) => {
  return (
    <>
      <Card id={key}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent>
          <p>{content}</p>
        </CardContent>

        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default CompleteCard;
