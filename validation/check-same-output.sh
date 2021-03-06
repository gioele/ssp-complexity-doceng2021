#!/usr/bin/env bash

set -euo pipefail

cd $(dirname $0)/..

is_debug=${DEBUG:-}

function main () {
  input_data=$1
  shift

	for task_name in "$@"; do
		check_output_xslt $task_name $input_data
		check_output_js $task_name $input_data

		check_output_xslt_pipeline $task_name $input_data
		check_output_js_pipeline $task_name $input_data
	done
}

function check_output_xslt () {
	task_name=$1
	data_file=$2

	xslt_single="$task_name/conventional.xsl"
	output_single=$(tools/xslt $xslt_single $data_file)

	check_output "$task_name" "$output_single" "$xslt_single"
}

function check_output_xslt_pipeline () {
	task_name=$1
	data_file=$2

	js_steps=$(ls $task_name/step-*.xsl | sort | tr '\n' ' ')
	output=$(cat $data_file)
	for js_step in $js_steps ; do
		echo $js_step
		output=$(echo "$output" | tools/xslt $js_step)
		log_debug $output
	done

	check_output "$task_name" "$output" "$js_steps"
}

function check_output_js () {
	task_name=$1
	data_file=$2

	js_single="$task_name/conventional.xsl.js"
	output_single=$(tools/js $js_single $data_file)

	check_output "$task_name" "$output_single" "$js_single"
}

function check_output_js_pipeline () {
	task_name=$1
	data_file=$2

	js_steps=$(ls $task_name/step-*.xsl.js | sort | tr '\n' ' ')
	output=$(cat $data_file)
	for js_step in $js_steps ; do
		echo $js_step
		output=$(echo "$output" | tools/js $js_step)
		log_debug $output
	done

	check_output "$task_name" "$output" "$js_steps"
}


function check_output () {
	task_name=$1
	output=$2
	src_file=$3

	output_expected=$(cat "$task_name/expected-output.txt")

	if [ "$output" == "$output_expected" ] ; then
		echo "OK \`\`$task_name'' ($src_file)"
	else
		echo "ERROR: \`\`$task_name'' ($src_file)"
		diff -u <(echo "$output") <(echo "$output_expected")
	fi
}

function log_debug() {
  if [ -n "${is_debug:-}" ]; then
    echo -----
    echo $@
 		echo -----
  fi
}

main $@
