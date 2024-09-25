const SlideHeader = ({
  title,
  heading,
}: {
  title: string;
  heading: string;
}) => {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <p className="text-primary-orange text-xs uppercase ">{title}</p>
      <h1 className="text-5xl font-bold white-heading">{heading}</h1>
      <hr className="border-[#363643] my-4" />
    </div>
  );
};

export default SlideHeader;
