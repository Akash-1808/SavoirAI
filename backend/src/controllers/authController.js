export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Login attempt:', email, password);

    // For now, let's just demo login
    if (email === 'test@example.com' && password === '123456') {
      return res.json({ user: { email } });
    }

    // Otherwise, fail
    res.status(400).json({ error: 'Invalid email or password' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
