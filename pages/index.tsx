import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-primary h-screen">
      <div className="border w-40 xl:w-full">hi div</div>
      <h1 className="text-2xl text-slate-900 dark:text-textBlack">
        Hello Maglo.
      </h1>
    </div>
  );
};

export default Home;
