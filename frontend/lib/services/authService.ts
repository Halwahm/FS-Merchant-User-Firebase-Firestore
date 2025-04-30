import axiosInstance from "@/lib/utils/axiosConfig";
import { AUTH_ENDPOINTS } from "@/lib/constants/api";
import { SignUpData, SignUpResponse } from "@/lib/types/auth";
import { AxiosError } from "axios";

export const signUp = async (data: SignUpData): Promise<SignUpResponse> => {
  try {
    const response = await axiosInstance.post<SignUpResponse>(AUTH_ENDPOINTS.SIGN_UP, data);
    const { uid } = response.data;

    if (!uid) {
      throw new Error("Token is undefined. Please verify server response.");
    }

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};
