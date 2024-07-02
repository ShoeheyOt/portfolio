import { data } from ".";

export const Backend = () => {
  const backedData = data.backend;
  return (
    <div className="flex flex-wrap gap-1">
      {backedData.map((backend, index) => (
        <img
          src={`/back-skillset/${backend}.svg`}
          key={index}
          title={backend}
          className="w-8 h-8 md:w-11 md:h-11 lg:w-auto lg:h-auto"
        />
      ))}
    </div>
  );
};
