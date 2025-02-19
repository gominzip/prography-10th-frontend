import { Box, Button } from '@/components';
import { useNavigate } from 'react-router-dom';

function CompleteStep() {
  const navigate = useNavigate();

  return (
    <Box className="text-center space-y-5 py-15">
      <p className=" font-semibold text-2xl">🎉</p>
      <p className=" font-semibold text-2xl">지원이 완료되었습니다!</p>

      <div className="text-sm text-gray-500">
        <p>프로그라피 10기에 지원해주셔서 감사합니다.</p>
        <p>서류 심사 결과는 입력하신 이메일로 안내드릴 예정입니다.</p>
      </div>

      <Button
        text="홈으로 돌아가기"
        onClick={() => {
          navigate('/');
        }}
        className="font-medium text-base py-2 px-5 mt-5 rounded-md"
      />
    </Box>
  );
}

export default CompleteStep;
