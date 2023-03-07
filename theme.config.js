export default {
  // projectLink: "https://github.com/velodrome-finance/",
  // docsRepositoryBase: "https://github.com/velodrome-finance/docs/blob/master",
  titleSuffix: " – Expand Exchange",
  nextLinks: true,
  prevLinks: true,
  search: true,
  unstable_stork: false,
  darkMode: true,
  font: false,
  footer: false,
  footerText: `MIT ${new Date().getFullYear()} © Expand Exchange.`,
  // footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      {/* <img
        src="/velodrome.svg"
        alt="Expand Exchange"
        style={{ height: "30px", padding: "0 5px" }}
      /> */}
      <span className="mr-2 font-extrabold md:inline">Expand Exchange</span>
      {/* <span className="text-gray-600 font-normal hidden md:inline">
        The liquidity base-layer of the Arbitrum ecosystem.
      </span> */}
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Expand Exchange: The liquidity base-layer of the Arbitrum ecosystem."
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@VelodromeFi" />
      <meta
        name="twitter:title"
        content="Expand Exchange: The liquidity base-layer of the Arbitrum ecosystem."
      />
      <meta
        name="twitter:description"
        content="Expand Exchange is an automated market maker (AMM or simply, decentralized exchange) on Arbitrum L2 blockchain."
      />
      {/* <meta
        name="twitter:image"
        content="https://velodrome-docs.pages.dev/velodrome_banner.jpg"
      /> */}

      <meta
        property="og:title"
        content="Expand Exchange: The liquidity base-layer of the Arbitrum ecosystem."
      />
      <meta
        property="og:description"
        content="Expand Exchange is an automated market maker (AMM or simply, decentralized exchange) on Arbitrum L2 blockchain."
      />
      {/* <meta
        property="og:image"
        content="https://velodrome-docs.pages.dev/velodrome_banner.jpg"
      /> */}

      <meta name="apple-mobile-web-app-title" content="Expand Exchange" />
      <link rel="stylesheet" href="/fonts.css" />
    </>
  ),
};
