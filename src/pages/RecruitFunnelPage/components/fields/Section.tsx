import { Box } from '@/components';

interface SectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function Section({ title, description, children }: SectionProps) {
  return (
    <section>
      <Box>
        <h2 className="mt-4 text-xl font-semibold text-gray-800">{title}</h2>

        <hr className="border-t-2 border-blue-500 my-4" />

        <p className="mb-7 text-sm text-gray-500">{description}</p>

        <div className="space-y-5">{children}</div>
      </Box>
    </section>
  );
}

export default Section;
