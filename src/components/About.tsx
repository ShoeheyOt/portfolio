export const About = () => {
  return (
    <div id="about" className="flex flex-col gap-2 mb-6 lg:mb-12 tracking-wide">
      <p className="text-themeWhite text-3xl/10 lg:text-4xl xl:text-5xl/10 mb-6 lg:mb-12 text-center">
        About myself
      </p>
      <p className="mb-4 text-themeWhite text-xs/normal md:text-2xl/normal xl:text-4xl/normal">
        Thank you for finding me! <br />
        As an enthusiastic front end developer based in Vancouver, I am passionate about developing
        user-centered application proficiently in{" "}
        <span className="text-primary underline">Typescript</span>,{" "}
        <span className="text-primary underline">React</span> and{" "}
        <span className="text-primary underline">TailwindCSS</span>. I am currently curious about{" "}
        <span className="text-danger underline">Hono</span>,{" "}
        <span className="text-danger underline">Rust</span> and{" "}
        <span className="text-danger underline">neovim</span>.
      </p>

      <p className="  text-themeWhite text-xs/normal md:text-2xl/normal xl:text-4xl/normal">
        When I am not coding, I enjoy hiking, playing basketball and drinking beer with my friends.
        I love exploring breweries, and so far, my favorite is Philips Brewing in Victoria.
      </p>
    </div>
  );
};
