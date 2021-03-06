#!/usr/bin/env bash

set -euo pipefail

cd $(dirname $0)/..

HEADERS="STEP_NAME\tCYC_COMPLEXITY"

function main () {
	for task_name in ${@:-tasks/expenses-* tasks/paragraphs-*} ; do
		calculate_complexity_js $task_name
		calculate_complexity_js_pipeline $task_name
	done

	# TODO other tasks
}

function calculate_complexity_js () {
	task_name=$1

	js_single="$task_name/conventional.xsl.js"
	c13y_single=$(tools/complexity-js $js_single)

	results_file="results/$(basename $task_name)_conventional.tsv"
	printf "${HEADERS}\n" > "$results_file"
	printf "${js_single}\t${c13y_single}\n" >> "$results_file"
}

function calculate_complexity_js_pipeline () {
	task_name=$1

	results_file="results/$(basename $task_name)_steps.tsv"
	printf "${HEADERS}\n" > "$results_file"

	js_steps=$(ls $task_name/step-*.xsl.js | sort | tr '\n' ' ')
	for js_step in $js_steps ; do
		c13y_step=$(tools/complexity-js $js_step)
		printf "${js_step}\t${c13y_step}\n" >> "$results_file"
	done
}

main $@
