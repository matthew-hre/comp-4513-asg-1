# COMP 4513 - Assignment #1

## Disclaimer

> As of writing this, none of the code in this repository has been AI generated. Any AI-esque code is a result of the [Sapir-Whorf Hypothesis](https://en.wikipedia.org/wiki/Linguistic_relativity) via myself working with LLMs both professionally and personally for an extended period of time. TL;DR: I write like a robot now. Sorry.

## Overview

This is a NodeJS REST API that serves data regarding songs, artists, and genres from around 2016 to 2019. It uses an SQLite database for storage and provides various endpoints for filtering, sorting, and analytical averages.

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/matthew-hre/comp-4513-asg-1.git
    cd comp-4513-asg-1
    ```

2. Install dependencies:

    > A couple notes here:
    >
    > 1. I run NixOS as my main OS, so I use Nix for development environments. If you don't use Nix, you can skip the `nix develop` step.
    > 2. I use `pnpm` over `npm`, as I find it plays nicer on my system. Theoretically this should just work with `npm install` as well.
    > 3. There is an `.envrc` file for `direnv` to automatically load the development environment. If you don't know what that is, you can ignore it.

    ```bash
    nix develop
    pnpm install
    ```

3.
    That's it so far I'm afraid.

## TODO

- [ ] Setup database + dependencies
- [ ] Mess around with the data
- [ ] Add... so many endpoints
