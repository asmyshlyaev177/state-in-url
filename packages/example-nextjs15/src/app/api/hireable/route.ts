// Live "Available for hire" status for the ForHireBadge, fetched at request
// time so it tracks the GitHub profile toggle without a rebuild. Cached for 3
// hours (10800s) to keep GitHub API calls rare. Fails closed (hireable: false)
// on error.
export const revalidate = 10800; // 3 hours (60*60*3)

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
