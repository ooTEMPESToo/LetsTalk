import NextAuth from "next-auth/next";
import { UserAuth } from "@/lib/authOptions";

const handler = NextAuth(UserAuth)
export {handler as GET, handler as POST}
