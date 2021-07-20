Small-step pipelines reduce the complexity of XSLT/XPath programs (auxiliary material)
======================================================================================

This repository contains the datasets and scripts needed to reproduce the
results presented in the paper:

Marcel Schaeben and Gioele Barabucci. 2021. **Small-step pipelines reduce
the complexity of XSLT/XPath programs**. In _ACM Symposium on Document
Engineering 2021 (DocEng '21), August 24-27, 2021, Limerick, Ireland_.
ACM, New York, NY, USA. https://doi.org/10.1145/3469096.3474922

Abstract:

> As code is adapted to deal with unclean external data, it tends to grow
> in size and complexity.
>
> The use of _small-step pipelines_ (a programming style in which data is
> manipulated through small, independent steps; a variation on the
> point-free and concatenative programming paradigms) has been suggested
> as a way to reduce this complexity, resulting in simpler programs.
>
> Our preliminary quantitative results show that writing data-curation and
> data-analysis XSLT/XPath programs as small-step pipelines leads to a
> significant reduction of the peak McCabe cyclomatic complexity.
> This reduction of complexity is associated with a parallel increase in
> readability of the resulting code.


Folder structure
----------------


* `input-data/`: XML datasets.
* `results/`: TSV files with the calculated cyclomatic complexities.
* `tasks/`: A series of analyses implemented implemented in two styles:
  as a conventional program and as a small-step pipeline.
* `tools/`: Support tools (Saxon for XSTL; node.js and escomplex for JavaScript)
* `validation/`: Script to check the equivalence of the source XSLT programs
  to their converted JavaScript counterparts.

Dependencies
------------

The XSLT programs require a XSLT 2-compliant engine, for example
Saxon 10.5 HE.

Running escomplex requires a working node.js (version 16.1).
We recommend using `nodenv` to set up a suitable environment.

Instructions
------------

The simplest way to replicate the results is to run Make with no arguments:

    $ make

To run the tasks and validate their output, invoke Make in the following
way:

    $ make validate

To calculate the cyclomatic complexity of the programs and populate `results/`
with the tabulated results use:

    $ make results
