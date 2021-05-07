SAXON_JAR = tools/saxon-he-10.5.jar
SAXON = java -jar ${SAXON_JAR}

all: validation

validation:
	./validation/check-same-output.sh

.PHONY: all validation
