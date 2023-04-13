import { useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getEventById } from '@/apis/events.api';
import { MEventForm } from '@/modules/homepage/components';

const UpdateEventPage = () => {
  //#region Data
  const { id } = useParams();
  const [params] = useSearchParams();

  const language_id = params.get('language_id');
  const _language_id = Number(language_id) || 1;

  const { data } = useQuery({
    queryKey: ['event-detail', id, _language_id],
    queryFn: () => getEventById(id as string, _language_id),
  });
  //#endregion

  //#region Event

  //#endregion

  //#region Render
  return (
    <div>
      <MEventForm data={data?.data?.data} />
    </div>
  );
  //#endregion
};

export default UpdateEventPage;
