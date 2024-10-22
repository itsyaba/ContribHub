// import { authOptions } from "@/lib/auth";
// import { getServerSession } from "next-auth";
// import React from "react";
// import { UserAccountNav } from "./UserAccountNav";
// import Link from "next/link";
// import { buttonVariants } from "./ui/button";

// const SignUpButton = async () => {
//   const session = await getServerSession(authOptions);
//   return (
//     <>
//       {session?.user ? (
//         <UserAccountNav user={session.user} />
//       ) : (
//         <Link href="/sign-in" className={buttonVariants()}>
//           Sign In
//         </Link>
//       )}
//     </>
//   );
// };

// export default SignUpButton;

import React from "react";

const SignUpButton = () => {
  return <div>SignUpButton</div>;
};

export default SignUpButton;
