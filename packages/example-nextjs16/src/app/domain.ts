export const vercelUrl = 'https://state-in-url.dev';
export const netifyUrl = 'https://state-in-url.netlify.app';

export const isVercel = !!process.env.VERCEL;

export const siteUrl = isVercel ? vercelUrl : netifyUrl;
