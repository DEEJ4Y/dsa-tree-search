import Head from "next/head";
import Aim from "../components/pages/Home/Aim/Aim";
import Footer from "../components/pages/Home/Footer/Footer";
import ParagraphForm from "../components/pages/Home/Form/Form";
import Title from "../components/pages/Home/Title/Title";
import TreeRenderer from "../components/pages/Home/TreeRenderer/TreeRenderer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tree search</title>
        <meta
          name="description"
          content="David Joseph's project for Data Structures and Algorithms"
        />
      </Head>
      <Title />
      <Aim />
      <ParagraphForm />
      <TreeRenderer />
      <Footer />
    </div>
  );
}
