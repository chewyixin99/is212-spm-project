from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.debug = True

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:root' + \
                                        '@localhost:3306/spm'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {'pool_size': 100,'pool_recycle': 280}

db = SQLAlchemy(app)
CORS(app)

from services.staff import get_staff_by_id, get_all_staffs
from services.role import get_all_roles, get_role_by_id
from services.course import get_all_courses, get_course_by_id
from services.skill import get_all_skills, get_skill_by_id
from services.learning_journey import get_all_learning_journeys, get_learning_journey_by_id

# Run the application
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
