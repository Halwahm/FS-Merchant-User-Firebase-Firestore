import React, { FC } from "react";
import { Deal } from "@/lib/types/deal";

interface DealDateProps {
  date: Deal["date"];
}

const DealDate: FC<DealDateProps> = ({ date }) => {
  let dealDate: string;

  if (date instanceof Date) {
    dealDate = date.toLocaleDateString();
  } else if (date && typeof date === "object" && "_seconds" in date) {
    const { _seconds } = date as { _seconds: number; _nanoseconds: number };
    dealDate = new Date(_seconds * 1000).toLocaleDateString();
  } else {
    dealDate = "Invalid Date";
  }

  return <p className="text-gray-600 mb-2">Date: {dealDate}</p>;
};

export default DealDate;
