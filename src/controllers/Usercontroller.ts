import { Request, Response } from 'express';
import { User } from '../models/Usermodel';
import { config } from '../config/config'
import bcrypt  from 'bcryptjs';
import jwt from 'jsonwebtoken';


const SignUp = async (req: Request, res: Response) => {
    const { body } = req;
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const chekemail = await User.findOne({ email: req.body.email });
    if (chekemail) {
        return res.status(400).json({
            error: 'Email Not Found '
        });
    } else {
        const user = await User.create({
            ...body,
            role: 'Client',
            password: hashPassword
        });
        try {
            res.send('created succflly');
        } catch {
            res.status(400).send('error creating');
        }
    }
}

const Login = async (req: Request, res: Response): Promise<Response> => {

    const user = await User.findOne({ email: req.body.email })
    if (!user)
        return res.status(400).send({
            error: 'Email Not Found'
        })


    const password = await bcrypt.compare(req.body.password, user.password)
    if (!password)
        return res.status(400).send({
            error: 'Password Not Found'
        })

    const token = jwt.sign({ _id: user._id, role: user.role }, config.token.token_secret as string)
    res.cookie('token', token)
    const { _id, username, email, role } = user;
    return res.status(200).send({ user: { _id, username, email, role } })
}


export { SignUp , Login }