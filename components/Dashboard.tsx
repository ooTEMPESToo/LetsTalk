import { signIn, useSession } from 'next-auth/react';
import React from 'react'

const Dashboard = () => {
  const { data: session } = useSession();
    return (
      <>
        {session ? (
          <>
            <h1 className="text-3xl text-black font-bold">Session startted Welcom</h1>
            <button
              onClick={() => signIn("google")}
              className="border border-black rounded-lg"
            >
              Sign in with google
            </button>
            <button
              onClick={() => signIn("github")}
              className="border border-black rounded-lg"
            >
              Sign in with GitHub
            </button>
          </>
        ) : (
          <>
            <h1>session not startted or You are not login</h1>
          </>
        )}
      </>
    );
}

export default Dashboard