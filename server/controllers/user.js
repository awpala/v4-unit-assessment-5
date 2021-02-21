const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        let { username, password, profile_pic } = req.body;
        const db = req.app.get('db');

        if (!profile_pic) profile_pic = `https://robohash.org/${username}.png`;

        const results = await db.user.find_user_by_username([username]);
        const existingUser = results[0];

        if (existingUser) {
            return res.status(401).send('Username already exists.');
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        
        const registerUser = await db.user.create_user([username, hash, profile_pic]);
        const user = registerUser[0];

        req.session.user = user;
        return res.status(200).send(user);
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');

        const results = await db.user.find_user_by_username([username]);
        const existingUser = results[0];

        if (!existingUser) {
            return res.status(401).send('User not found.');
        }

        const isAuthenticated = bcrypt.compareSync(password, existingUser.password);
        if (!isAuthenticated) {
            return res.status(403).send('Incorrect password.');
        }

        req.session.user = existingUser;
        return res.status(200).send(existingUser);
    },
    getUser: async (req, res) => {
        if (!req.session.user) {
            return res.sendStatus(404);
        }
        return res.status(200).send(req.session.user);
    },
    logout: async (req, res) => {
        req.session.destroy();
        return res.sendStatus(200);
    },
}
