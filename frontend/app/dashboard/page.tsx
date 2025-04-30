"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DealList from "@/app/components/deal/DealList";
import Notification from "@/app/components/Notification";
import CreateDealForm from "@/app/components/forms/CreateDealForm";
import UpdateDealForm from "@/app/components/forms/UpdateDealForm";
import useAuth from "@/lib/hooks/useAuth";
import { getDeals } from "@/lib/services/dealService";
import { Deal } from "@/lib/types/deal";
import { UpdateDealContext } from "./context";
import { ICurrentDeal } from "./types";

const DashboardPage: React.FC = () => {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");
  const [currentDeal, setCurrentDeal] = useState<ICurrentDeal>({
    id: "",
    initialValues: {
      title: "",
      description: "",
    },
  });

  const isMerchant = useAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const fetchedDeals = await getDeals();
        setDeals(fetchedDeals);
      } catch (error) {
        console.error("Error fetching deal:", error); // Log the error to console
        setNotificationMessage("Failed to fetch deals. Please try again later.");
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      }
    };

    fetchDeals();
  }, [router]);

  const handleDeleteDeal = (dealId: string) => {
    setDeals(deals.filter((deal) => deal.id !== dealId));
  };

  const handleShowNotification = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <UpdateDealContext.Provider value={{ currentDeal, selectDeal: setCurrentDeal }}>
      <div className="flex min-h-screen p-4 bg-gray-100">
        {isMerchant && (
          <div className="relative [flex:_1_1_33.3%]">
            <div className="sticky top-0 left-0 w-full">
              <CreateDealForm
                onDealCreated={(newDeal) => setDeals((prevDeals) => [...prevDeals, newDeal])}
                onShowNotification={handleShowNotification}
              />
            </div>
          </div>
        )}
        <div className="flex [flex:_1_1_33.3%] flex-col items-center justify-center">
          {showNotification && <Notification message={notificationMessage} />}
          <h1 className="text-3xl font-bold mb-8">Available Deals</h1>
          <DealList
            deals={deals}
            onShowNotification={handleShowNotification}
            onDeleteDeal={handleDeleteDeal}
            isMerchant={isMerchant}
          />
        </div>
        {isMerchant && (
          <div className="relative [flex:_1_1_33.3%]">
            <div className="sticky top-0 right-0 w-full">
              <UpdateDealForm
                onDealUpdated={(updatedDeal) =>
                  setDeals((prevDeals) =>
                    prevDeals.map((deal) =>
                      deal.id === updatedDeal.id ? updatedDeal : deal
                    )
                  )
                }
                onShowNotification={handleShowNotification}
              />
            </div>
          </div>
        )}
      </div>
    </UpdateDealContext.Provider>
  );
};

export default DashboardPage;

