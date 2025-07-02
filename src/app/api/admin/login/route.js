import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, password } = await request.json();

  if (email === 'admin@gmail.com' && password === 'admin') {
    const response = NextResponse.json({ success: true });
    // Set an httpOnly cookie so it can't be accessed via client-side JS
    response.cookies.set({
      name: 'token',
      value: 'authenticated',
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
    });
    return response;
  }

  return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
}