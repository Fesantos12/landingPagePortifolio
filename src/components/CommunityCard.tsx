interface CommunityCardProps {
  icon: string;
  h3Text: string;
  h5Text: string;
  altText: string;
}
export const CommunityCard = ({
  icon,
  h3Text,
  h5Text,
  altText,
}: CommunityCardProps) => {
  return (
    <div className="w-72 h-64 rounded-lg shadow-[0px_2px_4px_0px_rgba(171,190,209,0.4)] flex flex-col justify-center items-center gap-2">
      <img src={icon} alt={altText} />
      <h3 className="text-2xl font-bold text-center leading-9 text-neutral-Dgray">
        {h3Text}
      </h3>
      <h5 className="text-sm font-regular leading-5 text-center text-neutral-gray">
        {h5Text}
      </h5>
    </div>
  );
};
