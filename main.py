import aniguessr.logic as logic
from flask import Flask, render_template, session, request, redirect, url_for
import secrets
import random

app = Flask(__name__)
app.secret_key = secrets.token_hex(16)

LEVELS = ['easy', 'medium', 'hard']

# helper function to pick a random answer from the level data
def pick_answer(level_data):
    return random.choice(list(level_data.keys()))

@app.before_request
def init_game():
    if request.endpoint == 'guess_character_play':
        if 'game_data' not in session or 'guess_character' not in session['game_data']:
            return redirect(url_for('start_guess_character'))

@app.route('/')
def home():
    return render_template('landing.html')

@app.route('/start_guess_character')
def start_guess_character():
    game_data = logic.create_character_dict(16, 4, 8)
    session['game_data'] = {
        'guess_character': {
            'data': game_data,
            'level': LEVELS[0],
            'answer': pick_answer(game_data['easy']),
            'total_score': 0
        }
    }
    return redirect(url_for('guess_character_play'))

@app.route('/guess_character_play', methods=['GET', 'POST'])
def guess_character_play():
    game = session['game_data']['guess_character']
    level = game['level']
    characters = game['data'][level]  # Dict[image_url -> List[str]]
    image_urls = list(characters.keys())  # Maintain image order

    if request.method == 'POST':
        round_score = 0

        for idx, img_url in enumerate(image_urls):
            guess = request.form.get(f'guess_{idx}', '').strip().lower()
            valid_names = [name.lower() for name in characters[img_url]]
            if guess in valid_names:
                round_score += 1000

        # Add round score to total
        session['game_data']['guess_character']['total_score'] += round_score
        session.modified = True

        if level == 'hard':
            final_score = session['game_data']['guess_character']['total_score']
            return render_template('scoring.html', final_score=final_score)
        else:
            next_level = LEVELS[LEVELS.index(level) + 1]
            game['level'] = next_level
            session.modified = True
            return redirect(url_for('guess_character_play'))

    return render_template('guess_character.html',
                           level=level,
                           characters=characters)

if __name__ == "__main__":
    app.run(debug=True)
