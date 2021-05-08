SAXON_JAR = tools/saxon-he-10.5.jar
NODE_MODULES = tools/node_modules/

all: check-env validation results

check-env:
	@[ -e ${SAXON_JAR} ] || echo "ERROR: ${SAXON_JAR} missing!"
	@which node >/dev/null || echo "ERROR: \`\`node'' not found in PATH!"
	@[ -d ${NODE_MODULES} ] || (echo "WARN: node dependencies not installed, installing..." ; \
		cd tools ; npm install )

validation:
	./validation/check-same-output.sh

results:
	./results/calc-complexity.sh

.PHONY: all check-env validation results
