export default function Project({
  title,
  description,
  image,
  deployment,
  github,
}) {
  return (
    <div className='m-3 w-3/4 rounded-lg bg-white p-3 shadow-md'>
      <h1 className='text-center font-mono text-2xl md:text-3xl lg:text-4xl pb-3'>{title}</h1>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
        <img className='rounded-xl shadow-lg' src={image} />

        <div className='flex flex-col items-center justify-center items-center'>
        <p className='flex-grow justify-center lg:text-lg items-center'>{description}</p>

        <div className="flex gap-4 m-3">
        <button><a href={deployment}>Deployment</a></button>
       <button><a href={github}>Github</a></button>
        </div>

        </div>
      </div>
    </div>
  );
}
