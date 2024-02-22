import Link from "next/link";
import LatestNewsLetter from "../components/Home/LatestNewsLetter";
import TopSection from "../components/Home/TopSection";
import Image from "next/image";
import TopFeeds from "@/components/Home/TopFeeds";
import { data, pils, storiesData } from "@/utils/Constants";
import Stories from "@/components/Home/Stories";

export default function Home() {
  return (
    <main >
      <TopSection/>
      <LatestNewsLetter/>
      <TopFeeds/>
      <Stories/>
    </main>
  );
}

