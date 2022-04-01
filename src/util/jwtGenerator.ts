import jwt from 'jsonwebtoken';

const jwtConfig = {
  expiresIn: '1d',
};

const SECRET = process.env.JWT_SECRET || 'rodolfinho123';

const jwtGenerator = (payload = {}) => jwt.sign({ data: payload }, SECRET, jwtConfig);

export default jwtGenerator;