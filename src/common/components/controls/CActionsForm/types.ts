export interface ICActionsFormProps {
  onCancel?: () => void;
  onSubmit?: () => void;
  isSubmitting?: boolean;
  isDirty?: boolean;
  isValid?: boolean;
}
