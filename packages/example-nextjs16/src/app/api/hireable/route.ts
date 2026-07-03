export const revalidate = 10800;

export async function GET() {
  let hireable = false;

  try {
    const res = await fetch('https://api.github.com/users/asmyshlyaev177', {
      headers: { Accept: 'application/vnd.github.v3+json' },
      next: { revalidate },
    });
    if (res.ok) {
      const data = await res.json();
      hireable = data?.hireable === true;
    }
  } catch (error) {
    console.error('hireable route:', error);
  }

  return Response.json(
    { hireable },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=10800, max-age=10800',
      },
    },
  );
}
