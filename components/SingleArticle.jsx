import Image from "next/image";

export const SingleArticle = ({ author, image, category, title, children }) => {
  return (
    // <div className='px-4 py-24'>
    //   <div className='mx-auto max-w-prose'>
    //     <p className='block text-center text-base font-semibold uppercase tracking-wide text-indigo-600'>
    //       {category}
    //     </p>
    //     <h1 className='mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
    //       {title}
    //     </h1>
    //     <br />
    // <Image
    //   className='lg:h-48 md:h-36 w-full object-cover object-center'
    //   src={image}
    //   width={720}
    //   height={400}
    //   alt='blog'
    // />
    //     <hr />
    //     <br />
    //     <div className='flex items-center'>
    //       <Image src={author.image} width={50} height={50} alt='blog' />

    //       <div>
    //         <strong>{author.name}</strong>
    //         <br />
    //         <span>Technical advisor</span>
    //       </div>
    //     </div>
    //     <article className='mx-autotext-gray-500 prose-md prose prose-indigo py-24 lg:prose-lg'>
    //       {children}
    //     </article>
    //   </div>
    // </div>
    <article
      className="px-4 py-24 mx-auto max-w-7xl"
      itemid="#"
      itemscope
      itemtype="http://schema.org/BlogPosting"
    >
      <div className="w-full mx-auto mb-12 text-left w-3/4">
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={image}
          width={720}
          height={400}
          alt="blog"
        />
        <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
          {" "}
          {category}
        </p>
        <h1
          className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
          itemprop="headline"
          title="Rise of Tailwind - A Utility First CSS Framework"
        >
          {title}
        </h1>
        <div className="flex mb-6 space-x-2">
          <a
            className="text-gray-900 bg-gray-100 badge hover:bg-gray-200"
            href="#"
          >
            CSS
          </a>
          <a
            className="text-gray-900 bg-gray-100 badge hover:bg-gray-200"
            href="#"
          >
            Tailwind
          </a>
          <a
            className="text-gray-900 bg-gray-100 badge hover:bg-gray-200"
            href="#"
          >
            AlpineJS
          </a>
        </div>
        <a className="flex items-center text-gray-700" href="#">
          <div className="avatar">
            <img src="/placeholder.jpg" alt="Photo of Praveen Juge" />
          </div>
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">Praveen Juge</p>
            <p className="text-sm text-gray-500">Jan 02 2021</p>
          </div>
        </a>
      </div>

      <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">{children}</div>
    </article>
  );
};
