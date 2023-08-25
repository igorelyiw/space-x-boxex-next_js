import { List } from "./components/List";
import { Navbar } from "./components/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";
import { getShipments } from "./service/shipments";

const inter = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "SpaceX Cargo Planner",
  description:
    "The application should load existing set of shipments over the network. After which they can be filtered, viewed, edited.",
};

export default async function RootLayout({ children }) {
  const data = await getShipments();

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen px-5 md:px-10 pb-16 bg-secondary overflow-hidden">
          <Navbar shipmentList={data} list={<List />} />
          <div className="max-h-screen flex mt-10">
            <List />
            <main className="bg-slate-600 w-full h-screen p-10 text-white rounded-3xl">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
