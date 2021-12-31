/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/cat.jpg"
          width="720"
          height="600"
        />
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          </h1>
          <p className="mb-8 leading-relaxed">
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is
            pain..."
          </p>
          <p className="text-sm mt-2 text-gray-500 mb-8 w-full">not ur idolas.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
