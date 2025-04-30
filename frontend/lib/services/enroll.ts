import { enrollInDealWithEmail } from "@/lib/services/dealService";
import { auth } from "@/lib/firebase";

export const handleEnroll = async (
    deal: { id: string; title: string; description: string },
    onShowNotification: (message: string) => void
) => {
    try {
        const user = auth.currentUser;

        if (!user) {
            onShowNotification("You need to be logged in to enroll in a deal.");
            return;
        }

        const email = user.email;

        if (!email) {
            onShowNotification("Failed to retrieve user email. Please try again.");
            return;
        }

        await enrollInDealWithEmail(email, deal.id, deal.title, deal.description);
        onShowNotification("Successfully enrolled in the deal!");
    } catch (error) {
        console.error("Failed to enroll in the deal:", error);
        onShowNotification("Failed to enroll in the deal. Please try again.");
    }
};
