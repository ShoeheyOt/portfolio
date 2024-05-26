export const About = () => {
  return (
    <div id="about" className="w-1/2 mr-4 flex flex-col gap-2">
      <p className="text-themeWhite text-3xl mt-16 mb-6">About myself</p>
      <p className=" mb-4 text-themeWhite">
        Thank you for finding me! <br />
        As enthusiastic full stack developer based in Vancouver, Canada, I am
        passionate about developing user-centered application. currently
        focusing on <span className="text-secondary"> Hono</span>,{" "}
        <span className="text-secondary">react</span> and{" "}
        <span className="text-secondary">postgreSQL</span>.
        <br />
      </p>
      <p className="text-themeWhite">
        When I am not coding, I enjoy hiking, playing basketball and drinking
        beer with my friends. also love to explore a brewery, for now, the best
        is Philips Brewing in Victoria.
      </p>
    </div>
  );
};
