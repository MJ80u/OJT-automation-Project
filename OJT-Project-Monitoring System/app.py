from backend.app import app, init_db, seed_programs, get_db
from werkzeug.security import generate_password_hash
import sqlite3

if __name__ == '__main__':
    init_db()
    seed_programs()
    conn = get_db()
    mgr = conn.execute("SELECT COUNT(*) as cnt FROM users WHERE role = 'manager'").fetchone()
    if not mgr or mgr['cnt'] == 0:
        conn.execute("INSERT INTO users (office_id, role, password) VALUES (?, ?, ?)",
                     ('manager', 'manager', generate_password_hash('manager2026')))
        conn.commit()
    offices = conn.execute("SELECT id FROM offices").fetchall()
    for office in offices:
        existing = conn.execute("SELECT id FROM users WHERE office_id = ? AND role = 'employee'",
                                (office['id'],)).fetchone()
        if not existing:
            conn.execute("INSERT INTO users (office_id, role, password) VALUES (?, ?, ?)",
                         (office['id'], 'employee', generate_password_hash(office['id'])))
    conn.commit()
    conn.close()
    app.run(debug=False)
