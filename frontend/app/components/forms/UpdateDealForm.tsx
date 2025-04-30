import React, { useContext } from "react";
import { FormikHelpers } from "formik";
import { Deal } from "@/lib/types/deal";
import AbstractForm from "@/app/components/AbstractForm";
import { updateDeal } from "@/lib/services/dealService";
import { dealUpdateValidationSchema } from "@/lib/validation/dealFormValidation";
import { UpdateDealContext } from "@/app/dashboard/context";
import { dealFields } from "@/lib/constants/dealFormFields";
import {IDeal} from "@/app/components/DealForm/types";

const UpdateDealForm: React.FC<{ onDealUpdated: (deal: Deal) => void, onShowNotification: (message: string) => void }> = ({ onDealUpdated, onShowNotification }) => {
  const { currentDeal } = useContext(UpdateDealContext);

  const handleUpdateDeal = async (
    values: IDeal,
    actions: FormikHelpers<IDeal>
  ): Promise<void> => {
    try {
      const updatedDeal = await updateDeal({ id: currentDeal.id, ...values });
      onDealUpdated(updatedDeal);
      actions.resetForm();
      onShowNotification("Deal successfully updated!");
    } catch (error) {
      console.error("Error updating deal:", error);
      actions.setStatus({ generalError: "Failed to update the deal" });
      onShowNotification("Failed to update the deal. Please try again.");
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <AbstractForm
      key={currentDeal.id}
      initialValues={currentDeal.initialValues}
      validationSchema={dealUpdateValidationSchema}
      onSubmit={handleUpdateDeal}
      fields={dealFields}
      submitButtonText="Update"
    />
  );
};

export default UpdateDealForm;
