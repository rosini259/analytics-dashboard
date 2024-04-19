"use client";
import NumberLessons from "@/components/NumberLessons";
import ChartnOptions from "@/components/ChartnSide";
export default function Home() {
  return (
    <main className="mx-4 my-4">
      <h1 className="text-2xl text-purple-700">Analysis Chart</h1>
      <NumberLessons />
      <ChartnOptions />
    </main>
  );
}
