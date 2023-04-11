import { forwardRef, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { PhotoCamera, Upload } from '@mui/icons-material';
import { Box, Button, FormHelperText, Typography } from '@mui/material';

import { uploadFile } from '@/apis/files.api';
import defaultImage from '@/assets/images/default-image.png';

import { ICImageUploadProps } from './types';

const MAX_FILE_SIZE = 5242880;
const checkImageFile = (file: File) => {
  if (file) {
    if (file.size > MAX_FILE_SIZE) {
      toast.error('Dung lượng file ảnh tối đa 5Mb!');
      return false;
    } else if (file.type.split('/')[0] !== 'image') {
      toast.error('Định dạng file không hợp lệ (image/*)!');
      return false;
    }
    return true;
  }
};

export const CImageUpload = forwardRef(
  ({
    value,
    onChange,
    error,
    helperText,
    aspectRatio,
    isSquare,
    ...props
  }: ICImageUploadProps) => {
    //#region Data
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [isImgError, setIsImgError] = useState<boolean>(false);
    //#endregion

    //#region Event
    const onDragEnter = () => {
      wrapperRef.current?.classList?.add('dragover');
    };

    const onDragLeave = () => {
      wrapperRef.current?.classList.remove('dragover');
    };

    const onDragOver = (e: React.DragEvent) => {
      e.stopPropagation();
      e.preventDefault();
    };

    const onFileInputChange = async (
      e: React.ChangeEvent<HTMLInputElement>,
    ) => {
      const file = e.target.files?.[0];
      if (file) {
        const isValid = checkImageFile(file);
        if (isValid) {
          if (inputRef.current) {
            inputRef.current.value = '';
          }

          try {
            const res = await uploadFile(file);

            onChange && onChange(res?.data?.id);
          } catch (error: any) {
            toast.error(
              error?.response?.data?.message || 'Upload file không thành công!',
            );
          }
        }
      }
    };

    const onDrop = async (e: React.DragEvent) => {
      e.stopPropagation();
      e.preventDefault();
      wrapperRef.current?.classList.remove('dragover');
      const file = e?.dataTransfer?.files[0];
      const isValid = checkImageFile(file);
      if (isValid) {
        if (inputRef.current) {
          inputRef.current.value = '';
        }

        try {
          const res = await uploadFile(file);

          onChange && onChange(res?.data?.id);
        } catch (error: any) {
          toast.error(
            error?.response?.data?.message || 'Upload file không thành công!',
          );
        }
      }
    };

    const onImageError = () => setIsImgError(true);
    //#endregion

    //#region Render
    return value ? (
      <Box position="relative" display="flex" flexDirection="column">
        <Box>
          <Button
            startIcon={<PhotoCamera />}
            sx={{ mb: 1 }}
            color="info"
            component="label"
          >
            Thay đổi
            <input
              type="file"
              ref={inputRef}
              onChange={onFileInputChange}
              hidden
              accept="image/*"
            />
          </Button>
        </Box>

        <Box maxWidth={{ xs: 330, sm: 400, md: 600, lg: 640, xl: 720 }}>
          <img
            src={isImgError ? defaultImage : value.url}
            alt=""
            style={{ maxWidth: '100%', height: 'auto' }}
            onError={onImageError}
          />
        </Box>
      </Box>
    ) : (
      <>
        <Box
          className="c-upload"
          margin="auto"
          position="relative"
          width={isSquare ? 270 : '100%'}
          minWidth={250}
          height={isSquare ? 270 : 150}
          borderRadius={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
          component="label"
          sx={{ backgroundColor: '#eeeeee' }}
        >
          <Box
            component="label"
            ref={wrapperRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDrop={onDrop}
            className="overlay"
            position="absolute"
            borderRadius="inherit"
            border="3px dashed #a1a0a0"
            borderColor={error ? 'red' : '#a1a0a0'}
            sx={{
              inset: 0,
              backgroundColor: 'transparent',
              cursor: 'pointer',
              '&.dragover': {
                border: '3px dashed #2188FD',
              },
            }}
          >
            {
              <input
                type="file"
                ref={inputRef}
                onChange={onFileInputChange}
                hidden
                accept="image/*"
              />
            }
          </Box>
          <Box textAlign="center" fontWeight={600} p={1.1} sx={{ opacity: 1 }}>
            <Upload sx={{ fontSize: '3rem' }} color="primary" />
            {aspectRatio && (
              <Typography>{`Tỉ lệ ${aspectRatio.split('/')[0]}:${
                aspectRatio.split('/')[1]
              }`}</Typography>
            )}
            <Typography>
              Chọn file hoặc kéo thả vào đây
              <br /> (Tối đa 5MB)
            </Typography>
          </Box>
        </Box>
        {helperText && (
          <FormHelperText error={error}>{helperText}</FormHelperText>
        )}
      </>
    );
    //#endregion
  },
);
