up: api web

down:
	kill $(shell pgrep node)
	kill $(shell pgrep ruby)

api:
	cd api && bundle exec rails server &

web:
	cd web && pnpm run dev &

.PHONY: up down api web
