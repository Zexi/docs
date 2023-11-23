.PHONY: build

# check: https://docusaurus.io/docs/i18n/tutorial
translation-en:
	yarn write-translations --locale en

build:
	yarn build

sync-translation-files:
	rsync -avP ./docs/* ./i18n/en/docusaurus-plugin-content-docs/current/
