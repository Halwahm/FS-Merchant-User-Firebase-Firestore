import { FC, useContext } from "react";
import { Deal } from "@/lib/types/deal";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { handleEnroll } from "@/lib/services/enroll";
import { handleDiscontinue } from "@/lib/services/discontinue";
import { UpdateDealContext } from "@/app/dashboard/context";
import DealDate from "./DealDate";

interface DealCardProps {
  deal: Deal;
  onShowNotification: (message: string) => void;
  onDeleteDeal: (dealId: string) => void;
  isMerchant: boolean;
}

const DealCard: FC<DealCardProps> = ({
  deal,
  onShowNotification,
  onDeleteDeal,
  isMerchant,
}) => {
  const { selectDeal } = useContext(UpdateDealContext);

  return (
    <div className="border rounded p-4 mb-4 bg-white shadow-md w-full max-w-md">
      <h3 className="text-xl font-bold mb-2">{deal?.title || "EMPTY"}</h3>
      <p className="text-gray-700 mb-2">
        Description: {deal?.description || "EMPTY"}
      </p>
      <p className="text-gray-600 mb-2">Status: {deal?.status || "EMPTY"}</p>
      <DealDate date={deal.date} />
      <div className="flex justify-between">
        <PrimaryButton
          label="Enroll"
          onClick={() => handleEnroll(deal, onShowNotification)}
        />
        {isMerchant && (
          <>
            <PrimaryButton
              label="Edit"
              onClick={() =>
                selectDeal({
                  id: deal.id,
                  initialValues: {
                    id: deal.id,
                    title: deal.title,
                    description: deal.description,
                  },
                })
              }
            />
            <SecondaryButton
              label="Discontinue"
              onClick={() =>
                handleDiscontinue(deal.id, onShowNotification, onDeleteDeal)
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default DealCard;
