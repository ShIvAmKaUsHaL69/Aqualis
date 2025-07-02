import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { addBlog } from '../../../../../lib/Db';

export async function POST(request) {
  const token = cookies().get('token')?.value;
  if (token !== 'authenticated') {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  const data = await request.json();
  const { title, shortdesc, content, category, image_url } = data;

  if (!title || !content || !image_url) {
    return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
  }

  try {
    const id = await addBlog({ title, shortdesc: shortdesc || '', content, category: category || '', image_url });
    return NextResponse.json({ success: true, id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: 'Database error' }, { status: 500 });
  }
}