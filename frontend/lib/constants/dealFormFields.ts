import { FieldConfig } from "../types/forms";

export const dealInitialValues = {
    title: "",
    description: "",
    fields: [
        { name: "title", label: "Title", type: "text" },
        { name: "description", label: "Description", type: "text-area" },
    ],
};

export const dealFields: FieldConfig<{ title: string; description: string }>[] = [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "text-area" },
];
