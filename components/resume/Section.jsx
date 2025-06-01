export default function Section({ title }) {
  return (
    <div>
      <p className="text-[1.7rem] font-bold text-left transition-all duration-300 transform  hover:text-indigo-500 dark:hover:text-indigo-200 hover:scale-101">
        {title}
      </p>
      {/* <hr className="my-7 border-gray-300 w-full" /> */}
    </div>
  );
}
