export default function Section({ title }) {
  return (
    <div>
      <p
        className="text-2xl font-bold text-left transition-all duration-300 transform 
          microsoftFont text-indigo-400 hover:text-[#999ffc]
         dark:text-indigo-300  dark:hover:text-indigo-200 hover:scale-101
       "
      >
        {title}
      </p>
    </div>
  );
}
