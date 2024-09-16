import { data } from ".";

export const Frontend = () => {
  const frontData = data.frontend;
  return (
    <div className="flex flex-wrap gap-1">
      {frontData.map((front, index) => (
        <img
          src={`/front-skillset/${front}.svg`}
          title={front}
          key={index}
          className="w-8 h-8 md:w-11 md:h-11 lg:w-auto lg:h-auto 2xl:w-16 2xl:h-16 4xl:w-20 4xl:h-20"
        />
      ))}
    </div>
  );
};
