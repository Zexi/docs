.PHONY: build

# check: https://docusaurus.io/docs/i18n/tutorial
translation-en:
	yarn write-translations --locale en

serve:
	npm run start

serve-en:
	npm run start -- --locale en

build:
	yarn build

build-serve: build
	cd ./build/ && python3 -m http.server 8002

sync-translation-files:
	rsync -avP ./docs/* ./i18n/en/docusaurus-plugin-content-docs/current/
