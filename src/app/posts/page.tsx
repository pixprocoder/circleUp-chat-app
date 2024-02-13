import React from "react";

const page = async () => {
  const res2 = await fetch("http://localhost:3000/api/posts");
  const data2 = await res2.json();
  return (
    <div className="grid grid-cols-4 gap-4 ">
      {data2?.data.map((d) => (
        <div
          key={d.id}
          className="bg-gray-100  cursor-pointer hover:shadow-md p-2 rounded-md"
        >
          <p>{d.id}</p>
          <p className="bg-blue-200 p-1 rounded-sm">{d.title}</p>
          <p>{d.body}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
