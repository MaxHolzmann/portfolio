export default function Project({
  title,
  description,
  image,
  deployment,
  github,
}) {
  return (
    <div className='m-3 w-1/2 rounded-lg bg-white p-3 shadow-md sm:w-2/3 lg:w-1/2'>
      <h1 className='text-center font-mono text-2xl'>{title}</h1>
      <div className='grid grid-cols-2'>
        <img className='rounded-xl shadow-lg' src={image} />
        <p>{description}</p>
      </div>
      <a href={deployment}>Deployment</a>
      <a href={github}>Github</a>
    </div>
  );
}
