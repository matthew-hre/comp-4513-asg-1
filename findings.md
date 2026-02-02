artists table

- artist_id: incrementing ints
- artist_name: string
- artist_type_id: int
- artist_image_url: url
- spotify_url: url
- spotify_desc: url | none

genres table

- genre_id: int
- genre_name: string (lower case)

playlists table:

- id: int
- playlist_id: int
- song_id: int

sqlite_sequence table

- name: string
- seq: int only contains `playlists, 30`

types table

- type_id: int
- type_name: string 1 = band, 2 = duo, 3 = solo, 4 = trio

songs table

- song_id: int
- title: string
- artist_id: int
- genre_id: int
- year: int
- bpm: int
- energy: int
- danceability: int
- loudness: int
- liveness: int
- valence: int
- duration: int
- acousticness: int
- speechiness: int
- popularity: int
