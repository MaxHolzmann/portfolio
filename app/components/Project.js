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
    <div className='m-3 w-3/4 rounded-lg bg-white p-3 shadow-md'>

      <h1 className='pb-5 text-center text-slate-500 font-sans text-2xl md:text-3xl lg:text-4xl drop-shadow-md'>
        {title}
      </h1>

      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
        <img className='rounded-xl shadow-lg' src={image} />

        <div className='flex flex-col items-center justify-center'>
          <p className='lg:text-lg'>
            {description}
          </p>

          <div className='m-3 flex gap-4'>
            <button className='rounded bg-slate-500 p-3 font-semibold text-white hover:scale-105 drop-shadow-sm'>
              <a href={deployment}>Deployment</a>
            </button>
            <button className='rounded bg-slate-500 p-3 font-semibold text-white hover:scale-105 drop-shadow-sm'>
              <a href={github}>Github</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
