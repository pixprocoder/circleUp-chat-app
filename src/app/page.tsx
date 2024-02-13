import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/friends");
  const data = await res.json();

  return (
    <>
      <div className="grid grid-cols-5 text-center">
        {data?.data?.map((d) => (
          <ul className="bg-gray-200 p-2 m-2 rounded-md" key={d.id}>
            <li>{d.id}</li>
            <li>{d.userId}</li>
            <li>{d.title}</li>
            <li>
              <Button>{d.completed ? "true" : "false"}</Button>
            </li>
          </ul>
        ))}
      </div>
      <Button>Hello</Button>
    </>
  );
}
