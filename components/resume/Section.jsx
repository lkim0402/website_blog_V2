export default function Section({ title }) {
  return (
    <div>
      <p className="text-2xl font-bold text-left transition-all duration-300 transform  hover:text-blue-800 dark:hover:text-blue-200 hover:scale-101">
        {title}
      </p>
      {/* <hr className="my-7 border-gray-300 w-full" /> */}
    </div>
  );
}
