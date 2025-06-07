import sqlite3

def save_to_db(characters):
    conn = sqlite3.connect("../anime.db")
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS anime_characters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        mal_id INTEGER UNIQUE,
        name TEXT,
        image_url TEXT
    )
    """)

    for char in characters:
        try:
            name = char.get("name", "")
            nicknames = char.get("nicknames", [])
            name_kanji = char.get("name_kanji", None)

            # Safe join: convert to string and skip None
            all_names = ", ".join(str(n) for n in [name] + nicknames + [name_kanji] if n)

            image_url = char.get('images', {}).get('jpg', {}).get('image_url', '')

            cursor.execute("""
                INSERT OR IGNORE INTO anime_characters (mal_id, name, image_url)
                VALUES (?, ?, ?)
            """, (char["mal_id"], all_names, image_url))

        except Exception as e:
            print(f"Error saving {char.get('name', 'Unknown')}: {e}")

    conn.commit()
    conn.close()
