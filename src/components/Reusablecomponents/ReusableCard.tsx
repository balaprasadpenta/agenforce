interface CardProps {
  heading: React.ReactNode;
  subheading: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const ReusableCard = ({
  heading,
  subheading,
  children,
  className = "",
}: CardProps) => {
  return (
    <div className="flex flex-col gap-y-2 border-2 border-l-0 max-w-full pt-6 pl-6">
      <h1 className="text-lg font-bold">{heading}</h1>
      <p>{subheading}</p>

      {/* individual content  */}
      <div className="pt-6">{children}</div>
    </div>
  );
};

export default ReusableCard;
