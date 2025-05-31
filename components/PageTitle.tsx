interface pageTitleFormat {
  title: string;
  description: string;
}

export default function PageTitle({ title, description }: pageTitleFormat) {
  return (
    <div className="mb-15 mt-10 text-center sm:text-justify">
      <div className="text-2xl pb-2">{title}</div>
      <p className="text-zinc-500 dark:text-blue-100">{description}</p>
    </div>
  );
}
