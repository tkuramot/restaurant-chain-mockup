up: api web

down:
	pkill node
	pkill ruby

api:
	cd api && bundle exec rails server &

web:
	cd web && pnpm run dev &

.PHONY: up down api web
