import { auth, signOut, signIn } from "@/auth";

export default async function SignIn() {
  const session = await auth();
  const user = session?.user;
  return user ? (
    <>
      <h1 className="text-3xl">Welcome {user.name}</h1>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="p-2 border bg-blue-400">SignOut with Google</button>
      </form>
    </>
  ) : (
    <>
      <h1>Sign-In</h1>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button className="p-2 border-2 bg-red-500" type="submit">
          Sign In
        </button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button className="p-2 border-2 bg-red-500" type="submit">
          Sign In
        </button>
      </form>
    </>
  );
}

