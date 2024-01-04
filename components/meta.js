import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Yiwu Sheikh Trading",
  keywords: "Shipping, Yiwu",
  description: "Yiwu Sheikh Trading: Your reliable shipping partner in Yiwu. Explore seamless logistics solutions, international freight, and efficient shipping services from China's vibrant trade hub. Connect for reliable global shipping today!",
};

export default Meta;
