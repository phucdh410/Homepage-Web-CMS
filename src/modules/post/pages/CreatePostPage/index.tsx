import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Paper, Typography } from '@mui/material';

import { createBlog, createOrg, createRef } from '@/apis/posts.api';
import { CActionsForm } from '@/controls/';
import {
  ICreateBlogParams,
  ICreateOrgParams,
  ICreateRefParams,
} from '@/types/posts';

import { MPostForm } from '../../components';
import { defaultValuesPost, postResolver } from '../../form';

const CreatePostPage = () => {
  //#region Data
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm<ICreateBlogParams | ICreateOrgParams | ICreateRefParams>({
    mode: 'all',
    resolver: postResolver,
    defaultValues: defaultValuesPost,
  });

  const navigate = useNavigate();
  //#endregion

  //#region Event
  const onCancel = () => {
    reset();

    navigate(-1);
  };

  const onSubmit = () => {
    handleSubmit(async (values) => {
      try {
        if (values.type === 1) await createBlog(values);
        else if (values.type === 2) createOrg(values);
        else if (values.type === 3) createRef(values);

        toast.success('Thêm mới nội dung thành công!');

        onCancel();
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            'Thêm mới nội dung không thành công!',
        );
      }
    })();
  };
  //#endregion

  //#region Render
  return (
    <>
      <Box mb={3}>
        <Typography variant="page-title">Thêm mới</Typography>
      </Box>

      <Paper variant="wrapper">
        <form>
          <MPostForm control={control} />

          <CActionsForm
            onCancel={onCancel}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
            isDirty={isDirty}
          />
        </form>
      </Paper>
    </>
  );
  //#endregion
};

export default CreatePostPage;
