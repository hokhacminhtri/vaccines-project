import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import VaccineDetail from '../components/VaccineDetail';
import usePageTitle from '../hooks/usePageTitle';

export default function VaccineDetailPage() {
  usePageTitle('Chi tiết vaccine');
  const { vaccineId = '' } = useParams();

  return (
    <Container sx={{ py: 4 }}>
      <VaccineDetail />
    </Container>
  );
}
