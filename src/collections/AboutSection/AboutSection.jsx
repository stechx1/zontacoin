export const AboutSection = ({ heading, para }) => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-start'>
      <h2 className='text-xl'>{heading}</h2>
      <p className='text-xl max-w-[600px]'>{para}</p>
    </div>
  );
};
