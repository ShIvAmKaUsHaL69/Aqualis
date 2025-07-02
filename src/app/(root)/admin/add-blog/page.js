import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AddBlogForm from '../../../../../components/AddBlogForm';

export default function AddBlogPage() {
  const token = cookies().get('token')?.value;
  if (token !== 'authenticated') {
    redirect('/admin');
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-10">
      <AddBlogForm />
    </div>
  );
}