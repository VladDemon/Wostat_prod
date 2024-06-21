import { getSession } from "@/actions"

import { redirect } from "next/navigation";

import EditSeo from "@/app/components/EditSeo";

export default async function AdminEdit() {
  const session = await getSession();
  return (
    <div>{ session.isLoggedIn ? <EditSeo/> : redirect('/admin') }</div>
  )
}
