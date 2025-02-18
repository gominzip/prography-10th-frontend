import { Box } from '@/components';

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <Box className="text-center font-bold text-3xl">
      <h1>{title}</h1>
    </Box>
  );
}

export default Header;
