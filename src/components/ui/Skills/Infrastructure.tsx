import { data } from ".";

export const Infrastructure = () => {
  const infraData = data.infrastructure;
  console.log(infraData);
  return (
    <div className="flex flex-wrap gap-1">
      {infraData.map((infra, index) => (
        <img
          src={`/infra-skillset/${infra}.svg`}
          key={index}
          title={infra}
          className="w-8 h-8 md:w-11 md:h-11 lg:w-auto lg:h-auto"
        />
      ))}
    </div>
  );
};
