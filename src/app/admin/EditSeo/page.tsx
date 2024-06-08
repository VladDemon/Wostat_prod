import { getSession } from "@/actions"

import { redirect } from "next/navigation";

export default async function AdminEdit() {
  const session = await getSession();
  return (
    <div>{ session.isLoggedIn ? <>page</> : redirect('/admin') }</div>
  )
}
