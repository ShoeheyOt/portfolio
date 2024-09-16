import { data } from ".";

export const Infrastructure = () => {
  const infraData = data.infrastructure;

  return (
    <div className="flex flex-wrap gap-1">
      {infraData.map((infra, index) => (
        <img
          src={`/infra-skillset/${infra}.svg`}
          key={index}
          title={infra}
          className="w-8 h-8 md:w-11 md:h-11 lg:w-auto lg:h-auto 2xl:w-16 2xl:h-16 4xl:w-20 4xl:h-20"
        />
      ))}
    </div>
  );
};
