SAXON_JAR = tools/saxon-he-10.5.jar
NODE_MODULES = tools/node_modules/

all: check-env validation results

check-env:
	@[ -e ${SAXON_JAR} ] || (echo "ERROR: ${SAXON_JAR} missing!" ; exit 1)
	@which node >/dev/null || (echo "ERROR: \`\`node'' not found in PATH!" ; exit 1)
	@[ -d ${NODE_MODULES} ] || (echo "WARN: node dependencies not installed, installing..." ; \
		cd tools ; npm install )

validation: validation-expenses validation-paragraphs

results: results-expenses results-paragraphs

validation-expenses:
	./validation/check-same-output.sh input-data/expenses.xml tasks/expenses-*

validation-paragraphs:
	./validation/check-same-output.sh input-data/paragraphs.xml tasks/paragraphs-*

results-expenses:
	./results/calc-complexity.sh tasks/expenses-*

results-paragraphs:
	./results/calc-complexity.sh tasks/paragraphs-*


.PHONY: all check-env validation results validation-expenses validation-paragraphs results-expenses results-paragraphs
