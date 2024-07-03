export const About = () => {
  return (
    <div id="about" className="flex flex-col gap-2 mb-6 lg:mb-12">
      <p className="text-themeWhite text-3xl mb-2 text-center">About myself</p>
      <p className="mb-4 text-themeWhite text-xs md:text-xl xl:text-2xl">
        Thank you for finding me! <br />
        As enthusiastic full stack developer based in Vancouver, I am passionate
        about developing user-centered application. I am currently focusing on{" "}
        <span className="text-primary underline"> Hono</span>,{" "}
        <span className="text-primary underline">react</span> and{" "}
        <span className="text-primary underline">postgreSQL</span>.
      </p>

      <p className="  text-themeWhite text-xs md:text-xl xl:text-2xl">
        When I am not coding, I enjoy hiking, playing basketball and drinking
        beer with my friends. I love to explore a brewery, for now, the best is
        Philips Brewing in Victoria.
      </p>
    </div>
  );
};
