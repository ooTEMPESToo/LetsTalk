import { SessionProvider } from 'next-auth/react';
import React from "react";

const Sessionwrapper = ({ children }: { children: React.ReactNode }) => {
    return <SessionProvider session={undefined}>{children}</SessionProvider>;
};

export default Sessionwrapper;
