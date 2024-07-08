import useGlobalStore from '../../stores/useGlebalStore';

const HerorVarientOne = () => {
  const data = useGlobalStore((store) => store.heroFormData);
  const {
    title,
    subtitle,
    paragraph,
    image,
    ctaOne,
    ctaOneLink,
    ctaTwo,
    ctaTwoLink,
  } = data;

  return (
    <section className="h-[48rem] px-[6.5625rem] flex items-center justify-between max-w-[85.375rem] w-full mx-auto font-primary bg-primary gap-x-16">
      <div className="flex flex-col items-start max-w-[38rem]">
        <h2 className="mb-[2.375rem] font-medium text-secondary leading-[1.0419rem] ">
          {subtitle}
        </h2>
        <h1 className="mb-6 font-extrabold text-primary leading-[3.4844rem]">
          {title}
        </h1>
        <p className="mb-[3.375rem] text-typography leading-[1.6rem] -tracking-[0.02em]">
          {paragraph}
        </p>
        <div className="flex gap-x-4">
          <button className="text-buttonsone bg-buttonsone leading-6  -tracking-[0.02em] font-semibold text-center px-6 py-[1rem] rounded-buttonsone uppercase">
            <a href={ctaOneLink}>{ctaOne}</a>
          </button>
          <button className="text-buttonstwo bg-buttonstwo leading-6 -tracking-[0.02em] font-semibold text-center px-6 py-[1rem] rounded-buttonstwo uppercase">
            <a href={ctaTwoLink}>{ctaTwo}</a>
          </button>
        </div>
      </div>
      <div className="w-[24.875rem] h-[23rem] bg-slate-50 rounded-tl-[3.9375rem]">
        <img
          alt="title"
          src={image}
          className="w-full h-full object-cover rounded-tl-[3.9375rem]"
        />
      </div>
    </section>
  );
};

export default HerorVarientOne;
