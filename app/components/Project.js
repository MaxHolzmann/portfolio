export default function Project({
  title,
  description,
  image,
  deployment,
  github,
}) {
  // can i make the title more intersting? or visually appealing?
  // make buttons more interesting?

  return (
    <div className="m-3 w-3/4 rounded-lg bg-white bg-gradient-radial from-white from-80% to-slate-300 p-3 shadow-md">
      <h1 className="bg-gradient-radial from-slate-600 to-slate-700 bg-clip-text pb-7 text-center font-bebas text-6xl text-transparent drop-shadow-sm md:text-7xl lg:text-6xl">
        {title}
      </h1>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <img className="rounded-xl shadow-lg" src={image} />

        <div className="flex flex-col items-center justify-center">
          <p className="lg:text-lg">{description}</p>

          <div className="m-3 flex gap-4">
            <button className="text-md rounded-md bg-slate-200 px-3.5 py-2.5 font-semibold text-slate-600 shadow-sm hover:bg-slate-300">
              <a target="_blank" href={deployment}>
                Deployment
              </a>
            </button>
            <button className="text-md rounded-md bg-slate-200 px-3.5 py-2.5 font-semibold text-slate-600 shadow-sm hover:bg-slate-300">
              <a target="_blank" href={github}>
                GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
