import {
  ComponentProps,
  registerUniformComponent,
  UniformRichText,
  UniformText,
} from '@uniformdev/canvas-react';
import Link from 'next/link';

import Splitter from './Splitter';

type HeroProps = ComponentProps<{
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  image?: string;
}>;

const highlightUniform = (value = '') =>
  !value ? null : (
    <span
      dangerouslySetInnerHTML={{
        __html: value.replace('Uniform', '<span class="highlighted">Uniform</span>'),
      }}
    />
  );

export function Hero({ buttonText, image, buttonLink }: HeroProps) {
  return (
    <>
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500">
            <p className="uppercase tracking-loose w-full">This is a Uniform demo</p>
            <UniformText
              as="h1"
              parameterId="title"
              className="my-4 text-5xl font-bold leading-tight"
              render={highlightUniform}
              placeholder="The Hero Title"
            />
            <UniformText
              as="p"
              parameterId="text"
              isMultiline
              className="leading-normal text-2xl mb-8"
            />
            <UniformRichText parameterId="myRichText" />
            {buttonText ? (
              <Link
                prefetch={false}
                href={buttonLink ? buttonLink : '#'}
                className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
              >
                <UniformText parameterId="buttonText" />
              </Link>
            ) : null}
          </div>
          {image && (
            <div className="w-full md:w-3/5 py-6 text-center">
              <img
                className="w-full md:w-4/5 z-50 min-h-500 max-h-500"
                height={500}
                src={image}
                alt={buttonText}
              />
            </div>
          )}
        </div>
      </div>
      <Splitter />
    </>
  );
}
registerUniformComponent({
  type: 'hero',
  component: Hero,
});
