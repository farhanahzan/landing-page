import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import useGlobalStore from '../../stores/useGlebalStore';

// Define Zod schema for validation
const schema = z.object({
  title: z.string(),
  subtitle: z.string(),
  paragraph: z.string(),
  image: z.string().url(),
});

type FormValues = z.infer<typeof schema>;

interface FormData {
  title: string;
  subtitle: string;
  paragraph: string;
  image: string;
}

const HeroForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();

  const data = useGlobalStore((store) => store.heroFormData);
  const setHeroData = useGlobalStore((store) => store.setHeroFormData);
  console.log(data);

  useEffect(() => {
    if (data) {
      setValue('title', data.title);
      setValue('subtitle', data.subtitle);
      setValue('paragraph', data.paragraph);
      setValue('image', data.image);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    const { image, paragraph, subtitle, title } = formData;
    const newData: typeof data = {
      ...data,
      title: title,
      subtitle: subtitle,
      paragraph: paragraph,
      image: image,
    };
    setHeroData(newData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto mt-8">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register('title', { required: true })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.title && (
          <span className="text-red-500 text-sm">Title is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="subtitle"
          className="block text-sm font-medium text-gray-700"
        >
          Subtitle
        </label>
        <input
          type="text"
          id="subtitle"
          {...register('subtitle', { required: true })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.subtitle && (
          <span className="text-red-500 text-sm">Subtitle is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="paragraph"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="paragraph"
          {...register('paragraph', { required: true })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.paragraph && (
          <span className="text-red-500 text-sm">Paragraph is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Image URL
        </label>
        <input
          type="text"
          id="image"
          {...register('image', {
            required: true,
            pattern: {
              value: /^https?:\/\/\S+$/,
              message: 'Enter a valid URL',
            },
          })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.image && (
          <span className="text-red-500 text-sm">{errors.image.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="inline-block bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default HeroForm;
