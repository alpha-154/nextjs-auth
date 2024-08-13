import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen max-w-full flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl font-bold ">homepage</h1>
      <button className="w-20 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        <Link href="/login">login</Link>
      </button>
      <button className="w-20 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        <Link href="/signup">signup</Link>
      </button>
      </div>
      
    </>
  );
}
