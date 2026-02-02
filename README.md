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
    > 2. I use `bun` over `npm`, as I find it's faster and plays nicer on my system. Theoretically this should just work with `npm install` as well.
    > 3. There is an `.envrc` file for `direnv` to automatically load the development environment. If you don't know what that is, you can ignore it.

    ```bash
    nix develop
    bun install
    ```

3.
    That's it so far I'm afraid.

## Database Schema

### artists

| Column | Type |
|--------|------|
| artist_id | int |
| artist_name | string |
| artist_type_id | int |
| artist_image_url | url |
| spotify_url | url |
| spotify_desc | url or null |

### genres

| Column | Type |
|--------|------|
| genre_id | int |
| genre_name | string |

### types

| Column | Type |
|--------|------|
| type_id | int |
| type_name | string |

**Type mapping:** 1 = band, 2 = duo, 3 = solo, 4 = trio

### songs

| Column | Type |
|--------|------|
| song_id | int |
| title | string |
| artist_id | int |
| genre_id | int |
| year | int |
| bpm | int |
| energy | int |
| danceability | int |
| loudness | int |
| liveness | int |
| valence | int |
| duration | int |
| acousticness | int |
| speechiness | int |
| popularity | int |

### playlists

| Column | Type |
|--------|------|
| id | int |
| playlist_id | int |
| song_id | int |

### sqlite_sequence

| Column | Type |
|--------|------|
| name | string |
| seq | int |

**Current sequences:** playlists at 30

## API Routes

### Artists

| Method | Endpoint | Description | Completed |
|--------|----------|-------------|-----------|
| GET | `/api/artists` | All artists sorted by name | ❌ |
| GET | `/api/artists/:id` | Single artist by ID | ❌ |
| GET | `/api/artists/averages/:id` | Average song metrics for artist | ❌ |

### Genres

| Method | Endpoint | Description | Completed |
|--------|----------|-------------|-----------|
| GET | `/api/genres` | All genres | ✅ |

### Songs

| Method | Endpoint | Description | Completed |
|--------|----------|-------------|-----------|
| GET | `/api/songs` | All songs sorted by title | ✅ |
| GET | `/api/songs/sort/:order` | Songs sorted by field (id, title, artist, genre, year, duration) | ✅ |
| GET | `/api/songs/:id` | Single song by ID | ✅ |
| GET | `/api/songs/search/begin/:substring` | Songs where title begins with substring | ❌ |
| GET | `/api/songs/search/any/:substring` | Songs where title contains substring | ❌ |
| GET | `/api/songs/search/year/:year` | Songs from specified year | ❌ |
| GET | `/api/songs/artist/:id` | All songs by artist | ❌ |
| GET | `/api/songs/genre/:id` | All songs in genre | ❌ |

### Playlists

| Method | Endpoint | Description | Completed |
|--------|----------|-------------|-----------|
| GET | `/api/playlists` | All playlists | ❌ |
| GET | `/api/playlists/:id` | Songs in playlist | ❌ |

### Mood

| Method | Endpoint | Description | Completed |
|--------|----------|-------------|-----------|
| GET | `/api/mood/dancing/:count` | Top N songs by danceability | ❌ |
| GET | `/api/mood/happy/:count` | Top N songs by valence | ❌ |
| GET | `/api/mood/coffee/:count` | Top N songs by liveness/acousticness | ❌ |
| GET | `/api/mood/studying/:count` | Top N songs by energy×speechiness | ❌ |

> **Note:** Mood routes default to 20 if count is missing, < 1, or > 20
