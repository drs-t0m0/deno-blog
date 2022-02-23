# Portfolio & Blog with Deno Deploy

- [Portfolio & Blog](https://drs-t0m0.deno.dev/)

## Usage

Local Debug

```
deno run -A --no-check --watch main.ts
```

After adding, removing, or moving a page in the `pages` directory, run:

```
fresh routes
```

E2E Test with Puppeteer

```
deno test -A --unstable tests/browser.ts
```

## Ref

- [fresh](https://github.com/lucacasonato/fresh)
- [puppeteer](https://github.com/lucacasonato/deno-puppeteer)
- [test_suite](https://github.com/udibo/test_suite)
