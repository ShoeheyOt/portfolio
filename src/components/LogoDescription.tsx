export const LogoDescription = () => {
  return (
    <div className="text-themeWhite mb-6 lg:mb-12">
      <h2 className="text-center text-3xl mb-2">Secret of Logo</h2>
      <div className="grid grid-cols-3 grid-rows-3">
        <img
          src="hero/logo1.svg"
          className="w-16 md:w-20 lg:w-48 2xl:w-60 h-auto col-start-1 row-start-1 lg:row-span-3 justify-self-center lg:justify-self-start self-center"
        />
        <p className="col-start-2 col-span-2 row-start-1 text-xs self-center md:text-sm lg:text-base xl:text-lg 3xl:text-2xl">
          This logo is created by me, which represents myself. each shape and
          color of this log has meanings.
        </p>
        <div className="col-span-3 lg:col-span-2  row-span-2 text-xs md:text-sm lg:text-base xl:text-lg 3xl:text-2xl">
          <p>
            -Shape <br />
            My last name is Ota (pronounce is similar to ought). which is "大"
            and "田" in Chinese Character. The logo consists of these two
            characters in a layer.
          </p>
          <p>
            -color <br />
            yellow: Joyful and happiness, which I make others be with what I
            say.
            <br />
            blue: Strength and Royal, which I show with what I do <br />
            red: Enthusiasm and Passion which I have in myself
          </p>
        </div>
      </div>
    </div>
  );
};
