from __main__ import app, db
from flask import jsonify

class Learning_Journey(db.Model):
    __tablename__ = 'learning_journey'

    learning_journey_id = db.Column(db.Integer, primary_key = True)
    learning_journey_name = db.Column(db.String(50))
    role_id = db.Column(db.Integer, db.ForeignKey('role.role_id'))

    def __init__(self, learning_journey_name, role_id):
        self.learning_journey_name = learning_journey_name
        self.role_id = role_id
    
    def json(self):
        return {
            "learning_journey_id": self.learning_journey_id,
            "learning_journey_name": self.learning_journey_name,
            "role_id": self.role_id
        }

@app.route("/learning_journeys")
def get_all_learning_journeys():
    learning_journey_list = Learning_Journey.query.all()
    if len(learning_journey_list):
        return jsonify({
            "code": "200",
            "data": {
                "learning_journeys": [learning_journey.json() for learning_journey in learning_journey_list]
            }
        })
    return jsonify({
        "code": 404,
        "message": "There are no learning_journey records"
    })

@app.route("/learning_journeys/<int:learning_journey_id>")
def get_learning_journey_by_id(learning_journey_id):
    learning_journey = Learning_Journey.query.filter_by(learning_journey_id = learning_journey_id).first()
    if learning_journey:
        return jsonify({
            "code": 200,
            "data": learning_journey.json()
        })
    return jsonify({
        "code": 404,
        "message": "Learning journey cannot be found. Please try again."
    })