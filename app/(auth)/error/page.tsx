import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-around items-center">
      <p>Sorry, something went wrong</p>
      <Link href="/" className=" p-2 m-2 border-2  radius-lg bg-primary text-green-400 dark:text-blue-500">Back to home</Link>
    </div>
  );
}
