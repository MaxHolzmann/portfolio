export default function Project({
  title,
  description,
  image,
  deployment,
  github,
}) {
  return (
    <div className='w-1/2 shadow-md'>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} />
      <a href={deployment}>Deployment</a>
      <a href={github}>Github</a>
    </div>
  );
}
