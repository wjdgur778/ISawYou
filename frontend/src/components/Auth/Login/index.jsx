import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Wrapper from './styles';
import TextField from '@mui/material/TextField';
import { User } from '../../../States/User';
import { LoginApi, Profile } from '../../../api/user';
import { useRecoilState } from 'recoil';
import { Wallet } from '../../../States/Wallet';
import { Link } from 'react-router-dom';
import { UserImage } from '../../../States/UserImage';

const Login = (props) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordWaring, setPasswordWarning] = useState('');
  const [user, setUser] = useRecoilState(User);
  const [wallet, setWallet] = useRecoilState(Wallet);
  const [userImage, setuserImage] = useRecoilState(UserImage);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const body = {
      userId: id,
      userPwd: password,
    };
    async function A() {
      try {
        const res = await LoginApi(body).then((res) => localStorage.setItem('access_token', res.data.data))
        setUser(id)
        setWallet(null)
        const res2 = await Profile(id).then((res) => setuserImage(res.data.data.userProfile))
      }
      catch {
        alert('회원정보를 확인해주세요')
      }

    }
    A()

  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };


  return (
    <Wrapper>
      <div className="welcome">
        <img src="images/main.png" width="640px" height="360px"></img>
      </div>
      <div>
        <Box component="form" onSubmit={onSubmitHandler} className="login_box">
          <div className="logo">
            <img src='/images/sawyou.png' width="300" height="80"></img>
          </div>
          <div className="login__form">
            <input
              type="text"
              id="loginid"
              name="loginId"
              placeholder="아이디"
              className="inputBox"
              required
              onChange={onChangeId}
            >
            </input>
          </div>
          <div className="login__form form_1">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호"
              className="inputBox"
              onChange={onChangePassword}
            >
            </input>
          </div>
          <div className="login__form form_1">
            <Button
              className="signupBtn"
              type="submit"
              variant="contained"
            >
              로그인
            </Button>
          </div>
          <div className="login__form form_1">
            계정이 없으신가요?<Link to="/signup" style={{ textDecoration: 'none', padding: 8, color: 'blue'}}>회원가입</Link>
          </div>
        </Box>
      </div>

    </Wrapper>


  )
};

export default Login;