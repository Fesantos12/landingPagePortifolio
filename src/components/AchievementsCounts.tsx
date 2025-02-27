interface AchievementsCountsProps {
  icon: string;
  numberCount: string;
  nameCount: string;
  altCount: string;
}
export const AchievementsCounts = ({
  icon,
  nameCount,
  numberCount,
  altCount,
}: AchievementsCountsProps) => {
  return (
    <div className="w-64 h-16 flex items-center justify-start gap-4">
      <img src={icon} alt={altCount} />
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold leading-9 text-neutral-Dgray">
          {numberCount}
        </h2>
        <h5 className="font-normal leading-6 text-neutral-gray">{nameCount}</h5>
      </div>
    </div>
  );
};
