export const vercelUrl = 'https://state-in-url-asmyshlyaev177.vercel.app';
export const netifyUrl = 'https://state-in-url.netlify.app';

export const isVercel = !!process.env.VERCEL;

export const siteUrl = isVercel ? vercelUrl : netifyUrl;
