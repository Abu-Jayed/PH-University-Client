import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  const [login, { data, error, isLoading, isSuccess }] = useLoginMutation();

  const onSubmit = async (data:FieldValues) => {
    const toastId = toast.loading("Trying to login");
    // console.log(data);
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      // console.log(user);
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Logged in successfully", { id: toastId });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: toastId });
    }
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
