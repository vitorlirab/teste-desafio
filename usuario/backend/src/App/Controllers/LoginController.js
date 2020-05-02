import Login from '../Models/Login';

class LoginController {
  async store(req, res) {
    const { username } = req.body;

    const userExists = await Login.findOne({ username });

    if (userExists) {
      return res.json(userExists);
    }

    const login = await Login.create({
      username,
    });

    return res.json(login);
  }
}

export default new LoginController();
