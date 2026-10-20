#!/bin/sh
# Run a demo app behind a stable http://<name>.localhost:1355 URL instead of a
# fixed port, so a server left over from another project cannot hold the port
# hostage.
#
# Unprivileged proxy port and plain HTTP on purpose: 443 needs sudo and HTTPS
# needs a CA in the system trust store. Neither is worth it for demo apps.
# The port lives here and in the URLs the tests use — nowhere else. Both are
# set, not defaulted: those URLs are literals, so an inherited PORTLESS_PORT
# or PORTLESS_HTTPS would move every app out from under every test.
#
# PORTLESS=0 makes portless exec the command untouched, falling back to the
# ${PORT:-<default>} each example's own scripts carry.
set -e
# Callers cd into package directories, and this may run outside a pnpm script,
# so put the repo's own bin dir on PATH rather than trusting the inherited one.
root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
PATH="$root/node_modules/.bin:$PATH"

export PORTLESS_PORT=1355
export PORTLESS_HTTPS=0

# A fixed port per app, not portless's random one: eight apps starting at once
# each pick a port that is free *at that instant*, and two of them have picked
# the same one (EADDRINUSE on CI, 2026-10-20). Still in portless's own 4000-4999
# range, where nothing else of ours listens. Keyed by the package directory,
# which every caller cd's into first.
case "$(basename -- "$PWD")" in
  example-nextjs14)      app_port=4300 ;;
  example-nextjs15)      app_port=4301 ;;
  example-nextjs16)      app_port=4302 ;;
  example-react)         app_port=4310 ;;
  example-react-router6) app_port=4311 ;;
  example-react-router7) app_port=4312 ;;
  example-remix2)        app_port=4313 ;;
  example-astro)         app_port=4314 ;;
  *) echo "portless.sh: no port for $(basename -- "$PWD"), add it to the table" >&2; exit 1 ;;
esac

exec portless run --force --app-port "$app_port" "$@"
