import Link from "next/link";
const FirstPost = () => {
  return (
    <div>
      <h1>First post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  );
};
export default FirstPost;
