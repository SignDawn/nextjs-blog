import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      {/* 修改 index.html 中的头部 */}
      <Head>
        <title>First Post 666 </title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href={"/"}>back home</Link>
      </h2>
    </Layout>
  );
}
