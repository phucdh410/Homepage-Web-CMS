import { useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getBannerById } from '@/apis/banners.api';
import { MBannerForm } from '@/modules/homepage/components';

const UpdateBannerPage = () => {
  //#region Data
  const { id } = useParams();
  const [params] = useSearchParams();

  const language_id = params.get('language_id');
  const _language_id = Number(language_id) || 1;

  const { data } = useQuery({
    queryKey: ['banner-detail', id, _language_id],
    queryFn: () => getBannerById(id as string, _language_id),
  });
  //#endregion

  //#region Event

  //#endregion

  //#region Render
  return (
    <div>
      <MBannerForm data={data?.data?.data} language_id={_language_id} />
    </div>
  );
  //#endregion
};

export default UpdateBannerPage;