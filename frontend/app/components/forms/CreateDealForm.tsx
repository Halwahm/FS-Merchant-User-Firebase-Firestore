import AbstractForm from "@/app/components/AbstractForm";
import { dealValidationSchema } from "@/lib/validation/dealFormValidation";
import { createDeal } from "@/lib/services/dealService";
import { FieldConfig } from "@/lib/types/forms";
import { ICreateDealFormData } from "../DealForm/types";
import { FormikHelpers } from "formik";
import { Deal } from "@/lib/types/deal";

const dealFields: FieldConfig<ICreateDealFormData>[] = [
  { name: "title", label: "Title", type: "text" },
  { name: "description", label: "Description", type: "text-area" },
];

const CreateDealForm: React.FC<{ onShowNotification: (message: string) => void, onDealCreated: (deal: Deal) => void }> = ({ onShowNotification, onDealCreated }) => {
  const handleCreateDeal = async (values: ICreateDealFormData, actions: FormikHelpers<ICreateDealFormData>) => {
    try {
      const newDeal = await createDeal(values);
      onDealCreated(newDeal);
      onShowNotification("Deal successfully created!");
      actions.resetForm();
    } catch (error) {
      console.error("Error creating deal:", error);
      actions.setStatus({ generalError: "Failed to create the deal" });
    }
  };
  return (
    <AbstractForm<ICreateDealFormData>
      initialValues={{ title: "", description: "" }}
      validationSchema={dealValidationSchema}
      onSubmit={handleCreateDeal}
      fields={dealFields}
      submitButtonText="Create"
    />
  );
};

export default CreateDealForm;
