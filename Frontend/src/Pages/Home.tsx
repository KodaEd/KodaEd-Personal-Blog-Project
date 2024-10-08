function Home() {
  interface Article {
    articleId: Number;
    title: string;
    date: string;
  }

  let array: Article[] = [
    {articleId: 10, title: "My first code", date: "10 Jan 2024"}
  ];

  return (
    <div className="m-4">
      <h1 className="text-9xl mb-4">Personal Blog</h1>
      <div className="max-w-2xl">
      {array.map((blog) => {
        return <div className="flex justify-between">
          <h1 className="text-3xl">{blog.title}</h1>
          <h1 className="text-3xl">{blog.date}</h1>
        </div>;
      })}
      </div>
    </div>
  );
}

export default Home;
