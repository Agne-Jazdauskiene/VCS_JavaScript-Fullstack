import { useEffect } from "react";

const PasswordList = () => {
  const [PasswordList, setPasswordList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("data");
    if (!data) return;
    data = JSON.parse(data);
    setPasswordList(data);
  }, [loading]);
};

export default PasswordList;
