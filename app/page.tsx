export default function Home() {
  return (
    <div className="p-16 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 h-screen flex flex-col items-center text-center justify-center">
      <h1 className=" dark:text-sky-400 font-bold text-5xl flex sm:text-5xl md:text-6xl lg:text-7xl ">
        Hello Tailwind
      </h1>
      Hello Tailwind
      <h2 className=" dark:text-sky-200 font-semibold">Hello Tailwind</h2>
      <p>Hello Tailwind</p>
      <button className="bg-sky-700 text-white px-4 mt-4 py-2 rounded-md disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer font-semibold enabled:hover:bg-sky-800">
        Button
      </button>
    </div>
  );
}
