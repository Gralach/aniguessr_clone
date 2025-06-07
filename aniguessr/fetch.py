import requests
import time
from typing import List, Optional, Dict, Any

# BASE URL for the Jikan API
BASE_URL = f"https://api.jikan.moe/v4"

def _get(endpoint: str,
        retry_after: Optional[int] = 1,
        request_delay: Optional[float] = 0.5,
        *args, **kwargs) -> Dict[str, Any]:
    """Thin wrapper around GET with basic back-off."""
    url = f"{BASE_URL}{endpoint}"
    while True:
        resp = requests.get(url, *args, **kwargs)
        # rate-limited – wait and retry
        if resp.status_code == 429:
            time.sleep(retry_after)
            continue
        resp.raise_for_status()
        time.sleep(request_delay)            # friendly throttling
        return resp.json()
    
def _get_top_characters(max_items: int = 500) -> List[Dict[str, Any]]:
    """
    Collects up to `max_items` top characters.
    Endpoint: /top/characters
    """
    characters: List[Dict[str, Any]] = []
    per_page = 25
    pages_needed = (max_items + per_page - 1) // per_page
    print(pages_needed)
    for page in range(1, pages_needed + 1):
        payload = _get("/top/characters", params={"page": page, "limit": per_page})
        characters.extend(payload["data"])
        if len(characters) >= max_items or not payload["pagination"]["has_next_page"]:
            break
    return characters[:max_items]