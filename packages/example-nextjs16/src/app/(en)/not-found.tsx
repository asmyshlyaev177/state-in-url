import { copy } from '../i18n/copy/en';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">{copy.errors.notFoundTitle}</h2>
      <p>{copy.errors.notFoundBody}</p>
    </div>
  );
}
