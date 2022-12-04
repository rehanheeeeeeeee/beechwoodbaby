import React from "react";
import { setUser } from "../redux/userSlice";

export default function DashboardLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
  }, [dispatch]);
  return <div className="bg-primary">{children}</div>;
}
