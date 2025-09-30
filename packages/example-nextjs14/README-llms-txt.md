# Serving Markdown to LLMs via Accept Header

This Next.js app serves markdown content to LLMs and AI agents based on the HTTP Accept header, following the approach described in [this article](https://www.skeptrune.com/posts/use-the-accept-header-to-serve-markdown-instead-of-html-to-llms/).

## How It Works

1. **Accept Header Detection**: The middleware checks if the request's Accept header prefers `text/markdown` or `text/plain` over `text/html`.

2. **Content Generation**: At build/dev time, a script reads `public/llms.txt` and inlines it into the middleware file.

3. **Response**: When an LLM requests the homepage with `Accept: text/markdown` or `Accept: text/plain`, it receives the markdown content instead of HTML.

## Architecture

### Why Inline the Content?

Next.js middleware runs on Edge Runtime, which doesn't support Node.js `fs` module. To work around this:
- A build script (`scripts/generate-middleware-content.cjs`) reads `public/llms.txt`
- The content is inlined into `src/middleware.ts` as a constant
- The script runs automatically before `dev` and `build` commands

### Files

- **`public/llms.txt`** - Source markdown content for LLMs
- **`scripts/generate-middleware-content.cjs`** - Build script that generates middleware
- **`src/middleware.ts`** - Auto-generated middleware (do not edit manually)
- **`src/app/layout.tsx`** - Contains LLM-friendly metadata links

## Usage

### Update LLM Content

1. Edit `public/llms.txt`
2. Run `npm run generate-middleware` (or restart dev server)
3. The middleware will be regenerated automatically

### Testing

```bash
# Test with curl
curl -H "Accept: text/markdown" http://localhost:3000

# Should return markdown content

# Test with browser Accept header
curl -H "Accept: text/html" http://localhost:3000

# Should return HTML
```

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "node scripts/generate-middleware-content.cjs && next dev --port 3000",
    "build": "node scripts/generate-middleware-content.cjs && next build",
    "generate-middleware": "node scripts/generate-middleware-content.cjs"
  }
}
```

## Benefits

- **Token Efficiency**: LLMs receive clean markdown without HTML markup, reducing token usage by up to 10x
- **Better Context**: AI agents get semantic, structured content instead of presentational HTML
- **Transparent**: Regular users see the normal HTML website
- **Standards-Based**: Uses standard HTTP content negotiation

## References

- [Original article](https://www.skeptrune.com/posts/use-the-accept-header-to-serve-markdown-instead-of-html-to-llms/)
- [llms.txt specification](https://llmstxt.org/)
