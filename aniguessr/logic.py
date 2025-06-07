import aniguessr.fetch as fetch
import random
from typing import List, Optional, Dict, Any

def create_character_dict(max_items: int = 500,
                          range_easy: int = 100,
                          range_medium: int = 200) -> Dict[str, List[str]]:
    """
    Create a dictionary with image URLs as keys and names as values.
    """
    data = fetch._get_top_characters(max_items)
    # make the keys as the image URLs and the values as a list of names
    # might not be the best way to do this, but it works for now
    def pick_range(start: int, end: int) -> Dict[str, List[str]]:
        subset = data[start:end]
        chosen = random.sample(subset, 4)
        return {
            character.get('images', {}).get('jpg', {}).get('image_url', ''):
                [character['name']] + character.get('nicknames', [])
            for character in chosen
        }
    return {
        "easy": pick_range(0, range_easy),
        "medium": pick_range(range_easy, range_medium),
        "hard": pick_range(range_medium, max_items)
    }