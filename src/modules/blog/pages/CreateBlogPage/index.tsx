import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Paper } from '@mui/material';

import { CActionsForm } from '@/controls/';
import { CDetailPageWrapper } from '@/others/';

import { MBlogForm, MBlogFormTabs } from '../../components';
import { blogResolver, defaultValuesBlog } from '../../form';

const CreateBlogPage = () => {
  //#region Data
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    trigger,
    formState: { isSubmitting, isDirty },
  } = useForm({
    mode: 'all',
    resolver: blogResolver,
    defaultValues: defaultValuesBlog,
  });
  //#endregion

  //#region Event
  const onCancel = () => {
    reset();
    navigate(-1);
  };

  const onSubmit = () => {
    handleSubmit(async (values) => {
      try {
        console.log(values);
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Thêm mới bài viết không thành công!',
        );
      }
    });
  };
  //#endregion

  //#region Render
  return (
    <CDetailPageWrapper title="Thêm mới bài viết">
      <button
        type="button"
        onClick={() => {
          console.log(getValues());
        }}
      >
        AASAS
      </button>
      <form>
        <MBlogFormTabs control={control} />

        <Paper variant="wrapper">
          <MBlogForm control={control} trigger={trigger} />
          <CActionsForm
            onCancel={onCancel}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
            isDirty={isDirty}
          />
        </Paper>
      </form>
    </CDetailPageWrapper>
  );
  //#endregion
};

export default CreateBlogPage;
