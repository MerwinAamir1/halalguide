import Header from "./components/Header.js";
import { getXataClient } from "@/xata";

export default async function Home() {
  const xata = getXataClient();
  const records = await xata.db.folder.getMany();

  return (
    <main className="">
      <Header />
    </main>
  );
}
