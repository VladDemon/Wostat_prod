import { getSession } from '@/actions';
import style from './addPost.module.scss';

import { UploadImage } from '@/app/components/uploadImage';
import { redirect } from 'next/navigation';

export default async function AddPost() {
  const session = await getSession();
  return (
    <>
      { session.isLoggedIn ? <UploadImage/> : redirect("/admin") }
    </>
  )
}
