import { deleteDeal } from "@/lib/services/dealService";

export const handleDiscontinue = async (
    dealId: string,
    onShowNotification: (message: string) => void,
    onDeleteDeal: (dealId: string) => void
) => {
    try {
        await deleteDeal(dealId);
        onShowNotification("Deal discontinued successfully.");
        onDeleteDeal(dealId);
    } catch (error) {
        console.error("Failed to discontinue the deal:", error);
        onShowNotification("Failed to discontinue the deal. Please try again.");
    }
};
