import Link from "next/link";
import Head from "next/head";
import MainFrame from "../../components/MainFrame";

const FirstPost = () => {
  return (
    <MainFrame>
      <Head>
        <title>First post</title>
      </Head>

      <div>
        <h1>First post</h1>
        <h2>
          <p> i am learning next.js </p>
          <Link href="/">Back to home page</Link>
        </h2>
      </div>
    </MainFrame>
  );
};
export default FirstPost;
