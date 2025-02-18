import { Box, Button } from '@/components';
import { HomeContent } from '@/pages/HomePage/components';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <Box className="flex flex-col items-center justify-center h-full py-10">
      <HomeContent />
      <Button
        text="지원하기"
        onClick={() => {
          navigate('/recruit-form');
        }}
        className="font-medium text-[18px] py-3 px-10 rounded-md"
      />
    </Box>
  );
}

export default HomePage;
