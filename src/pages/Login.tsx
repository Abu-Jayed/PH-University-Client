import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  const [login, { data, error, isLoading, isSuccess }] = useLoginMutation();

  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();

    const user = verifyToken(res.data.accessToken)
    console.log(user);

    dispatch(setUser({user,token: res.data.accessToken}));

  };
  console.log("success", isSuccess);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" {...register("userId")} id="id" />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" {...register("password")} id="password" />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
