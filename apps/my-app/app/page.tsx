"use client"
import { Button } from "@repo/shadcn/components/ui/button";


export default function Home() {

  let i = 0;
  return (
    <div className="flex justify-center items-center bg-green-200 m-5 p-5">
      <Button variant="destructive" onClick={() => {
        console.log("clicked", i++);
      }}> hi i am varun  </Button>
    </div >

  );
}
