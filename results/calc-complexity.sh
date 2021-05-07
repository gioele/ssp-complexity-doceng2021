#!/usr/bin/env bash

set -euo pipefail

cd $(dirname $0)/..

function main () {
	for task_name in tasks/expenses-* ; do
		calculate_complexity_js $task_name
		calculate_complexity_js_pipeline $task_name
	done

	exit 2 # TODO other tasks
}

function calculate_complexity_js () {
	task_name=$1

	js_single="$task_name/conventional.js"
	c13y_single=$(tools/complexity-js $js_single)

	results_file="results/$(basename $task_name)-conventional.tsv"
	printf "${js_single}\t${c13y_single}\n" > "$results_file"
}

function calculate_complexity_js_pipeline () {
	task_name=$1

	results_file="results/$(basename $task_name)-steps.tsv"
	echo > "$results_file"

	js_steps=$(ls $task_name/step-*.xsl | sort | tr '\n' ' ')
	for js_step in $js_steps ; do
		echo $js_step
		c13y_step=$(tools/complexity-js $js_step)
		printf "${js_step}\t${c13y_step}\n" >> "$results_file"
	done
}

main
