import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthProvider";
import Link from "next/link";
import React, { useContext } from "react";

const AuthNavItem = ({ setOpen }) => {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <Button onClick={() => setOpen(false)} asChild variant="secondary">
      {loggedInUser ? (
        <Link href="/dashboard/profile">Profile</Link>
      ) : (
        <Link href="/login">Register</Link>
      )}
    </Button>
  );
};

export default AuthNavItem;
