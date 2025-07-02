import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LoginForm from '../../../../components/AdminLoginForm';

export default function AdminPage() {
  const token = cookies().get('token')?.value;
  if (token === 'authenticated') {
    redirect('/admin/add-blog');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <LoginForm />
    </div>
  );
}