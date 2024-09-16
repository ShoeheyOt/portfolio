export const LogoDescription = () => {
  return (
    <div className="text-themeWhite mb-6 lg:mb-12">
      <h2 className="text-center text-3xl/10 lg:text-4xl/10 xl:text-5xl/10 mb-2 4xl:mb-0 2xl:mt-28">
        Secret of Logo
      </h2>
      <div className="grid grid-cols-3 grid-rows-3">
        <img
          src="hero/logo.svg"
          className="w-16 md:w-20 lg:w-48 2xl:w-60 h-auto col-start-1 row-start-1 lg:row-start-2 justify-self-center lg:justify-self-start self-center"
        />
        <p className="col-start-2 lg:col-start-1 col-span-2 lg:col-span-3 row-start-1 text-xs self-center md:text-sm  lg:text-2xl xl:text-3xl xl:text-center xl:-mx-4 xl:-mb-8 3xl:text-2xl 4xl:text-4xl">
          I created this logo to represent myself. Each shape and color has meanings.
        </p>
        <div className="col-span-3 lg:col-span-2 row-span-2 text-xs md:text-sm lg:text-base xl:text-2xl 3xl:text-2xl 4xl:text-3xl xl:-ml-32 4xl:-ml-44">
          <p>
            <span className="font-bold">Shape</span>: My last name is Ota (pronounce is similar to
            'ought'). written as "大" and "田" in Chinese characters. The logo layers these two
            characters.
          </p>
          <br />
          <div>
            <span className="font-bold">Color</span>: <br />
            <ul className="list-disc list-inside">
              <li>Yellow: Joy and happiness, which I convey through my words.</li>
              <li>Blue: Strength and royalty, which I demonstrate through my actions</li>
              <li>Red: Enthusiasm and passion within me</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
