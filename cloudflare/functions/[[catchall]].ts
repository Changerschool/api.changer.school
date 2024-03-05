// Check usage technical Cloudflare domains instead of main domain and return 403 Forbidden

export async function onRequest(context: any): Promise<Response> {
  const { request } = context;
  const url: string = request.url;
  const { pathname } = new URL(request.url);

  if (url.startsWith('https://api.changer.school') || url.startsWith('https://dev.api.changer.school')) {
      return await context.next();
  } else {
      return new Response('Forbidden', {
          status: 403,
          headers: {
              'Content-Type': 'text/plain',
              'Cache-Control': 'no-cache',
          }
      });
  }
}