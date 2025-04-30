
import axiosInstance from "@/lib/utils/axiosConfig";
import { DEALS_ENDPOINTS } from "@/lib/constants/api";
import { Deal } from "@/lib/types/deal";
import { IDeal } from "@/app/components/DealForm/types";

export const getDeals = async (): Promise<Deal[]> => {
  try {
    const response = await axiosInstance.get<Deal[]>(DEALS_ENDPOINTS.DEALS);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch deals");
  }
};

export const enrollInDealWithEmail = async (
  email: string,
  dealId: string,
  dealTitle: string,
  dealDescription: string
): Promise<void> => {
  await axiosInstance.post(`${DEALS_ENDPOINTS.ENROLL}`, {
    email,
    dealId,
    dealTitle,
    dealDescription,
  });
};

export const createDeal = async (dealData: IDeal): Promise<Deal> => {
  try {
    const response = await axiosInstance.post(`${DEALS_ENDPOINTS.CREATE}`, dealData);
    return response.data;
  } catch (error) {
    console.error("Error creating deal:", error);
    throw new Error("Failed to create deal");
  }
};

export const updateDeal = async (dealData: IDeal): Promise<Deal> => {
  try {
    const response = await axiosInstance.put(`${DEALS_ENDPOINTS.UPDATE}?id=${dealData.id}`, dealData);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to enroll in deal");
  }
};

export const deleteDeal = async (dealId: string): Promise<void> => {
  try {
    await axiosInstance.delete(`${DEALS_ENDPOINTS.DELETE}/${dealId}`);
  } catch (error) {
    console.error('Error deleting deal:', error);
    throw new Error('Failed to delete deal');
  }
};
