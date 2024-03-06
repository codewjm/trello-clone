import Board from "@/components/Board";
import Header from "@/components/Header"; // the '@' is a shortcut to the top level

export default function Home() {
  return (
    <main>
      <Header />
      <Board />
    </main>
  );
}
