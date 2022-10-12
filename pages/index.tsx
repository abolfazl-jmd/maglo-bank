import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-primary h-screen">
      <div className="border w-40 xl:w-full">hi div</div>
      <h1 className="text-2xl text-slate-900 dark:text-textBlack font-gortida">
        Hello Maglo.
      </h1>
      <button data-testid="submit-button">Submit</button>
    </div>
  );
};

export default Home;
