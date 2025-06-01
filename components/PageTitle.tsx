interface pageTitleFormat {
  title: string;
  description: string;
}

export default function PageTitle({ title, description }: pageTitleFormat) {
  return (
    <div className="mb-15 text-center sm:text-justify">
      <div
        className="text-3xl pb-2 font-bold 
      text-indigo-400
      dark:text-indigo-200"
      >
        {title}
      </div>
      <p className=" dark:text-indigo-100">{description}</p>
    </div>
  );
}
