import { auth } from "@/auth";
import { redirect } from "next/navigation";
export default async function Secret() {
  const session = await auth();
  if (!session) return redirect("/SignIn");

  return <h1 className="text-2xl text-green-600">Welcome to the secret </h1>;
}
